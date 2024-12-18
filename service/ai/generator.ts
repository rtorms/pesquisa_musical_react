const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: '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' });


export async function pesquisar(pesquisa: String) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": "estou construindo um app sobre informações sobre bandas e músicas de heavy metal, preciso de ajuda\n"
        },
        {
          "role": "assistant",
          "content": "**Olá, é um prazer ajudar!**\n\nUm aplicativo sobre bandas e músicas de heavy metal soa como um projeto incrível! Existem muitos fãs de heavy metal ao redor do mundo que adorariam ter acesso a informações sobre suas bandas favoritas e descobrir novas músicas.\n\n**O que você precisa de ajuda?**\n\nPara começar, posso ajudar com:\n\n1. **Definição de funcionalidades**: Quais recursos você gostaria de incluir no aplicativo? Por exemplo:\n * Lista de bandas e biografias\n * Discografia e letras de músicas\n * Notícias e atualizações sobre o mundo do heavy metal\n * Recomendações de músicas e bandas similares\n * Integração com redes sociais para compartilhar informações\n2. **Design e interface**: Quais são as suas ideias para o design do aplicativo? Você gostaria de ter um layout moderno e minimalista ou algo mais complexo e detalhado?\n3. **Base de dados**: Como você planeja armazenar e gerenciar as informações sobre as bandas e músicas? Você precisará de uma base de dados robusta e escalável.\n4. **Desenvolvimento**: Qual é a tecnologia que você está utilizando para desenvolver o aplicativo? Você precisará de ajuda com programação ou integração de APIs?\n\n**Vamos começar a discutir!**\n\nPor favor, compartilhe mais sobre o seu projeto e o que você precisa de ajuda. Estou aqui para ajudar e oferecer sugestões para tornar o seu aplicativo um sucesso!"
        },
        {
          "role": "user",
          "content": "irei informar sobre algum dado da banda, nome de música ou da letra da música e preciso de informações sobre a banda, pode ser?\n "
        },
        {
          "role": "assistant",
          "content": "**Sim, é possível!**\n\nSe você fornecer informações sobre uma banda, nome de música ou letra da música, posso tentar encontrar informações adicionais sobre a banda. Isso pode incluir:\n\n* **Informações gerais sobre a banda**:\n + História da banda\n + Membros atuais e anteriores\n + Gênero musical\n + Discografia\n* **Informações sobre a música**:\n + Álbum de origem\n + Ano de lançamento\n + Composição e letra\n + Significado e inspiração por trás da música\n* **Outras informações**:\n + Prêmios e reconhecimentos\n + Turnês e apresentações ao vivo\n + Influências e estilo musical\n\n**Como posso ajudar?**\n\nPara começar, por favor forneça as informações que você tem sobre a banda, nome de música ou letra da música. Isso pode ser:\n\n* O nome da banda\n* O título da música\n* Uma linha ou um trecho da letra da música\n* O gênero musical da banda\n* Qualquer outra informação relevante que você tenha\n\n**Vamos começar a procurar!**\n\nCom as informações que você fornecer, posso começar a procurar por mais informações sobre a banda e a música. Estou aqui para ajudar e fornecer as respostas que você precisa!"
        },
        {
          "role": "user",
          "content": "alguns exemplos:"
        },
        {
          "role": "assistant",
          "content": "**Aqui estão alguns exemplos de como posso ajudar:**\n\n1. **Nome da banda**:\n * Você digita: \"Iron Maiden\"\n * Eu respondo: \"A banda Iron Maiden é uma banda de heavy metal britânica formada em 1975. Eles são conhecidos por suas músicas épicas e conceituais, como 'The Number of the Beast' e 'Hallowed Be Thy Name'.\"\n2. **Nome da música**:\n * Você digita: \"Stairway to Heaven\"\n * Eu respondo: \"A música 'Stairway to Heaven' é uma das mais famosas da banda Led Zeppelin, lançada em 1971. É considerada uma das melhores músicas de todos os tempos e é conhecida por sua melodia épica e letra poética.\"\n3. **Letra da música**:\n * Você digita: \"There's a lady who's sure all that glitters is gold\"\n * Eu respondo: \"A letra que você forneceu é da música 'Stairway to Heaven', da banda Led Zeppelin. Essa música é uma das mais famosas da banda e é considerada um clássico do rock.\"\n4. **Gênero musical**:\n * Você digita: \"Banda de heavy metal\"\n * Eu respondo: \"Existem muitas bandas de heavy metal incríveis! Algumas das mais famosas incluem Iron Maiden, Judas Priest, Black Sabbath e Metallica. Qual é o tipo de heavy metal que você gosta? Thrash metal, power metal, doom metal...?\"\n5. **Álbum**:\n * Você digita: \"Master of Puppets\"\n * Eu respondo: \"O álbum 'Master of Puppets' é o terceiro álbum de estúdio da banda Metallica, lançado em 1986. É considerado um dos melhores álbuns de heavy metal de todos os tempos e inclui músicas como 'Battery', 'Welcome Home (Sanitarium)' e ' Disposable Heroes'.\"\n\n**Agora é sua vez!** Por favor, forneça as informações que você tem sobre a banda, nome de música ou letra da música, e eu farei o meu melhor para encontrar mais informações!"
        },
        {
          "role": "user",
          "content": "quem escreveu roots blood roots?\n"
        },
        {
          "role": "assistant",
          "content": "**Uma música icônica!**\n\nA música \"Roots Bloody Roots\" é da banda Sepultura, uma banda de heavy metal brasileira formada em 1984. A música foi lançada em 1994 no álbum \"Chaos A.D.\" e é considerada uma das melhores músicas da banda.\n\n**Composição e letra**\n\nA música \"Roots Bloody Roots\" foi escrita por Max Cavalera, o vocalista e guitarrista da Sepultura na época. A letra da música é uma homenagem às raízes culturais e históricas do Brasil e explora temas de identidade, orgulho e resistência.\n\n**Max Cavalera**\n\nMax Cavalera é um músico brasileiro nascido em 1969 em Belo Horizonte, Minas Gerais. Ele é conhecido por seu trabalho com a Sepultura, bem como com outras bandas como Soulfly e Cavalera Conspiracy. Max é considerado um dos principais compositores e letristas da Sepultura e é responsável por muitas das músicas mais famosas da banda, incluindo \"Roots Bloody Roots\".\n\n**Fatos interessantes**\n\n* A música \"Roots Bloody Roots\" foi um grande sucesso comercial e ajudou a estabelecer a Sepultura como uma das principais bandas de heavy metal do mundo.\n* A música foi lançada em vários singles e álbuns ao vivo e é considerada uma das melhores músicas da discografia da Sepultura.\n* A letra da música \"Roots Bloody Roots\" é uma homenagem à cultura indígena brasileira e explora temas de identidade e orgulho.\n\n**Você é um fã da Sepultura ou de Max Cavalera?**"
        },
        {
          "role": "user",
          "content": "de onde é a banda slipknot?\n"
        },
        {
          "role": "assistant",
          "content": "**Uma banda icônica do metal moderno!**\n\nA banda Slipknot é originária de Des Moines, Iowa, EUA. Foi formada em 1995 por Corey Taylor, Mick Thomson, Shawn Crahan e outras personalidades do cenário musical de Iowa.\n\n**História da banda**\n\nA Slipknot começou a se formar em 1995, quando Corey Taylor e Mick Thomson começaram a tocar música juntos. A banda inicialmente se chamava \"Meld\" e tinha um som mais influenciado pelo grunge e pelo metal alternativo. No entanto, com a entrada de Shawn Crahan e outros membros, a banda mudou de nome para Slipknot e começou a desenvolver seu som único, que combinava elementos de metal, hardcore e nu metal.\n\n**Membros atuais**\n\nA Slipknot tem um lineup de nove membros, incluindo:\n\n* Corey Taylor (#8) - vocais\n* Mick Thomson (#7) - guitarra\n* Shawn Crahan (#6) - percussão, backing vocals\n* Craig Jones (#5) - samples, teclados\n* Sid Wilson (#0) - turntables\n* Alessandro Venturella - baixo\n* Jay Weinberg - bateria\n\n**Discografia**\n\nA Slipknot lançou nove álbuns de estúdio, incluindo:\n\n* Slipknot (1999)\n* Iowa (2001)\n* Vol. 3: (The Subliminal Verses) (2004)\n* All Hope Is Gone (2008)\n* .5: The Gray Chapter (2014)\n* We Are Not Your Kind (2019)\n* The End, So Far (2022)\n\n**Fatos interessantes**\n\n* A Slipknot é conhecida por seu uso de máscaras e uniformes, que são uma parte integral da identidade da banda.\n* A banda tem uma comunidade de fãs muito dedicada, conhecida como \"Maggots\".\n* A Slipknot é uma das bandas de metal mais bem-sucedidas da história, com mais de 30 milhões de discos vendidos em todo o mundo.\n\n**Você é um fã da Slipknot?**"
        },
        {
          "role": "user",
          "content": "qual a diferença entre matanza e matanza inc.?"
        },
        {
          "role": "assistant",
          "content": "**Uma pergunta interessante sobre a banda Soulfly!**\n\nMataança é uma música da banda Soulfly, lançada em 2006 no álbum \"Dark Ages\". A música é uma homenagem ao Deus do Candomblé, Exu, e é caracterizada por seu ritmo acelerado e agressivo.\n\n**Mataança Inc.**\n\nJá \"Mataança Inc.\" é uma versão regravada da música \"Mataança\", lançada em 2010 no álbum \"Omen\". A música foi regravada com uma nova linha de baixo e bateria, e apresenta uma sonoridade mais pesada e agressiva do que a versão original.\n\n**Diferenças entre as duas versões**\n\nAs principais diferenças entre \"Mataança\" e \"Mataança Inc.\" são:\n\n* **Linha de baixo**: A versão \"Inc.\" apresenta uma linha de baixo mais destacada e agressiva, enquanto a versão original tem uma linha de baixo mais simples e direta.\n* **Bateria**: A bateria na versão \"Inc.\" é mais rápida e agressiva, enquanto a versão original tem uma bateria mais lenta e pesada.\n* **Guitarra**: A guitarra na versão \"Inc.\" é mais destacada e apresenta mais solos e riffs complexos, enquanto a versão original tem uma guitarra mais simples e direta.\n* **Vocais**: Os vocais de Max Cavalera na versão \"Inc.\" são mais agressivos e guturais, enquanto a versão original tem vocais mais limpos e diretos.\n\n**Conclusão**\n\nEm resumo, \"Mataança Inc.\" é uma versão regravada da música \"Mataança\" com uma sonoridade mais pesada e agressiva. As diferenças entre as duas versões são notáveis, e a versão \"Inc.\" é uma ótima opção para os fãs que gostam de uma sonoridade mais agressiva e complexa.\n\n**Você é um fã da Soulfly?**"
        },
        {
          "role": "user",
          "content": "quem é slash?\n"
        },
        {
          "role": "assistant",
          "content": "**Um ícone do rock!**\n\nSlash é um guitarrista, compositor e produtor musical britânico-americano, nascido em 23 de julho de 1965 em Londres, Inglaterra. Seu nome real é Saul Hudson, e ele é mais conhecido por seu trabalho como guitarrista da banda Guns N' Roses.\n\n**Carreira**\n\nSlash começou a tocar guitarra aos 12 anos de idade e rapidamente se tornou um dos guitarristas mais respeitados do mundo. Ele fundou a banda Guns N' Roses em 1985 com Axl Rose, Izzy Stradlin, Duff McKagan e Steven Adler. A banda se tornou uma das mais bem-sucedidas do mundo, com álbuns como \"Appetite for Destruction\" (1987), \"G N' R Lies\" (1988) e \"Use Your Illusion I\" e \"II\" (1991).\n\n**Estilo e influências**\n\nO estilo de tocar de Slash é único e influenciado por uma variedade de fontes, incluindo blues, rock, punk e heavy metal. Ele é conhecido por seu uso de técnicas como o \"bend\" e o \"vibrato\", e por sua capacidade de criar riffs e solos memoráveis. Slash citou guitarristas como Eric Clapton, Jimmy Page e Jeff Beck como influências.\n\n**Discografia**\n\nSlash tem uma discografia extensa, incluindo:\n\n* Guns N' Roses:\n + \"Appetite for Destruction\" (1987)\n + \"G N' R Lies\" (1988)\n + \"Use Your Illusion I\" (1991)\n + \"Use Your Illusion II\" (1991)\n* Slash's Snakepit:\n + \"It's Five O'Clock Somewhere\" (1995)\n + \"Ain't Life Grand\" (2000)\n* Velvet Revolver:\n + \"Contraband\" (2004)\n + \"Libertad\" (2007)\n* Carreira solo:\n + \"Slash\" (2010)\n + \"Apocalyptic Love\" (2012)\n + \"World on Fire\" (2014)\n + \"Living the Dream\" (2018)\n\n**Prêmios e reconhecimento**\n\nSlash foi nomeado para vários prêmios ao longo de sua carreira, incluindo:\n\n* 3 prêmios Grammy\n* 2 prêmios MTV Video Music Awards\n* 1 prêmio American Music Award\n* Incluído no Rock and Roll Hall of Fame em 2012\n\n**Conclusão**\n\nSlash é um dos guitarristas mais respeitados e influentes do mundo, com uma carreira que abrange mais de 30 anos. Ele é conhecido por seu estilo único, sua capacidade de criar riffs e solos memoráveis, e seu trabalho como guitarrista da Guns N' Roses. Slash continua a ser uma figura importante no mundo do rock, e sua música continua a inspirar novas gerações de fãs.\n\n**Você é um fã de Slash?**"
        },
        {
          "role": "user",
          "content": pesquisa
        },
      ],
      "model": "llama-3.3-70b-versatile",
      "temperature": 1,
      "max_tokens": 1024,
      "top_p": 1
    });

    return chatCompletion.choices[0]?.message.content;
  } catch (error) {
    console.log(error)
    return 'Não foi encontrado registro para sua pesquisa, tente novamente com mais informações!'
  }
}