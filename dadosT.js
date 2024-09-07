
//dados dos geradores de texto
let dadosT = [
    {
        titulo: "GPT-4 (OpenAI)",
        descricao: "Um modelo de linguagem avançado capaz de gerar texto humano, utilizado para chatbots, redação de textos, criação de diálogos interativos e assistentes virtuais.",
        link: "https://openai.com/",
        tags: "linguagem natural chatbots assistente virtual"
    },

    {
        titulo: "BERT (Google)",
        descricao: "Modelo de linguagem usado para melhorar a compreensão do contexto em tarefas como pesquisa, tradução automática e classificação de textos.",
        link: "https://ai.googleblog.com/",
        tags: "pesquisa tradução classificação de texto"
    },

    {
        titulo: "T5 (Text-To-Text Transfer Transformer)",
        descricao: "Um modelo que transforma qualquer tarefa de linguagem em uma tarefa de geração de texto, utilizado em tradução de idiomas, resumo de textos e classificação.",
        link: "https://ai.googleblog.com/2019/10/exploring-transfer-learning-with-t5.html",
        tags: "tradução resumo classificação"
    },

    {
        titulo: "Replika",
        descricao: "Um chatbot que usa IA para criar conversas realistas e personalizadas, muito utilizado como um amigo virtual ou assistente emocional.",
        link: "https://replika.ai/",
        tags: "chatbot assistente emocional"
    },

    {
        titulo: "Jasper AI",
        descricao: "Focado em marketing, ele gera textos para blogs, descrições de produtos, postagens de mídia social e campanhas publicitárias.",
        link: "https://www.jasper.ai/",
        tags: "marketing geração de conteúdo publicidade"
    },

    {
        titulo: "Rytr",
        descricao: "Um assistente de escrita AI para criar conteúdos de marketing, roteiros de vídeo, e-mails e posts de blog.",
        link: "https://rytr.me/",
        tags: "escrita marketing roteiros"
    },

    {
        titulo: "Grammarly",
        descricao: "IA que auxilia na correção de gramática, ortografia e estilo de textos, muito usada por escritores e profissionais que buscam melhorar a qualidade da escrita.",
        link: "https://www.grammarly.com/",
        tags: "correção gramática ortografia"
    },

    {
        titulo: "Copy.ai",
        descricao: "IA para criação de conteúdos de marketing, descrições de produtos e redação publicitária.",
        link: "https://www.copy.ai/",
        tags: "marketing redação produtos"
    },

    {
        titulo: "OpenAI Codex",
        descricao: "IA especializada em gerar código a partir de descrições em linguagem natural, usada em programação assistida e automação de tarefas.",
        link: "https://openai.com/research/codex",
        tags: "programação automação"
    },

    {
        titulo: "Quillbot",
        descricao: "Um reescritor de texto baseado em IA, que ajuda a parafrasear, resumir e melhorar a clareza de textos.",
        link: "https://quillbot.com/",
        tags: "reescrita parafrasear resumo"
    },

    {
        // IA para análise de documentos jurídicos
        titulo: "Luminance",
        descricao: "Utiliza IA para automatizar o processo de revisão de documentos legais, contratos e due diligence, ajudando advogados a analisarem grandes volumes de dados com rapidez e precisão.",
        link: "https://www.luminance.com/",
        tags: "juridica, revisão de contratos, IA legal"
    },

    {
        // IA jurídica para análise de contratos
        titulo: "Kira Systems",
        descricao: "Startup que usa IA para análise de contratos, extração de dados e insights para otimizar o trabalho jurídico, especialmente em fusões e aquisições.",
        link: "https://www.kirasystems.com/",
        tags: "juridica, contratos, extração de dados"
    },

    {
        // IA para pesquisa legal
        titulo: "Casetext",
        descricao: "Plataforma que utiliza IA para pesquisa legal, permitindo que advogados encontrem precedentes e casos relevantes de forma mais rápida e precisa.",
        link: "https://casetext.com/",
        tags: "juridica, pesquisa legal, precedentes"
    },

    {
        // IA jurídica com foco em jurisprudência
        titulo: "ROSS Intelligence",
        descricao: "IA jurídica que usa processamento de linguagem natural para auxiliar advogados na pesquisa de jurisprudência, oferecendo respostas legais específicas.",
        link: "https://www.rossintelligence.com/",
        tags: "juridica, jurisprudência, IA legal"
    },

    {
        // IA para revisão de contratos
        titulo: "LawGeex",
        descricao: "Utiliza IA para revisar contratos e garantir a conformidade legal, reduzindo o tempo e os erros em processos de análise jurídica.",
        link: "https://www.lawgeex.com/",
        tags: "juridica, revisão de contratos, conformidade"
    },

    {
        // IA de educação personalizada
        titulo: "Squirrel AI",
        descricao: "Plataforma de educação personalizada baseada em IA, que ajusta o conteúdo educacional de acordo com o progresso e necessidades individuais dos alunos.",
        link: "https://www.squirrelai.com/",
        tags: "educacao, aprendizado personalizado, IA educação"
    },

    {
        // IA para materiais educacionais adaptativos
        titulo: "Carnegie Learning",
        descricao: "Utiliza IA para criar materiais educacionais adaptativos, especialmente em matemática, que se ajustam ao nível de entendimento dos alunos.",
        link: "https://www.carnegielearning.com/",
        tags: "educacao, aprendizado adaptativo, IA matemática"
    },

    {
        // IA para feedback e tutoriais educacionais
        titulo: "Cognii",
        descricao: "Plataforma que utiliza IA para fornecer feedback e tutoriais personalizados em ambientes de aprendizado online, com foco em ensino superior.",
        link: "https://www.cognii.com/",
        tags: "educacao, feedback personalizado, IA ensino superior"
    },

    {
        // IA para tutoriais de matemática e ciências
        titulo: "Querium",
        descricao: "Fornece tutoriais e exercícios de matemática e ciências com base em IA, ajustando o nível de dificuldade de acordo com o progresso dos alunos.",
        link: "https://www.querium.com/",
        tags: "educacao, tutoriais, IA matemática"
    },

    {
        // IA de aprendizado personalizado em tempo real
        titulo: "Knewton",
        descricao: "Utiliza IA para personalizar o aprendizado em tempo real, oferecendo materiais de estudo sob medida com base no desempenho e estilo de aprendizado dos estudantes.",
        link: "https://www.knewton.com/",
        tags: "educacao, aprendizado em tempo real, IA educação"
    },

    {
        titulo: "Zest AI",
        descricao: "Utiliza IA para ajudar instituições financeiras a fazerem avaliações de crédito mais justas, eliminando vieses e aumentando a precisão das análises de risco.",
        link: "https://www.zest.ai/",
        tags: "finanças crédito análise de risco"
    },
    
    // Finanças - Texto
    {
        titulo: "Kensho",
        descricao: "Startup que usa IA para analisar grandes volumes de dados financeiros, ajudando empresas e investidores a tomarem decisões mais informadas.",
        link: "https://www.kensho.com/",
        tags: "finanças análise de dados investidores"
    },

    // Finanças - Texto
    {
        titulo: "AlphaSense",
        descricao: "Plataforma de pesquisa financeira que utiliza IA para extrair insights de relatórios de mercado, notícias e documentos financeiros, auxiliando empresas em análises de mercado.",
        link: "https://www.alpha-sense.com/",
        tags: "finanças pesquisa mercado análise"
    },
    
    // Finanças - Texto
    {
        titulo: "Numerai",
        descricao: "Hedge fund que usa IA e crowdsourcing para fazer previsões sobre o mercado financeiro, com foco em aprendizado de máquina e dados anonimizados.",
        link: "https://numer.ai/",
        tags: "finanças hedge fund aprendizado de máquina"
    },

    // Finanças - Texto
    {
        titulo: "Upstart",
        descricao: "Plataforma de empréstimos pessoais que utiliza IA para avaliar os perfis de crédito com base em fatores além do histórico tradicional, como educação e histórico de trabalho.",
        link: "https://www.upstart.com/",
        tags: "finanças empréstimos crédito análise"
    },

    // Recursos Humanos - Texto
    {
        titulo: "Pymetrics",
        descricao: "Utiliza IA para ajudar as empresas a avaliar candidatos com base em jogos neurocientíficos que medem traços de personalidade e habilidades cognitivas.",
        link: "https://www.pymetrics.com/",
        tags: "recursos humanos avaliação candidatos"
    },

    // Recursos Humanos - Texto
    {
        titulo: "HireVue",
        descricao: "Plataforma que utiliza IA para analisar vídeos de entrevistas, avaliando candidatos com base em expressões faciais, tom de voz e linguagem corporal.",
        link: "https://www.hirevue.com/",
        tags: "recursos humanos entrevistas análise de vídeo"
    },

    // Recursos Humanos - Texto
    {
        titulo: "HiredScore",
        descricao: "Usa IA para ajudar equipes de RH a filtrar candidatos e melhorar o processo de recrutamento, reduzindo o tempo necessário para encontrar os melhores talentos.",
        link: "https://www.hiredscore.com/",
        tags: "recursos humanos recrutamento filtragem"
    },

    // Recursos Humanos - Texto
    {
        titulo: "PredictiveHire",
        descricao: "IA que analisa respostas de candidatos a perguntas escritas e prevê o desempenho no trabalho com base em padrões de linguagem.",
        link: "https://www.predictivehire.com/",
        tags: "recursos humanos análise de linguagem"
    },

    // Recursos Humanos - Texto
    {
        titulo: "Beamery",
        descricao: "Plataforma de talent intelligence que utiliza IA para otimizar o recrutamento e a gestão de talentos, criando pipelines de candidatos personalizados.",
        link: "https://beamery.com/",
        tags: "recursos humanos gestão de talentos recrutamento"
    }
]
