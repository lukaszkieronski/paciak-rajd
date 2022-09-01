import csv
from os.path import exists

fileName = './pytania.csv'

with open(fileName, newline='', encoding='utf-8') as file:
    reader = csv.reader(file, delimiter=';', quotechar='"')
    for row in reader:
        id = f'id: {row[0]}'
        tr = f'triggerOn: 1'
        tx = f'text: \'{row[1]}\''
        an = f'answers: [\'{row[2]}\', \'{row[3]}\', \'{row[4]}\']'
        im = f', img:\'img/{row[0]}.png\'' if exists(
            f'./public/img/{row[0]}.png') else ""
        print(
            f'{row[0]}: {{ {id}, {tr}, {tx}, {an}{im} }},'.replace('\n', ' '))
