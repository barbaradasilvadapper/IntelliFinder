//dados dos geradores de imagem
let dadosI = [
    {
        titulo: "DALL·E (OpenAI)",
        descricao: "Gera imagens a partir de descrições em linguagem natural, utilizado para criar arte digital, ilustrações e conceitos visuais.",
        link: "https://openai.com/dall-e",
        tags: "arte digital ilustrações conceitos"
    },

    {
        titulo: "MidJourney",
        descricao: "IA que cria imagens artísticas e conceituais a partir de descrições textuais, muito usada em design e arte digital.",
        link: "https://www.midjourney.com/",
        tags: "arte design visual"
    },

    {
        titulo: "Stable Diffusion",
        descricao: "Um gerador de imagens de código aberto, utilizado para criar arte digital, conceitos visuais e ilustrações, inclusive em projetos comerciais.",
        link: "https://stability.ai/stable-diffusion",
        tags: "arte digital ilustrações"
    },

    {
        titulo: "DeepArt",
        descricao: "IA que aplica estilos artísticos em imagens, transformando fotos em obras de arte no estilo de artistas famosos.",
        link: "https://deepart.io/",
        tags: "arte estilos artísticos"
    },

    {
        titulo: "Runway ML",
        descricao: "Ferramenta de IA para criadores que permite gerar imagens, vídeos e gráficos a partir de inputs textuais ou visuais, usada na edição de vídeos e efeitos visuais.",
        link: "https://runwayml.com/",
        tags: "edição vídeo gráficos"
    },

    {
        titulo: "Artbreeder",
        descricao: "IA colaborativa para criar novos rostos, paisagens e ilustrações combinando e modificando imagens existentes.",
        link: "https://www.artbreeder.com/",
        tags: "ilustrações paisagens rostos"
    },

    {
        titulo: "DeepDream (Google)",
        descricao: "Algoritmo que gera imagens surrealistas a partir de padrões identificados em uma imagem, criando arte abstrata.",
        link: "https://deepdreamgenerator.com/",
        tags: "arte abstrata surrealismo"
    },

    {
        titulo: "Ganbreeder",
        descricao: "Uma ferramenta de IA que usa GANs (Redes Generativas Adversariais) para criar e combinar imagens aleatórias em arte inovadora.",
        link: "https://ganbreeder.app/",
        tags: "arte GANs imagens"
    },

    {
        titulo: "NVIDIA GauGAN",
        descricao: "Um gerador de paisagens realistas a partir de rascunhos simples, usado em design gráfico e animação.",
        link: "https://www.nvidia.com/en-us/research/ai-playground/",
        tags: "paisagens design gráfico animação"
    },

    {
        titulo: "DeepArt.io",
        descricao: "Um serviço que usa IA para transformar fotos em imagens estilizadas no estilo de grandes mestres da pintura, útil para artistas e designers.",
        link: "https://deepart.io/",
        tags: "pintura estilo artístico"

    },

    {
        // IA de análise médica de imagens
        titulo: "Zebra Medical Vision",
        descricao: "Utiliza IA para analisar exames médicos, como raios-X, tomografias e ressonâncias magnéticas, ajudando na detecção precoce de doenças como câncer e doenças cardíacas.",
        link: "https://www.zebra-med.com/",
        tags: "saude, exames médicos, IA em radiologia"
    },

    {
        // IA para diagnóstico patológico
        titulo: "PathAI",
        descricao: "Plataforma de IA que ajuda patologistas a diagnosticar doenças com mais precisão, utilizando aprendizado de máquina para identificar padrões em amostras de tecidos.",
        link: "https://www.pathai.com/",
        tags: "saude, diagnóstico, IA patologia"
    },

    {
        // IA para diagnósticos portáteis
        titulo: "Butterfly Network",
        descricao: "Desenvolveu um ultrassom portátil baseado em IA, permitindo diagnósticos médicos mais acessíveis e instantâneos.",
        link: "https://www.butterflynetwork.com/",
        tags: "saude, ultrassom portátil, diagnósticos"
    },

    {
        // IA focada em oncologia
        titulo: "Tempus",
        descricao: "Startup de IA focada em oncologia, que analisa grandes volumes de dados clínicos e genômicos para ajudar médicos a personalizar tratamentos de câncer.",
        link: "https://www.tempus.com/",
        tags: "saude, oncologia, tratamento personalizado"
    },

    {
        // IA para análise de imagens médicas
        titulo: "Aidoc",
        descricao: "Usa IA para analisar imagens médicas e detectar condições críticas, como AVC e embolias, ajudando os médicos a priorizarem o tratamento emergencial.",
        link: "https://www.aidoc.com/",
        tags: "saude, imagens médicas, IA emergencial"
    },

    // Varejo - Imagem
    {
        titulo: "Vue.ai",
        descricao: "Utiliza IA para criar experiências personalizadas no e-commerce, como recomendações de produtos, curadoria de estilo e automação de catálogos visuais.",
        link: "https://vue.ai/",
        tags: "varejo e-commerce personalização"
    },

    // Varejo - Imagem
    {
        titulo: "Syte",
        descricao: "Plataforma que usa IA de reconhecimento de imagem para permitir que os consumidores façam compras a partir de imagens, transformando fotos em links diretos para produtos.",
        link: "https://www.syte.ai/",
        tags: "varejo imagem compras online"
    },

    // Varejo - Imagem
    {
        titulo: "Trax",
        descricao: "Utiliza IA para monitorar estoques e organizar prateleiras de lojas físicas, analisando imagens capturadas em tempo real para melhorar a eficiência do varejo.",
        link: "https://traxretail.com/",
        tags: "varejo gestão de estoques prateleiras"
    },

    // Varejo - Imagem
    {
        titulo: "FindMine",
        descricao: "Ferramenta de IA que ajuda marcas a criar recomendações automáticas de estilo para os clientes, combinando peças de roupas em looks completos.",
        link: "https://findmine.com/",
        tags: "varejo estilo recomendações"
    },

    // Varejo - Imagem
    {
        titulo: "Reflektion",
        descricao: "Utiliza IA para personalizar as interações no e-commerce, oferecendo recomendações de produtos e conteúdo relevante com base no comportamento do usuário.",
        link: "https://www.reflektion.com/",
        tags: "varejo personalização e-commerce"
    },

    // Agricultura - Imagem
    {
        titulo: "Prospera",
        descricao: "Utiliza IA para monitorar plantações e condições climáticas, ajudando os agricultores a tomarem decisões mais informadas sobre irrigação e uso de fertilizantes.",
        link: "https://prospera.ag/",
        tags: "agricultura monitoramento irrigação"
    },

    // Agricultura - Imagem
    {
        titulo: "Taranis",
        descricao: "Plataforma de monitoramento agrícola que usa IA para analisar imagens de alta resolução de plantações, detectando pragas e problemas de saúde nas plantas.",
        link: "https://www.taranis.ag/",
        tags: "agricultura monitoramento pragas"
    },

    // Agricultura - Imagem
    {
        titulo: "Blue River Technology",
        descricao: "Startup de IA que desenvolveu uma máquina agrícola chamada 'See & Spray', que identifica e aplica herbicida apenas nas plantas que precisam, reduzindo o uso de produtos químicos.",
        link: "https://www.bluerivertechnology.com/",
        tags: "agricultura herbicida precisão"
    },

    // Agricultura - Imagem
    {
        titulo: "AgroSmart",
        descricao: "Plataforma de agricultura de precisão baseada em IA, que ajuda agricultores a monitorarem a saúde do solo e otimizar o uso de água e insumos.",
        link: "https://www.agrosmart.com.br/",
        tags: "agricultura precisão solo"
    },

    // Agricultura - Imagem
    {
        titulo: "Ceres Imaging",
        descricao: "Usa IA para analisar imagens aéreas e oferecer insights detalhados sobre o estado das plantações, ajudando na gestão eficiente de recursos.",
        link: "https://www.ceresimaging.net/",
        tags: "agricultura gestão imagens aéreas"
    },
]