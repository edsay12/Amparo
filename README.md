# Amparo - Treinamento do Modelo de Aprendizado de Máquina

### 1. **Objetivo**

> Desenvolver um modelo de aprendizado de máquina capaz de classificar corretamente o tipo de violência contra a mulher com base em dados disponibilizados (como idade, local da ocorrência, sexo do autor, tipo de relação, etc.).
> 

### **2. Base de Dados**

A base original possuía mais de 1 milhão de registros. Após tratamento, permanecemos com **564.432 entradas válidas**, contendo 13 colunas com informações como:

- Estado (UF), ano da ocorrência, datas, idade, raça, escolaridade, local da ocorrência, sexo do autor, reincidência, grupo de idade, tipo de relação e tipo de violência.

A variável-alvo principal do modelo é a coluna `TIPO_VIOLENCIA`, que contém os tipos: **física**, **psicológica**, **nenhuma** e **outros**.

### **3. Etapas de Processamento**

### **3.1. Limpeza de Dados**

- Tratamento de valores ausentes.
    - Colunas categóricas como "CS_RACA", "CS_ESCOL_N", "LOCAL_OCOR" e "GRUPO_IDADE" foram preenchidas com a moda.
    - Colunas numéricas como "AUTOR_SEXO" e "OUT_VEZES" foram preenchidas com a mediana.
- Conversão de colunas de data para datetime.
- Pegar apenas dados onde os casos de violência e feminina

### **3.2. Redução de Dimensionalidade**

- As colunas originais relacionadas a violência e relações foram agrupadas em variáveis mais representativas ("TIPO_VIOLENCIA" e "TIPO_RELACAO").

### **3.3. Codificação**

- `LabelEncoder` foi utilizado para a coluna ANO.
- `OneHotEncoder` foi aplicado nas colunas categóricas.

### **3.4. Separando Variáveis**

- X: variáveis independentes.
- y: variável dependente (TIPO_VIOLENCIA).

### **4. Problemas Encontrados**

### **4.1. Desbalanceamento de Classes**

A classe **"psicológica"** apresentava um número extremamente pequeno de registros em comparação à classe "física".

### **4.2. Baixa Precisão nas Classes Minoritárias**

A classe psicológica, mesmo após vários ajustes, frequentemente alcançava 0.00 de f1-score, recall e precision nos primeiros testes.

### **5. Soluções Tentadas**

### **5.1. Modelo Inicial - Random Forest**

O primeiro modelo utilizado foi o **Random Forest** com os seguintes hiperparâmetros:

- max_depth=10
- min_samples_split=5
- n_estimators=100
- random_state=42

Resultados iniciais com dados recém-tratados:

```jsx
            precision    recall  f1-score   support

     física       0.80      0.95      0.87    115303
     nenhuma      0.79      0.66      0.72     17859
      outros      0.64      0.50      0.56     21011
 psicológica      0.00      0.00      0.00     15157

    accuracy                           0.78    169330
   macro avg       0.56      0.53      0.54    169330
weighted avg       0.70      0.78      0.74    169330
```

Ao rodar o modelo nos dados recém-tratados, foi identificado um problema: o modelo apresentava ótimo desempenho na classe majoritária **"física"**, mas desempenho nenhum desempenho na classe **"psicológica"**. oque indica que há um  desbalanceamento severo e nos dados dessa classe.

Para tentar resolver, foi aplicada a técnica de balanceamento de dados usando **SMOTE**, com o objetivo de aumentar a representação dessa classe no conjunto de treino.

### **5.2. SMOTE**

- O SMOTE foi utilizado **apenas nos dados de treino**, com `sampling_strategy='minority'`, para balancear e aumentar os registros da classe psicológica.
- Isso aumentou o total de registros para mais de 600 mil.

### **5.3. Nova Rodada com Random Forest após SMOTE**

Após a aplicação do SMOTE, o modelo Random Forest foi novamente treinado com os mesmos hiperparâmetros. O resultado mostrou uma melhora significativa na classe psicológica, principalmente em termos de recall:

```jsx

              precision    recall  f1-score   support

      física       0.84      0.72      0.77    115303
     nenhuma       0.82      0.57      0.67     17859
      outros       0.74      0.10      0.18     21011
 psicológica       0.17      0.63      0.27     15157

    accuracy                           0.62    169330
   macro avg       0.64      0.50      0.47    169330
weighted avg       0.77      0.62      0.64    169330
```

Houve um crescimento na classe psicológica (com recall de 0.63), porém foi observado que: agora as classes "física" e "outros" perderam desempenho de forma mais acentuada, com recall e f1-score mais baixos do que nas rodadas anteriores.

### 5.4. Aplicação de SMOTE para Todas as Classes Minoritárias

Após observar que a aplicação de SMOTE apenas na classe **"psicológica"** melhorava seu recall, mas causava deterioração acentuada nas demais classes, foi realizada uma nova rodada aplicando o **SMOTE** não apenas para a classe psicológica, mas também para as demais classes minoritárias ("nenhuma" e "outros").

O objetivo dessa abordagem foi promover um balanceamento mais uniforme entre as classes do conjunto de treino, buscando melhorar o f1-score macro sem comprometer demais a acurácia global.

Os resultados obtidos com essa abordagem após o Random Forest mostraram:

```jsx

              precision    recall  f1-score   support

      física       0.90      0.62      0.74    115303
     nenhuma       0.61      0.83      0.70     17859
      outros       0.46      0.82      0.59     21011
 psicológica       0.20      0.36      0.26     15157

    accuracy                           0.65    169330
   macro avg       0.54      0.66      0.57    169330
weighted avg       0.75      0.65      0.67    169330

```

Essa rodada representou um ponto de equilíbrio mais satisfatório entre as classes: embora o recall da "psicológica" tenha sido um pouco menor que na rodada anterior, o desempenho das demais classes foi mais estável embora o recall da classe “física” tenha diminuído e a acurácia ainda ser muito baixa.

### 5.5 Implementação do Grid Search

Com o objetivo de melhorar o desempenho do modelo Random Forest, implementei o GridSearch, já que ajustes manuais nos parâmetros não estavam alcançando uma performance aceitável, principalmente na classe minoritária 'psicológica'. Desse modo, busquei automatizar esse processo, permitindo ao algoritmo encontrar a melhor opção para aumentar o desempenho do modelo.

para isso foi definido os seguintes parâmetros: 

```jsx
param_grid = {
    'n_estimators': [100, 200],
    'max_depth': [10, 20],
    'min_samples_split': [2, 5],
    'class_weight': ['balanced']
}
```

com isso o grid Retornou o seguinte conjunto de parâmetros ótimos: 

```jsx
{'class_weight': 'balanced', 'max_depth': 20, 'min_samples_split': 2, 'n_estimators': 200}
```

Com esses parâmetros, o modelo alcançou uma acurácia de aproximadamente 72 % durante a validação cruzada. Posteriormente, ao rodar o modelo final com esses hiperparâmetros, os resultados completos foram obtidos e analisados.

```jsx
              precision    recall  f1-score   support

      física       0.89      0.73      0.80    115303
     nenhuma       0.69      0.82      0.75     17859
      outros       0.50      0.82      0.62     21011
 psicológica       0.26      0.33      0.29     15157

    accuracy                           0.72    169330
   macro avg       0.59      0.67      0.62    169330
weighted avg       0.77      0.72      0.73    169330
```

Com esses parâmetros, o modelo apresentou uma acurácia melhor. No entanto, apesar dessa melhora quantitativa, não houve um aumento significativo na precisão das classes minoritárias, especialmente a classe 'psicológica'. Diante disso, foi construída uma nova matriz de confusão para investigar o motivo pelo qual o modelo ainda apresentava dificuldades em identificar corretamente o tipo de violência.

Observando a matriz, foi identificado que o modelo está confundindo muito a classe 'psicológica' com a classe 'física', o que é um grande problema. Para tentar resolver isso, a próxima abordagem foi a aplicação de pesos específicos para a classe. Após vários testes, o peso que se saiu melhor para a classe 'psicológica' foi 2.

```jsx
Class_weight={'psicológica': 2, 'física': 1, 'nenhuma': 1, 'outros': 1.5},
```

Porém, com a aplicação dos pesos de forma manual, o desempenho geral diminuiu, indicando que essa, de fato, não é a melhor abordagem;

```jsx
precision    recall  f1-score   support

      física       0.91      0.55      0.68    115303
     nenhuma       0.72      0.80      0.76     17859
      outros       0.47      0.84      0.60     21011
 psicológica       0.18      0.52      0.27     15157

    accuracy                           0.61    169330
   macro avg       0.57      0.68      0.58    169330
weighted avg       0.77      0.61      0.64    169330

```

Com isso, será feita a tentativa de utilização de outros modelos de aprendizagem para ver se temos alguma melhora nos resultados.

### 5.6 implementando o XGboster

O XGBoost é um modelo que funciona melhor para dados desbalanceados, por isso é o modelo ideal para o nosso tipo de dados. Utilizamos o XGBoost com os seguintes parâmetros:

```python
 objective='multi:softmax',   # ou 'multi:softprob' se quiser as probabilidades
 num_class=4,                 # quantidade de classes que você temos
 eval_metric='mlogloss',
 use_label_encoder=False,
 random_state=42
```

Ao aplicar o modelo, percebemos que tivemos uma grande melhora na acurácia e no recall de alguns modelos. Porém, a classe 'psicológica' ainda continua com um número muito baixo.

```python
precision    recall  f1-score   support

           0       0.88      0.79      0.83    115303
           1       0.70      0.82      0.76     17859
           2       0.52      0.78      0.63     21011
           3       0.30      0.27      0.28     15157

    accuracy                           0.75    169330
   macro avg       0.60      0.67      0.63    169330
weighted avg       0.77      0.75      0.75    169330
```

### 5.6 implementando a rede neural

A próxima tentativa foi a rede neural, que foi utilizada com os seguintes parâmetros:

```python
 hidden_layer_sizes=(100, 50),  # 2 camadas ocultas
    max_iter=300,
    random_state=42,
    early_stopping=True,
    verbose=True
```

Com isso foi obtido o seguinte resultado:

```python
 precision    recall  f1-score   support

           0       0.87      0.80      0.83    115303
           1       0.71      0.81      0.76     17859
           2       0.55      0.73      0.63     21011
           3       0.28      0.29      0.28     15157

    accuracy                           0.75    169330
   macro avg       0.60      0.66      0.63    169330
weighted avg       0.76      0.75      0.75    169330
```

Observando o modelo, vimos que a acurácia se manteve a mesma do XGBoost e o desempenho foi bem parecido, onde a classe 'psicológica' ainda continua com o desempenho bem abaixo do que é esperado.

### 5.7 Implementando o o LGBMclassifier

O próximo passo foi usar o modelo LGBMClassifier, que também é bom para dados desbalanceados. Foram utilizados inicialmente os seguintes parâmetros:

```python
 objective='multiclass',
    random_state=42,
    n_estimators=200,
    learning_rate=0.1,
    num_leaves = 63 ,
    scale_pos_weight=3,  # dizendo que a classe e mais importante
```

como resultado obtivemos o uma acurácia um pouco maior  e os valores de recall e f1-score um pouco melhores.

```python
 precision    recall  f1-score   support

      física       0.87      0.82      0.84    115303
     nenhuma       0.72      0.81      0.76     17859
      outros       0.55      0.76      0.64     21011
 psicológica       0.31      0.25      0.28     15157

    accuracy                           0.76    169330
   macro avg       0.61      0.66      0.63    169330
weighted avg       0.77      0.76      0.76    169330
```

Já que esse modelo se mostrou o mais promissor até o momento, implementamos o GridSearch para tentar encontrar os melhores resultados:

```python
param_grid = {
'n_estimators': [200, 300],  # número de árvores
'learning_rate': [0.01, 0.05, 0.1],  # taxa de aprendizado
'num_leaves': [31, 63],           # número de folhas (complexidade das árvores)
}

```

com isso, os melhores parâmetros encontrados foram: 

```python
 {'learning_rate': 0.1, 'n_estimators': 300, 'num_leaves': 63}
```

oque concidentemente já era os parâmetros utilizados anteriormente

### 5.8 Implementando o Shap

O SHAP é uma ferramenta que nos ajuda a identificar o quanto cada atributo influencia o modelo. Com isso, obtivemos os seguintes resultados:


Com os dados, foi identificado que um dos principais problemas da classe é que os dados que temos não têm uma representatividade muito grande e há muita falta de informação que ajude o modelo a identificar melhor o tipo de violência.

### 5.9 SMOTE-Tomek

Outra tentativa feita foi a utilização do SMOTE-Tomek, porém o desempenho geral foi completamente insatisfatório, tendo uma queda de precisão muito grande.

### 6. Melhor Resultado Encontrado

O melhor desempenho do projeto foi alcançado com o modelo **LightGBMClassifier**, após um ciclo de tratamento de dados, balanceamento e otimização cuidadosa. Este modelo obteve uma boa acurácia e, ao mesmo tempo, apresentou **o melhor equilíbrio entre as classes.**

Resultado Obtido:

```python
 precision    recall  f1-score   support

      física       0.87      0.82      0.84    115303
     nenhuma       0.72      0.81      0.76     17859
      outros       0.55      0.76      0.64     21011
 psicológica       0.31      0.25      0.28     15157

    accuracy                           0.76    169330
   macro avg       0.61      0.66      0.63    169330
weighted avg       0.77      0.76      0.76    169330
```

### **7. Limitações e Conclusões**

Apesar dos esforços com balanceamento, ajustes de hiperparâmetros e testes com diferentes algoritmos, **não conseguimos obter um bom desempenho para a classe "psicológica"**.

As principais razões para isso foram:

- **Desequilíbrio extremo de dados**, mesmo após SMOTE.
- **Pouca representatividade** das variáveis explicativas em relação à natureza da violência psicológica (características subjetivas e difíceis de quantificar).
- **Falta de variáveis qualitativas importantes**, como histórico clínico, contexto emocional, ou detalhamento textual do caso — ausentes na base tabular atual.

### **7. Considerações Finais**

Este projeto permitiu avanços importantes na **estruturação de dados**, aplicação de técnicas de **balanceamento**, **modelagem supervisionada** e **avaliação de desempenho**. Apesar das limitações, conseguimos:

- Obter um modelo com acurácia razoável para a maioria das classes.
- Melhorar parcialmente a performance da classe "psicológica".
- Entender os gargalos técnicos e metodológicos que precisam ser superados.