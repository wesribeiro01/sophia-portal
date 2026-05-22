# 🚀 Como Hospedar o SophiA Portal — 3 Métodos Gratuitos

## Método 1: Netlify Drop (MAIS FÁCIL — 1 minuto) ⭐

1. Acesse **https://app.netlify.com/drop**
2. Arraste a pasta `sophia-pwa/` para a área indicada
3. Aguarde o upload (cerca de 30 segundos)
4. ✅ Seu site estará online em um link como `https://random-name-123.netlify.app`

> Opcional: Crie conta gratuita para ter URL personalizada e HTTPS automático.

---

## Método 2: GitHub Pages (PERMANENTE + PROFISSIONAL)

1. Crie conta em **https://github.com** (gratuito)
2. Clique em **New Repository** → nome: `sophia-portal`
3. Marque **Public** → clique **Create repository**
4. Clique em **uploading an existing file**
5. Arraste todos os arquivos da pasta `sophia-pwa/`
6. Clique **Commit changes**
7. Vá em **Settings → Pages → Source: Deploy from branch (main)**
8. ✅ Site disponível em `https://seu-usuario.github.io/sophia-portal`

---

## Método 3: Vercel (MAIS RÁPIDO com CLI)

```bash
npm install -g vercel
cd sophia-pwa
vercel --yes
```

Siga o login pelo browser. Site fica em `https://sophia-pwa-xxx.vercel.app`

---

## Arquivo Standalone (alternativa)

O arquivo `sophia-portal-standalone.html` funciona como **um único arquivo** 
sem precisar de servidor — basta abrir no navegador ou hospedar só ele.

