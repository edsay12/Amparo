import pandas as pd
import joblib
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

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

@app.post("/predict")
def predict(dados: EntradaModelo):
    # Converte entrada JSON em dicionário
    input_dict = dados.model_dump()

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
    print("console",predicao)

    #Mapeamento das classes
    classes = {
        0: "fisica",
        1: "nenhuma",
        2: "outros",
        3: "psicológica",
    }

    resultado = {
        classes[i]: round(float(prob * 100),2)
        for i, prob in enumerate(predicao)
    }

    

    return resultado