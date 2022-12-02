# Run this using "asyncio"

async def main():
    await micropip.install(["pandas", "numpy", "pathlib","scikit-learn"])

await loop.run_until_complete(main())

import pandas as pd
import numpy as np
import pickle
from pathlib import Path
import os
import pyodide
from pyodide.http import pyfetch
from pyodide import JsException
import asyncio
import sklearn
from js import console

#pickle works without being imported
#now we have to find a way to load model.mdl and scaler.mdl into the virual file system

async def download(url, filename=None):
    filename = filename or Path(url).name

    try:
        response = await pyfetch(url)
        if response.ok:
            with open(filename, mode="wb") as file:
                file.write(await response.bytes())
    except JsException as j:
        print(j)
        return None
    else:
        return filename

def preprocess(df):
    dataframe = df


    dataframe['Title'] = dataframe.Name.str.extract('([A-Za-z]+)\.')

    dataframe.Title.replace(['Don','Rev','Dr','Mme','Ms','Major','Lady','Sir','Mlle','Col','Capt','Countess','Jonkheer', 'Dona'], ['Mr','Mr','Mr','Mrs','Miss','Mr','Mrs','Mr','Miss','Mr','Mr','Mrs','Mr','Miss'], inplace=True)

    dataframe['FamilySize'] = dataframe.SibSp + dataframe.Parch + 1

    dataframe['Deck'] = dataframe.Cabin.str.extract('(A|B|C|D|E|F|G|H)')

    dataframe.Deck.replace(np.NaN, 'X', inplace=True)

    dataframe.Age.fillna(27.0, inplace=True)

    dataframe.Fare.fillna(14.4542, inplace=True)

    dataframe.drop(['Cabin'], axis=1, inplace=True)
    dataframe.Embarked.fillna('C', inplace=True)

    dataframe = pd.concat([pd.DataFrame(scaler.transform(dataframe[['Pclass', 'Age', 'SibSp', 'Parch', 'Fare', 'FamilySize']]), columns=['Pclass', 'Age', 'SibSp', 'Parch', 'Fare', 'FamilySize']), dataframe[['PassengerId','Name','Sex','Ticket','Embarked','Title','Deck']]], axis=1)

    dataframe.Sex.replace({'male': 0, 'female':1}, inplace=True)

    dataframe.Deck.replace(
        {
            'X': 0,
            'A': 1,
            'B': 2,
            'C': 3,
            'D': 4,
            'E': 5,
            'F': 6,
            'G': 7
        }, inplace=True
    )

    dataframe.Embarked.replace(
        {
            'C': 0,
            'S': 1,
            'Q': 2,

        }, inplace=True
    )

    dataframe.Title.replace(
        {
            'Mr': 0,
            'Mrs': 1,
            'Miss': 2,
            'Master': 3,

        }, inplace=True
    )

    dataframe.set_index('PassengerId', inplace=True)
    dataframe.drop(['Name', 'Ticket', 'Parch', 'SibSp', 'Deck', 'Pclass', 'Embarked'], axis=1, inplace=True)

    return dataframe

await download("https://raw.githubusercontent.com/darrendube/files/master/model.mdl")
await download("https://raw.githubusercontent.com/darrendube/files/master/scaler.mdl")

with open('model.mdl','rb') as f:
    model = pickle.load(f)

with open('scaler.mdl','rb') as f:
    scaler = pickle.load(f)

to_predict = to_predict = pd.DataFrame([[0, 3, "Dube, Mr. Darren", "male", 27.4, 1, 1, 2956, 25.43, "B56", "C"],], columns=['PassengerId', 'Pclass', 'Name', 'Sex', 'Age', 'SibSp','Parch', 'Ticket', 'Fare', 'Cabin', 'Embarked',])
to_predict = preprocess(to_predict)

to_predict2 = pd.DataFrame([[12,1,"Bonnell, Miss. Elizabeth",'female',58,0,0,'113783',26.55,'C103','S'],], columns=['PassengerId', 'Pclass', 'Name', 'Sex', 'Age', 'SibSp','Parch', 'Ticket', 'Fare', 'Cabin', 'Embarked',])
to_predict2 = preprocess(to_predict2)



print(to_predict2)


print(os.listdir('/home/pyodide'))



print(model.predict(to_predict))
print(model.predict(to_predict2))

def printdata():
    console.log('The data to print.')

console.log('This is a console log')
xyz="this is the xyz data"