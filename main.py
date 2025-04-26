from fastapi import FastAPI,HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
from pydantic import BaseModel
import mysql.connector
from typing import Optional
from datetime import date, time


# Connect to the database
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="root",
    database="denuncia"
)

app = FastAPI()

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todas as origens, você pode definir apenas seu frontend como "http://localhost:3000"
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

# Carrega o modelo treinado
modelo = joblib.load("model_lgb.sav")

# Carrega a lista de colunas que o modelo espera
colunas_modelo = joblib.load("colunas_modelo.pkl")

# Define o schema de entrada da API
class EntradaModelo(BaseModel):
    ANO: int
    NU_IDADE_N: int
    AUTOR_SEXO: int
    OUT_VEZES: int
    UF: str
    CS_RACA: str
    CS_ESCOL_N: str
    LOCAL_OCOR: str
    TIPO_RELACAO: str

class EntradaDenuncia(BaseModel):
    nome_completo: str
    email: Optional[str] = None
    telefone: Optional[str] = None
    cidade: Optional[str] = None
    tipo_violencia: Optional[str] = None
    local_ocorrencia: Optional[str] = None
    data_ocorrencia: Optional[date] = None
    hora_aproximada: Optional[time] = None
    frequencia: Optional[str] = None
    descricao_detalhada: Optional[str] = None
    informacoes_agressor: Optional[str] = None
    testemunhas: Optional[str] = None
    evidencias: Optional[str] = None

@app.post("/predict")
def predict(dados: EntradaModelo):
    # Converte entrada JSON em dicionário
    input_dict = dados.dict()

    # Renomeia os campos categóricos para ficarem no formato esperado do one-hot
    input_dict[f"CS_RACA_{input_dict.pop('CS_RACA')}"] = 1
    input_dict[f"UF_{input_dict.pop('UF')}"] = 1
    input_dict[f"LOCAL_OCOR_{input_dict.pop('LOCAL_OCOR')}"] = 1
    input_dict[f"TIPO_RELACAO_{input_dict.pop('TIPO_RELACAO')}"] = 1
    input_dict[f"AUTOR_SEXO_{input_dict.pop('AUTOR_SEXO')}"] = 1
    input_dict[f"CS_ESCOL_N_{input_dict.pop('CS_ESCOL_N')}"] = 1

    # Transforma em DataFrame
    df = pd.DataFrame([input_dict])

    # Garante que todas as colunas esperadas estão presentes
    for col in colunas_modelo:
        if col not in df.columns:
            df[col] = 0

    # Reordena as colunas na ordem do treino
    df = df[colunas_modelo]

    # Faz a predição
    predicao = modelo.predict_proba(df)[0]

    # Mapeamento das classes
    classes = {
        0: "fisica",
        1: "nenhuma",
        2: "outros",
        3: "psicológica",
    }

    resultado = {
        classes[i]: round(float(prob * 100), 2)
        for i, prob in enumerate(predicao)
    }

    return resultado

@app.get("/denuncias/todas", status_code=status.HTTP_200_OK)
def select_denuncias():
    cursor = mydb.cursor()
    select_query = "SELECT * FROM denuncias"
    cursor.execute(select_query)
    results = cursor.fetchall()
    cursor.close()
    return results

@app.get("/denuncias/{denuncia_id}", status_code=status.HTTP_200_OK)
def get_denuncias_by_id(denuncia_id: int):
    cursor = mydb.cursor()
    select_query = "SELECT * FROM denuncias WHERE id = %s"
    cursor.execute(select_query, (denuncia_id,))
    result = cursor.fetchone()
    cursor.close() 
    if result:    
        return result
    else:
        raise HTTPException(status_code=404, detail="User not found")
    
@app.post("/denuncias/criar", status_code=status.HTTP_201_CREATED)
def insert_denuncias(denuncia: EntradaDenuncia):
    cursor = mydb.cursor()
    insert_query = """
    INSERT INTO denuncias (
        nome_completo, email, telefone, cidade, tipo_violencia, 
        local_ocorrencia, data_ocorrencia, hora_aproximada, frequencia, 
        descricao_detalhada, informacoes_agressor, testemunhas, evidencias
    ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    values = (
        denuncia.nome_completo,
        denuncia.email,
        denuncia.telefone,
        denuncia.cidade,
        denuncia.tipo_violencia,
        denuncia.local_ocorrencia,
        denuncia.data_ocorrencia,
        denuncia.hora_aproximada,
        denuncia.frequencia,
        denuncia.descricao_detalhada,
        denuncia.informacoes_agressor,
        denuncia.testemunhas,
        denuncia.evidencias,
    )

    try:
        cursor.execute(insert_query, values)
        mydb.commit()

    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")
    
    finally:
        cursor.close()
        

    return {"message": "Denúncia registrada com sucesso"}

@app.put("/denuncias/modificar/{denuncia_id}", status_code=status.HTTP_200_OK)
def update_denuncias(denuncia_id: int, denuncia: EntradaDenuncia):

    update_query = """
    UPDATE denuncias
    SET 
        nome_completo = %s,
        email = %s,
        telefone = %s,
        cidade = %s,
        tipo_violencia = %s,
        local_ocorrencia = %s,
        data_ocorrencia = %s,
        hora_aproximada = %s,
        frequencia = %s,
        descricao_detalhada = %s,
        informacoes_agressor = %s,
        testemunhas = %s,
        evidencias = %s
    WHERE id = %s
"""

    values = (
        denuncia.nome_completo,
        denuncia.email,
        denuncia.telefone,
        denuncia.cidade,
        denuncia.tipo_violencia,
        denuncia.local_ocorrencia,
        denuncia.data_ocorrencia,
        denuncia.hora_aproximada,
        denuncia.frequencia,
        denuncia.descricao_detalhada,
        denuncia.informacoes_agressor,
        denuncia.testemunhas,
        denuncia.evidencias,
        denuncia_id
    )

    cursor = mydb.cursor()
    try:
        cursor.execute(update_query, values)
        mydb.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="User not found")
        return {"message": "Denuncia updated successfully"}
    finally:
        cursor.close()

@app.delete("/denuncias/deletar/{denuncia_id}", status_code=status.HTTP_200_OK)
def delete_denuncia(denuncia_id: int):
    delete_query = "DELETE FROM denuncias WHERE id = %s"
    cursor = mydb.cursor()
    try:
        cursor.execute(delete_query, (denuncia_id,))
        mydb.commit()
        if cursor.rowcount == 0:
            raise HTTPException(status_code=404, detail="User not found")
        return {"message": "Denuncia deleted successfully"}
    finally:
        cursor.close()