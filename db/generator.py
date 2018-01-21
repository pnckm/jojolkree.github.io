#!/usr/bin/python3

import os

dir_list = os.listdir('Images')
# dir_list.remove('.directory')
imgs = sorted(dir_list, key=lambda x: float(x.split('.')[0] + x.split('.')[1]))
index = open('index.htm', 'w', encoding='utf-8')

for htm in os.listdir('html'):
    os.remove('html/' + htm)

index.write('<html>\n')
index.write('\t<head>\n')
index.write('\t\t<meta charset="utf-8">\n')
index.write('\t\t<meta name="apple-mobile-web-app-capable" content="yes" />\n')
index.write('\t</head>\n')
index.write('\t<body>\n')

tickets = []
with open('tickets.txt', 'r', encoding="utf-8") as f:
    names = f.readlines()

for i in imgs:
    ticket = int(i.split('.')[0])
    text = names[ticket - 1].replace('\n', '')
    with open('html/' + str(ticket) + '.htm', 'a', encoding='utf-8') as f:
        f.write('<img src="../Images/' + i + '" width="100%" />\n')
    if ticket not in tickets:
        index.write('\t\t<a href="html/' + str(ticket) + '.htm">' + text + '</a><br />\n')
        tickets.append(ticket)

index.write('\t</body>\n')
index.write('</html>\n')

index.close()