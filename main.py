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
    CS_RACA: str
    UF: str
    LOCAL_OCOR: str
    GRUPO_IDADE: str
    TIPO_RELACAO: str
    AUTOR_SEXO: int
    OUT_VEZES: int

@app.post("/predict")
def predict(dados: EntradaModelo):
    # Converte entrada JSON em dicionário
    input_dict = dados.dict()

    # Renomeia os campos categóricos para ficarem no formato esperado do one-hot
    input_dict[f"CS_RACA_{input_dict.pop('CS_RACA')}"] = 1
    input_dict[f"UF_{input_dict.pop('UF')}"] = 1
    input_dict[f"LOCAL_OCOR_{input_dict.pop('LOCAL_OCOR')}"] = 1
    input_dict[f"GRUPO_IDADE_{input_dict.pop('GRUPO_IDADE')}"] = 1
    input_dict[f"TIPO_RELACAO_{input_dict.pop('TIPO_RELACAO')}"] = 1

    # Transforma em DataFrame
    df = pd.DataFrame([input_dict])

    # Garante que todas as colunas esperadas estão presentes
    for col in colunas_modelo:
        if col not in df.columns:
            df[col] = 0

    # Reordena as colunas na ordem do treino
    df = df[colunas_modelo]

    # Faz a predição
    predicao = modelo.predict(df)

    return {"predicao": predicao[0]}  # REMOVIDO o int()