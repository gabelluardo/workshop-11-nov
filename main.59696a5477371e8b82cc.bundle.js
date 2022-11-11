(self.webpackChunkworkshop_11_nov=self.webpackChunkworkshop_11_nov||[]).push([[179],{2463:(n,e,t)=>{"use strict";t.r(e),t.d(e,{backgrounds:()=>o,default:()=>m,fragmentSteps:()=>s,fusumaProps:()=>p,slides:()=>r});var l=t(7401),a=t(9332);t(108),t(6066),t(4617),t(4780),t(7202);function i(){return i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l])}return n},i.apply(this,arguments)}const r=[n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Cosa è Python")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Si"),(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://media.giphy.com/media/OQ87ZWbglJ0SpCxY07/giphy.gif"})),(0,a.kt)("h1",null,"ma NO")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3730)}))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,'"Alto livello"'),(0,a.kt)("p",null,"La gestione della memoria dinamica non è affidata al ",(0,a.kt)("em",{parentName:"p"},"programmatore"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("p",null,"Mentre il C o in C++ la memoria allocata nello heap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"malloc()\ncalloc()\nrealloc()\n")),(0,a.kt)("p",null,"deve essere rilasciata esplicitamente per non causare memory leak"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"free()\n"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "stdio.h"\n#include "stdlib.h"\n\nint main(){\n    int dim = 10;\n    int *p = malloc(dim * sizeof(int));\n\n    for(int i=0; i<dim; i++){\n        p[i] = i;\n    }\n\n    for(int i=0; i<dim; i++){\n        printf("%d\\n", p[i]);\n    }\n\n    return 0;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gcc -o main main.c\n./main\n"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "stdio.h"\n#include "stdlib.h"\n\nint main(){\n    int dim = 10;\n    int *p = malloc(dim * sizeof(int));\n\n    for(int i=0; i<dim; i++){\n        p[i] = i;\n    }\n\n    for(int i=0; i<dim; i++){\n        printf("%d\\n", p[i]);\n    }\n\n    free(p); // evita memory leak, OK\n\n    return 0;\n}\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "stdio.h"\n#include "stdlib.h"\n\nint main(){\n    int dim = 10;\n    int *p = malloc(dim * sizeof(int));\n\n    for(int i=0; i<dim; i++){\n        p[i] = i;\n    }\n\n    for(int i=0; i<dim; i++){\n        printf("%d\\n", p[i]);\n    }\n\n    free(p); // evita memory leak, OK\n    free(p); // double free, AHIA!\n\n    return 0;\n}\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"dim = 10\nl = []\n\nfor i in range(dim):\n    l.append(i)\n\nfor i in l:\n    print(i)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python main.py\n")),(0,a.kt)("p",null,"oppure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python3 main.py\n"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    dim = 10\n    l = []\n\n    for i in range(dim):\n        l.append(i)\n\n    for i in l:\n        print(i)\n\nif __name__ == "__main__":\n    main()\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    dim = 10\n    l = []\n\n    for i in range(dim):\n        l.append(i)\n\n    print(l)\n\nif __name__ == "__main__":\n    main()\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    dim = 10\n    l = [i for i in range(dim)] # list comprehension\n\n\n    print(l)\n\nif __name__ == "__main__":\n    main()\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    print([i for i in range(10)])\n\nif __name__ == "__main__":\n    main()\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print([i for i in range(10)])\n"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,'"Alto livello"'),(0,a.kt)("p",null,"La gestione della memoria dinamica è affidata al ",(0,a.kt)("em",{parentName:"p"},"garbage collector")),(0,a.kt)("p",null,"..."),(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://media.giphy.com/media/3o7TKJlHZznKbrKAU0/giphy.gif"}))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Interpretato"),(0,a.kt)("p",null,"Nessuna fase di compilazione, l'interprete python analizza il codice scritto e lo esegue direttamente. È anche possibile usare le REPL di python eseguire codice senza scrivere su un file")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Scripting"),(0,a.kt)("p",null,"Quando non hai sbatta di fare le cose a mano")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("p",null,"e costringi il sistema operativo a farlo per te.")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\ndef main():\n    os.makedirs("compiti", exist_ok=True)\n\n    for i in range(20):\n        with open(f"compiti/{i}.txt", "w") as f:\n            f.write(f"ciao file {i}")\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"Voglio sapere quante ",(0,a.kt)("em",{parentName:"h2"},"c")," ha scritto Dante")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    cnt = 0\n\n    with open("dante.txt", "r") as f:\n        for line in f.readlines():\n            words = line.split(" ")\n            for w in words:\n                cnt += w.lower().count("c")\n\n    print(cnt)\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"Voglio sapere quante volte Renzo e Lucia sono nominati ne I Promessi Sposi")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    renzo = 0\n    lucia = 0\n\n    with open("promessi_sposi.txt", "r") as f:\n        for line in f.readlines():\n            words = line.split(" ")\n            for w in words:\n                renzo += w.lower().count("renzo")\n                lucia += w.lower().count("lucia")\n\n    print(f"Renzo: {renzo}, Lucia: {lucia}")\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,(0,a.kt)("em",{parentName:"h2"},"e")," la parola più usata?")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    total_words = dict()\n\n    with open("promessi_sposi.txt", "r") as f:\n        for line in f.readlines():\n            words = line.split(" ")\n            for w in words:\n                filtered = list(filter(lambda x: x.isalpha(), w.lower()))\n\n                if len(filtered) > 0:\n                    word = "".join(filtered)\n\n                if word in total_words:\n                    total_words[word] += 1\n                else:\n                    total_words.update({word: 1})\n\n    print(dict(sorted(total_words.items(), key=lambda item: item[1])))\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://media.giphy.com/media/COrCfusbivCxTj2qZB/giphy.gif"}))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Orientato agli oggetti"),(0,a.kt)("p",null,"Tutto è un oggetto, che possiede determinati ",(0,a.kt)("em",{parentName:"p"},"attributi")," e ",(0,a.kt)("em",{parentName:"p"},"metodi"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Attributo"),(0,a.kt)("p",null,"Qualità dell'oggetto")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Metodo"),(0,a.kt)("p",null,"Uso dell'oggetto")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Esempio:"),(0,a.kt)("h2",null,"Penna"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"attributi:\n    livello inchiostro\n    colore inchiostro\n    marca\n    tipo\n    tappo\nmetodi:\n    scrivi\n    picchietta\n    metti il tappo\n    togli il tappo\n"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Pen:\n    def __init__(self, ink, style, color="black", trademark="Mattel"):\n        self._ink = ink\n        self._color = color\n        self._style = style\n        self._trademark = trademark\n        self._top = True\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def write(self, text):\n    if self._color == "red":\n        head = "\\033[91m"\n    elif self._color == "blue":\n        head = "\\033[96m"\n    else:\n        head = "\\033[98m"\n\n    tail = "\\033[00m"\n\n    if not self._top and self._ink > len(text):\n        print(f"{head}{text}{tail}")\n\n        self._ink -= len(text)\n\ndef tap(self):\n    print("Tip tap tip tap")\n\ndef plug(self):\n    self._top = True\n\ndef unplug(self):\n    self._top = False\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def __str__(self):\n    return f"{self._color} {self.style} - {self.trademark}\\n\\tlivello inchiosto: {self.ink}"\n\n@property\ndef ink(self):\n    return self._ink\n\n@property\ndef style(self):\n    return self._style\n\n@property\ndef trademark(self):\n    return self._trademark\n\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Pen:\n    def __init__(self, ink, color, style, trademark="Mattel"):\n        self._ink = ink\n        self._color = color\n        self._style = style\n        self._trademark = trademark\n        self._top = True\n\n    def __str__(self):\n        return f"{self._color} {self.style} - {self.trademark}\\n\\tlivello inchiosto: {self.ink}"\n\n    @property\n    def ink(self):\n        return self._ink\n\n    @property\n    def style(self):\n        return self._style\n\n    @property\n    def trademark(self):\n        return self._trademark\n\n    def write(self, text):\n        if self._color == "red":\n            head = "\\033[91m"\n        elif self._color == "blue":\n            head = "\\033[96m"\n        else:\n            head = "\\033[98m"\n\n        tail = "\\033[00m"\n\n        if not self._top and self._ink > len(text):\n            print(f"{head}{text}{tail}")\n\n            self._ink -= len(text)\n\n    def tap(self):\n        print("Tip tap tip tap")\n\n    def plug(self):\n        self._top = True\n\n    def unplug(self):\n        self._top = False\n\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Pencil:\n    ...\n\nclass Pen:\n    ...\n\nclass Marker:\n    ...\n"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Writer:\n    ...\n\nclass Pencil(Writer):\n    def __init__(self):\n        super().__init__()\n        ...\n\nclass Pen(Writer):\n    def __init__(self):\n        super().__init__()\n        ...\n"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"OOP do it better")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Strutture dati"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"lista = list() or []\ntupla = tuple()\ndizionario = dict() or {chiave: valore}\ninsieme = set() or {}\n"))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"Natalia Romanzi vuole sapere chi è il suo BFF")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    names = [\n        "Stefano Ricevuto",\n        "Stefano Strano",\n        "Pietro Parcheggiatore",\n        "Tonio Rigido",\n        "Bruce Striscione",\n    ]\n    quality = [\n        ("bello", 6),\n        ("intelligente", 7),\n        ("giovane", 5),\n        ("ricco", 4),\n        ("muscoloso", 8),\n    ]\n    value = [8, 7, 7.5, 8, 9]\n\n    for i, name in enumerate(names):\n        print(f"{name},\\t{quality[i][0]},\\t{quality[i][1]*value[i]}")\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"Salvando tutto su un file csv (sì, tipo excel)")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import csv\n\ndef main():\n    names = [\n        "Stefano Ricevuto",\n        "Stefano Strano",\n        "Pietro Parcheggiatore",\n        "Tonio Rigido",\n        "Bruce Striscione",\n    ]\n    quality = [\n        ("bello", 6),\n        ("intelligente", 7),\n        ("giovane", 5),\n        ("ricco", 4),\n        ("muscoloso", 8),\n    ]\n    value = [8, 7, 7.5, 8, 9]\n\n    fields = ["Name", "Quality", "Friendship"]\n\n    with open("bff.csv", "w", newline="") as f:\n        writer = csv.DictWriter(f, fieldnames=fields, dialect="excel")\n        writer.writeheader()\n\n        for i, name in enumerate(names):\n            writer.writerow(\n                {\n                    fields[0]: name,\n                    fields[1]: quality[i][0],\n                    fields[2]: quality[i][1] * value[i],\n                }\n            )\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"E se volesse leggerlo un file csv?"),(0,a.kt)("p",null,"Non va bene per niente, troppa sbatta e spreco di risorse")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"Usiamo una classe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Friend:\n    def __init__(self, name, quality, value):\n        self._name = name\n        self._quality = quality\n        self._value = value\n\n    @property\n    def name(self):\n        return self._name\n\n    @property\n    def value(self):\n        return self._value * self.evaluate_quality(self._quality)\n\n    @property\n    def quality(self):\n        return self._quality\n\n    @staticmethod\n    def evaluate_quality(quality):\n        if quality == "bello":\n            return 6\n        elif quality == "intelligente":\n            return 7\n        elif quality == "giovane":\n            return 5\n        elif quality == "ricco":\n            return 4\n        elif quality == "muscoloso":\n            return 8\n        else:\n            return 0\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    friends = [\n        Friend("Stefano Ricevuto", "bello", 8),\n        Friend("Stefano Strano", "intelligente", 7),\n        Friend("Pietro Parcheggiatore", "giovane", 5),\n        Friend("Tonio Rigido", "ricco", 4),\n        Friend("Bruce Striscione", "muscoloso", 8),\n    ]\n\n    fields = ["Name", "Quality", "Friendship"]\n\n    with open("bff.csv", "w", newline="") as f:\n        writer = csv.DictWriter(f, fieldnames=fields, dialect="excel")\n        writer.writeheader()\n\n        for f in friends:\n            writer.writerow(\n                {\n                    fields[0]: f.name,\n                    fields[1]: f.quality,\n                    fields[2]: f.value,\n                }\n            )\n\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h2",null,"Adesso lo possiamo leggere facile facile")),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    friends = []\n    fields = ["Name", "Quality", "Friendship"]\n\n    with open("bff.csv", "r", newline="") as f:\n        # skip header line\n        f.readline()\n\n        reader = csv.DictReader(f, fieldnames=fields, dialect="excel")\n\n        for f in reader:\n            friends.append(\n                Friend(\n                    f["Name"],\n                    f["Quality"],\n                    float(f["Friendship"]) / Friend.evaluate_quality(f["Quality"]),\n                )\n            )\n\n    for f in friends:\n        print(f)\n'))),n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://media.giphy.com/media/aNbGyHcDYphNbhe4EE/giphy.gif"})))],o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],p=[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],u={};function m(n){let{components:e,...l}=n;return(0,a.kt)("wrapper",i({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Cosa è Python"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Si"),(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://media.giphy.com/media/OQ87ZWbglJ0SpCxY07/giphy.gif"})),(0,a.kt)("h1",null,"ma NO"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3730)})),(0,a.kt)("hr",null),(0,a.kt)("h1",null,'"Alto livello"'),(0,a.kt)("p",null,"La gestione della memoria dinamica non è affidata al ",(0,a.kt)("em",{parentName:"p"},"programmatore")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Mentre il C o in C++ la memoria allocata nello heap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"malloc()\ncalloc()\nrealloc()\n")),(0,a.kt)("p",null,"deve essere rilasciata esplicitamente per non causare memory leak"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"free()\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "stdio.h"\n#include "stdlib.h"\n\nint main(){\n    int dim = 10;\n    int *p = malloc(dim * sizeof(int));\n\n    for(int i=0; i<dim; i++){\n        p[i] = i;\n    }\n\n    for(int i=0; i<dim; i++){\n        printf("%d\\n", p[i]);\n    }\n\n    return 0;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gcc -o main main.c\n./main\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "stdio.h"\n#include "stdlib.h"\n\nint main(){\n    int dim = 10;\n    int *p = malloc(dim * sizeof(int));\n\n    for(int i=0; i<dim; i++){\n        p[i] = i;\n    }\n\n    for(int i=0; i<dim; i++){\n        printf("%d\\n", p[i]);\n    }\n\n    free(p); // evita memory leak, OK\n\n    return 0;\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "stdio.h"\n#include "stdlib.h"\n\nint main(){\n    int dim = 10;\n    int *p = malloc(dim * sizeof(int));\n\n    for(int i=0; i<dim; i++){\n        p[i] = i;\n    }\n\n    for(int i=0; i<dim; i++){\n        printf("%d\\n", p[i]);\n    }\n\n    free(p); // evita memory leak, OK\n    free(p); // double free, AHIA!\n\n    return 0;\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"dim = 10\nl = []\n\nfor i in range(dim):\n    l.append(i)\n\nfor i in l:\n    print(i)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python main.py\n")),(0,a.kt)("p",null,"oppure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python3 main.py\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    dim = 10\n    l = []\n\n    for i in range(dim):\n        l.append(i)\n\n    for i in l:\n        print(i)\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    dim = 10\n    l = []\n\n    for i in range(dim):\n        l.append(i)\n\n    print(l)\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    dim = 10\n    l = [i for i in range(dim)] # list comprehension\n\n\n    print(l)\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    print([i for i in range(10)])\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print([i for i in range(10)])\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,'"Alto livello"'),(0,a.kt)("p",null,"La gestione della memoria dinamica è affidata al ",(0,a.kt)("em",{parentName:"p"},"garbage collector")),(0,a.kt)("p",null,"..."),(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://media.giphy.com/media/3o7TKJlHZznKbrKAU0/giphy.gif"})),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Interpretato"),(0,a.kt)("p",null,"Nessuna fase di compilazione, l'interprete python analizza il codice scritto e lo esegue direttamente. È anche possibile usare le REPL di python eseguire codice senza scrivere su un file"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Scripting"),(0,a.kt)("p",null,"Quando non hai sbatta di fare le cose a mano"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"e costringi il sistema operativo a farlo per te."),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\ndef main():\n    os.makedirs("compiti", exist_ok=True)\n\n    for i in range(20):\n        with open(f"compiti/{i}.txt", "w") as f:\n            f.write(f"ciao file {i}")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Voglio sapere quante ",(0,a.kt)("em",{parentName:"h2"},"c")," ha scritto Dante"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    cnt = 0\n\n    with open("dante.txt", "r") as f:\n        for line in f.readlines():\n            words = line.split(" ")\n            for w in words:\n                cnt += w.lower().count("c")\n\n    print(cnt)\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Voglio sapere quante volte Renzo e Lucia sono nominati ne I Promessi Sposi"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    renzo = 0\n    lucia = 0\n\n    with open("promessi_sposi.txt", "r") as f:\n        for line in f.readlines():\n            words = line.split(" ")\n            for w in words:\n                renzo += w.lower().count("renzo")\n                lucia += w.lower().count("lucia")\n\n    print(f"Renzo: {renzo}, Lucia: {lucia}")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",null,(0,a.kt)("em",{parentName:"h2"},"e")," la parola più usata?"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    total_words = dict()\n\n    with open("promessi_sposi.txt", "r") as f:\n        for line in f.readlines():\n            words = line.split(" ")\n            for w in words:\n                filtered = list(filter(lambda x: x.isalpha(), w.lower()))\n\n                if len(filtered) > 0:\n                    word = "".join(filtered)\n\n                if word in total_words:\n                    total_words[word] += 1\n                else:\n                    total_words.update({word: 1})\n\n    print(dict(sorted(total_words.items(), key=lambda item: item[1])))\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://media.giphy.com/media/COrCfusbivCxTj2qZB/giphy.gif"})),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Orientato agli oggetti"),(0,a.kt)("p",null,"Tutto è un oggetto, che possiede determinati ",(0,a.kt)("em",{parentName:"p"},"attributi")," e ",(0,a.kt)("em",{parentName:"p"},"metodi")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Attributo"),(0,a.kt)("p",null,"Qualità dell'oggetto"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Metodo"),(0,a.kt)("p",null,"Uso dell'oggetto"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Esempio:"),(0,a.kt)("h2",null,"Penna"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"attributi:\n    livello inchiostro\n    colore inchiostro\n    marca\n    tipo\n    tappo\nmetodi:\n    scrivi\n    picchietta\n    metti il tappo\n    togli il tappo\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Pen:\n    def __init__(self, ink, style, color="black", trademark="Mattel"):\n        self._ink = ink\n        self._color = color\n        self._style = style\n        self._trademark = trademark\n        self._top = True\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def write(self, text):\n    if self._color == "red":\n        head = "\\033[91m"\n    elif self._color == "blue":\n        head = "\\033[96m"\n    else:\n        head = "\\033[98m"\n\n    tail = "\\033[00m"\n\n    if not self._top and self._ink > len(text):\n        print(f"{head}{text}{tail}")\n\n        self._ink -= len(text)\n\ndef tap(self):\n    print("Tip tap tip tap")\n\ndef plug(self):\n    self._top = True\n\ndef unplug(self):\n    self._top = False\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def __str__(self):\n    return f"{self._color} {self.style} - {self.trademark}\\n\\tlivello inchiosto: {self.ink}"\n\n@property\ndef ink(self):\n    return self._ink\n\n@property\ndef style(self):\n    return self._style\n\n@property\ndef trademark(self):\n    return self._trademark\n\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Pen:\n    def __init__(self, ink, color, style, trademark="Mattel"):\n        self._ink = ink\n        self._color = color\n        self._style = style\n        self._trademark = trademark\n        self._top = True\n\n    def __str__(self):\n        return f"{self._color} {self.style} - {self.trademark}\\n\\tlivello inchiosto: {self.ink}"\n\n    @property\n    def ink(self):\n        return self._ink\n\n    @property\n    def style(self):\n        return self._style\n\n    @property\n    def trademark(self):\n        return self._trademark\n\n    def write(self, text):\n        if self._color == "red":\n            head = "\\033[91m"\n        elif self._color == "blue":\n            head = "\\033[96m"\n        else:\n            head = "\\033[98m"\n\n        tail = "\\033[00m"\n\n        if not self._top and self._ink > len(text):\n            print(f"{head}{text}{tail}")\n\n            self._ink -= len(text)\n\n    def tap(self):\n        print("Tip tap tip tap")\n\n    def plug(self):\n        self._top = True\n\n    def unplug(self):\n        self._top = False\n\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Pencil:\n    ...\n\nclass Pen:\n    ...\n\nclass Marker:\n    ...\n")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Writer:\n    ...\n\nclass Pencil(Writer):\n    def __init__(self):\n        super().__init__()\n        ...\n\nclass Pen(Writer):\n    def __init__(self):\n        super().__init__()\n        ...\n")),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"OOP do it better"),(0,a.kt)("hr",null),(0,a.kt)("h1",null,"Strutture dati"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"lista = list() or []\ntupla = tuple()\ndizionario = dict() or {chiave: valore}\ninsieme = set() or {}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Natalia Romanzi vuole sapere chi è il suo BFF"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    names = [\n        "Stefano Ricevuto",\n        "Stefano Strano",\n        "Pietro Parcheggiatore",\n        "Tonio Rigido",\n        "Bruce Striscione",\n    ]\n    quality = [\n        ("bello", 6),\n        ("intelligente", 7),\n        ("giovane", 5),\n        ("ricco", 4),\n        ("muscoloso", 8),\n    ]\n    value = [8, 7, 7.5, 8, 9]\n\n    for i, name in enumerate(names):\n        print(f"{name},\\t{quality[i][0]},\\t{quality[i][1]*value[i]}")\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Salvando tutto su un file csv (sì, tipo excel)"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import csv\n\ndef main():\n    names = [\n        "Stefano Ricevuto",\n        "Stefano Strano",\n        "Pietro Parcheggiatore",\n        "Tonio Rigido",\n        "Bruce Striscione",\n    ]\n    quality = [\n        ("bello", 6),\n        ("intelligente", 7),\n        ("giovane", 5),\n        ("ricco", 4),\n        ("muscoloso", 8),\n    ]\n    value = [8, 7, 7.5, 8, 9]\n\n    fields = ["Name", "Quality", "Friendship"]\n\n    with open("bff.csv", "w", newline="") as f:\n        writer = csv.DictWriter(f, fieldnames=fields, dialect="excel")\n        writer.writeheader()\n\n        for i, name in enumerate(names):\n            writer.writerow(\n                {\n                    fields[0]: name,\n                    fields[1]: quality[i][0],\n                    fields[2]: quality[i][1] * value[i],\n                }\n            )\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"E se volesse leggerlo un file csv?"),(0,a.kt)("p",null,"Non va bene per niente, troppa sbatta e spreco di risorse"),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Usiamo una classe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Friend:\n    def __init__(self, name, quality, value):\n        self._name = name\n        self._quality = quality\n        self._value = value\n\n    @property\n    def name(self):\n        return self._name\n\n    @property\n    def value(self):\n        return self._value * self.evaluate_quality(self._quality)\n\n    @property\n    def quality(self):\n        return self._quality\n\n    @staticmethod\n    def evaluate_quality(quality):\n        if quality == "bello":\n            return 6\n        elif quality == "intelligente":\n            return 7\n        elif quality == "giovane":\n            return 5\n        elif quality == "ricco":\n            return 4\n        elif quality == "muscoloso":\n            return 8\n        else:\n            return 0\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    friends = [\n        Friend("Stefano Ricevuto", "bello", 8),\n        Friend("Stefano Strano", "intelligente", 7),\n        Friend("Pietro Parcheggiatore", "giovane", 5),\n        Friend("Tonio Rigido", "ricco", 4),\n        Friend("Bruce Striscione", "muscoloso", 8),\n    ]\n\n    fields = ["Name", "Quality", "Friendship"]\n\n    with open("bff.csv", "w", newline="") as f:\n        writer = csv.DictWriter(f, fieldnames=fields, dialect="excel")\n        writer.writeheader()\n\n        for f in friends:\n            writer.writerow(\n                {\n                    fields[0]: f.name,\n                    fields[1]: f.quality,\n                    fields[2]: f.value,\n                }\n            )\n\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",null,"Adesso lo possiamo leggere facile facile"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    friends = []\n    fields = ["Name", "Quality", "Friendship"]\n\n    with open("bff.csv", "r", newline="") as f:\n        # skip header line\n        f.readline()\n\n        reader = csv.DictReader(f, fieldnames=fields, dialect="excel")\n\n        for f in reader:\n            friends.append(\n                Friend(\n                    f["Name"],\n                    f["Quality"],\n                    float(f["Friendship"]) / Friend.evaluate_quality(f["Quality"]),\n                )\n            )\n\n    for f in friends:\n        print(f)\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://media.giphy.com/media/aNbGyHcDYphNbhe4EE/giphy.gif"})))}m.isMDXComponent=!0},7504:(n,e,t)=>{"use strict";t.r(e),t.d(e,{backgrounds:()=>o,default:()=>m,fragmentSteps:()=>s,fusumaProps:()=>p,slides:()=>r});var l=t(7401),a=t(9332);t(108);function i(){return i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l])}return n},i.apply(this,arguments)}const r=[n=>(0,a.kt)(l.Fragment,null,(0,a.kt)("h1",null,"Fin"),(0,a.kt)("div",{className:"space"}),(0,a.kt)("p",null,"Link slide: ",(0,a.kt)("a",{parentName:"p",href:"https://gabelluardo.github.io/"},"https://gabelluardo.github.io/")),(0,a.kt)("div",{className:"space"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},(0,a.kt)("img",{src:t(385)}))))],o=[0],s=[0],p=[{}],u={};function m(n){let{components:e,...l}=n;return(0,a.kt)("wrapper",i({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Fin"),(0,a.kt)("p",null,"Link slide: ",(0,a.kt)("a",{parentName:"p",href:"https://gabelluardo.github.io/"},"https://gabelluardo.github.io/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},(0,a.kt)("img",{src:t(385)}))))}m.isMDXComponent=!0},5516:(n,e,t)=>{"use strict";t.r(e)},3447:(n,e,t)=>{var l={"./0-intro.md":2463,"./1-end.md":7504};function a(n){var e=i(n);return t(e)}function i(n){if(!t.o(l,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return l[n]}a.keys=function(){return Object.keys(l)},a.resolve=i,n.exports=a,a.id=3447},385:(n,e,t)=>{"use strict";n.exports=t.p+"e5741d71b39c0e10f2c5.webp"},3730:(n,e,t)=>{"use strict";n.exports=t.p+"10a96dedca4a83968757.webp"}},n=>{var e=e=>n(n.s=e);n.O(0,[736],(()=>(e(7751),e(160),e(9969))));n.O()}]);