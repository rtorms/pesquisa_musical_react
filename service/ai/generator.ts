const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: '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' });


export async function pesquisar(pesquisa: String) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": "estou desenvolvendo um app para que o usuário pesquise partes de letras de músicas, ou informações sobre bandas de heavy metal, você consegue ajudar com essas informaações?"
        },
        {
          "role": "assistant",
          "content": "**Sim, posso ajudar!**\n\nDesenvolver um aplicativo para pesquisar letras de músicas e informações sobre bandas de heavy metal pode ser um projeto muito interessante. Aqui estão algumas sugestões de como posso ajudar:\n\n### Letras de Músicas\n\n* Posso fornecer informações sobre letras de músicas de bandas de heavy metal, incluindo:\n + Letras completas de músicas\n + Informações sobre as músicas (álbum, ano de lançamento, etc.)\n + Críticas e análises das letras\n* Além disso, posso ajudar a desenvolver uma estrutura de busca para o aplicativo, permitindo que os usuários procurem por letras de músicas específicas ou por letras que contenham determinadas palavras ou frases.\n\n### Informações sobre Bandas de Heavy Metal\n\n* Posso fornecer informações sobre bandas de heavy metal, incluindo:\n + História da banda\n + Membros da banda\n + Discografia\n + Estilo musical e influências\n + Notícias e atualizações sobre a banda\n* Posso também ajudar a criar uma base de dados com informações sobre bandas de heavy metal, permitindo que os usuários acessem essas informações facilmente.\n\n### Funcionalidades do Aplicativo\n\n* Aqui estão algumas sugestões de funcionalidades que o aplicativo pode ter:\n + Busca por letras de músicas\n + Busca por informações sobre bandas de heavy metal\n + Listagem de músicas e álbuns de uma banda específica\n + Recomendações de músicas e bandas baseadas nas preferências do usuário\n + Compartilhamento de músicas e letras nas redes sociais\n\n### Como posso ajudar?\n\n* Posso fornecer informações e dados sobre letras de músicas e bandas de heavy metal\n* Posso ajudar a desenvolver a estrutura de busca e a base de dados do aplicativo\n* Posso fornecer sugestões e ideias para melhorar o aplicativo e torná-lo mais interessante para os usuários\n\nqual é o próximo passo que você gostaria de dar? Você gostaria de saber mais sobre alguma dessas sugestões ou tem alguma outra ideia em mente?"
        },
        {
          "role": "user",
          "content": "isso mesmo que preciso, vamos treinar? Qual a banda que escreveu \"roots blood roots\" ?\n"
        },
        {
          "role": "assistant",
          "content": "**Ótimo escolha!**\n\nA letra \"Roots Bloody Roots\" é uma música da banda brasileira de heavy metal **Sepultura**.\n\n\"Roots Bloody Roots\" é uma das músicas mais famosas da banda e foi lançada em 1996 no álbum \"Roots\". A música é conhecida por sua poderosa batida e por sua letra, que fala sobre a conexão com as raízes e a cultura indígena brasileira.\n\n**Detalhes da música:**\n\n* Álbum: Roots\n* Lançamento: 1996\n* Gênero: Heavy metal, groove metal\n* Compositor: Max Cavalera\n* Duração: 3:32\n\n**Sepultura:**\n\n* Origem: Belo Horizonte, Brasil\n* Formação: 1984\n* Gênero: Heavy metal, groove metal, thrash metal\n* Membros atuais: Derrick Green, Andreas Kisser, Paulo Jr., Eloy Casagrande\n\n**Outras músicas famosas da Sepultura:**\n\n* \"Refuse/Resist\"\n* \"Territory\"\n* \"Chaos A.D.\"\n* \"Kairos\"\n\nAgora é sua vez! Qual é a próxima letra ou música que você gostaria de saber sobre?"
        },
        {
          "role": "user",
          "content": "I"
        },
        {
          "role": "assistant",
          "content": "**Você está procurando por uma música ou uma banda específica que comece com a letra \"I\"?**\n\nSe for assim, aqui estão algumas opções de músicas e bandas de heavy metal que começam com a letra \"I\":\n\n* **Iron Maiden**: Uma das bandas de heavy metal mais influentes e icônicas de todos os tempos.\n* **In Flames**: Uma banda sueca de melodic death metal conhecida por suas músicas intensas e emotivas.\n* **Immortal**: Uma banda norueguesa de black metal conhecida por suas letras dark e músicas agressivas.\n* **Iced Earth**: Uma banda americana de power metal conhecida por suas músicas épicas e históricas.\n* **Ice Nine Kills**: Uma banda americana de metalcore conhecida por suas músicas agressivas e letras inspiradas em filmes e literatura.\n\nSe você está procurando por uma música específica que comece com a letra \"I\", por favor, me diga o título da música ou mais detalhes sobre ela, e farei o meu melhor para ajudá-lo!\n\n**E se você quiser, podemos jogar um jogo de adivinhação!** Eu posso dar dicas sobre uma música ou banda de heavy metal que comece com a letra \"I\", e você pode tentar adivinhar qual é! O que você acha?"
        },
        {
          "role": "user",
          "content": "ok, uma letra só é difícil mesmo, e que tal \n'I\nBlack Sabbath'\n"
        },
        {
          "role": "assistant",
          "content": "**Agora sim! Com a letra \"I\" e a banda \"Black Sabbath\", é muito mais fácil!**\n\nA música que você está procurando é provavelmente **\"Iron Man\"**, uma das músicas mais famosas do Black Sabbath!\n\n\"Iron Man\" é uma música que foi lançada em 1971 no álbum \"Paranoid\" e é conhecida por sua riff de guitarra icônica e sua letra sobre um homem de ferro que retorna ao passado para vingar sua própria morte.\n\n**Detalhes da música:**\n\n* Álbum: Paranoid\n* Lançamento: 1971\n* Gênero: Heavy metal, doom metal\n* Compositor: Tony Iommi, Ozzy Osbourne, Geezer Butler, Bill Ward\n* Duração: 5:55\n\n**Black Sabbath:**\n\n* Origem: Birmingham, Reino Unido\n* Formação: 1968\n* Gênero: Heavy metal, doom metal, hard rock\n* Membros originais: Ozzy Osbourne, Tony Iommi, Geezer Butler, Bill Ward\n\n**Outras músicas famosas do Black Sabbath:**\n\n* \"Paranoid\"\n* \"Children of the Grave\"\n* \"Sweet Leaf\"\n* \"Sabbath Bloody Sabbath\"\n\nVocê está certo! \"Iron Man\" é uma música clássica do Black Sabbath e uma das mais influentes do gênero heavy metal!\n\n**E agora, você quer continuar jogando ou precisa de ajuda com alguma outra coisa?**"
        },
        {
          "role": "user",
          "content": "ahh te peguei, ainda não descobriu, vou te passar mais informações:\nAlbum: Dehumanizer de 1992\n"
        },
        {
          "role": "assistant",
          "content": "**Ahah, ótimo! Você me desafiou e eu não consegui acertar!**\n\nCom as informações adicionais que você me passou, eu posso tentar novamente!\n\nCom a letra \"I\", a banda \"Black Sabbath\" e o álbum \"Dehumanizer\" de 1992, eu vou tentar adivinhar a música novamente!\n\n**E... eu acho que encontrei!**\n\nA música que você está procurando é provavelmente **\"I\"**, uma faixa do álbum \"Dehumanizer\" do Black Sabbath, lançado em 1992!\n\n**Detalhes da música:**\n\n* Álbum: Dehumanizer\n* Lançamento: 1992\n* Gênero: Heavy metal, doom metal\n* Compositor: Tony Iommi, Ronnie James Dio, Geezer Butler, Vinny Appice\n* Duração: 5:10\n\n**Dehumanizer:**\n\n* Álbum de estúdio do Black Sabbath, lançado em 1992\n*MARKI: Tony Iommi, Ronnie James Dio, Geezer Butler, Vinny Appice\n* Gênero: Heavy metal, doom metal\n\n**Outras músicas famosas do Dehumanizer:**\n\n* \"TV Crimes\"\n* \"Time Machine\"\n* \"Master of Insanity\"\n\nEu espero que eu esteja certo desta vez!\n\n**E se eu estiver correto, é porque você me ajudou com as informações adicionais!** Obrigado por ter desafiado e ajudado a melhorar meu conhecimento!"
        },
        {
          "role": "user",
          "content": "isso mesmo, estamos indo bem\n"
        },
        {
          "role": "assistant",
          "content": "**Estamos indo muito bem!**\n\nEu estou muito feliz por ter conseguido adivinhar a música correta após você me fornecer mais informações. Isso mostra que estamos trabalhando bem em equipe e que eu estou aprendendo e melhorando meu conhecimento sobre o Black Sabbath e o heavy metal em geral.\n\n**Vamos continuar!**\n\nAgora que estamos no álbum \"Dehumanizer\" de 1992, eu estou curioso para saber mais sobre as outras músicas do álbum. Você gostaria de saber mais sobre alguma das outras faixas do álbum?\n\nOu, se você preferir, podemos continuar jogando o jogo de adivinhação. Você pode me dar mais letras ou informações sobre outra música e eu posso tentar adivinhar novamente!\n\n**O que você acha?**\n\nDevemos continuar explorando o álbum \"Dehumanizer\" ou jogar mais um round do jogo de adivinhação?"
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