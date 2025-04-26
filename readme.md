🧪 Configuração do Ambiente para Projeto FastAPI com Machine Learning

Este guia descreve como configurar um ambiente virtual e instalar as bibliotecas necessárias para rodar um projeto FastAPI que utiliza um modelo de machine learning com LightGBM, Pandas, Scikit-learn e Joblib.
🔧 1. Criar o Ambiente Virtual

python3 -m venv .venv

Esse comando cria uma pasta .venv com um ambiente Python isolado para o projeto.
⚡ 2. Ativar o Ambiente Virtual

Linux/macOS:

source .venv/bin/activate

Windows (caso necessário):

.venv\Scripts\activate

🐍 3. Verificar se o ambiente está ativo

which python

A saída deve apontar para o caminho dentro de .venv.
📦 4. Instalar as Dependências

Instale o FastAPI com os extras padrões, além das bibliotecas utilizadas no projeto:

pip install "fastapi[standard]"
pip install pandas
pip install joblib
pip install lightgbm
pip install scikit-learn
pip install mysql-connector-python

🚀 5. Rodar o Projeto FastAPI

Com tudo instalado e o arquivo main.py pronto, rode o servidor com o seguinte comando:

fastapi dev main.py

Esse comando inicia a aplicação e exibe a URL para acessar no navegador, geralmente:

http://127.0.0.1:8000

A documentação interativa da API estará disponível em:

http://127.0.0.1:8000/docs
