from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

modelo = joblib.load("model_lgb.sav")
colunas_modelo = joblib.load("colunas_modelo.pkl")

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
    input_dict = dados.dict()
    input_dict[f"CS_RACA_{input_dict.pop('CS_RACA')}"] = 1
    input_dict[f"UF_{input_dict.pop('UF')}"] = 1
    input_dict[f"LOCAL_OCOR_{input_dict.pop('LOCAL_OCOR')}"] = 1
    input_dict[f"TIPO_RELACAO_{input_dict.pop('TIPO_RELACAO')}"] = 1
    input_dict[f"AUTOR_SEXO_{input_dict.pop('AUTOR_SEXO')}"] = 1
    input_dict[f"CS_ESCOL_N_{input_dict.pop('CS_ESCOL_N')}"] = 1

    df = pd.DataFrame([input_dict])

    for col in colunas_modelo:
        if col not in df.columns:
            df[col] = 0

    df = df[colunas_modelo]

    predicao = modelo.predict_proba(df)[0]

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
