# 🚀 Guia Rápido - mind.ia Website

## Instalação Rápida

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000
```

## 📝 Personalizações Importantes

### 1. Número do WhatsApp
Edite `components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = '5562999999999' // Seu número aqui
```

### 2. Informações de Contato
Edite `components/sections/contact/ContactInfo.tsx`:
- E-mail
- Telefone
- Endereço completo

### 3. Mapa do Google Maps
Edite `components/sections/contact/Map.tsx` e substitua o embed do Google Maps com as coordenadas corretas de Goianésia, GO.

### 4. Links de Redes Sociais
Atualize os links em:
- `components/Footer.tsx`
- `components/sections/contact/ContactInfo.tsx`

### 5. Formulário de Contato
Integre com seu serviço preferido (Formspree, EmailJS, etc.) em:
- `components/sections/contact/ContactForm.tsx`
- `components/sections/Newsletter.tsx`

### 6. Newsletter
Configure seu serviço de e-mail marketing em:
- `components/sections/Newsletter.tsx`
- `components/sections/blog/BlogSidebar.tsx`

## 🎨 Customização de Cores

Edite `tailwind.config.ts` para personalizar:
- Cores primárias
- Gradientes
- Tema dark/light

## 📸 Imagens

As imagens estão usando URLs do Unsplash como placeholders. Substitua por suas próprias imagens:
- Hero section
- Portfolio
- Blog posts
- Team photos

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub ao Vercel
2. Configure variáveis de ambiente se necessário
3. Deploy automático!

### Build Manual
```bash
npm run build
npm start
```

## ✅ Checklist Antes do Deploy

- [ ] Atualizar número do WhatsApp
- [ ] Configurar informações de contato
- [ ] Atualizar mapa do Google Maps
- [ ] Configurar formulário de contato
- [ ] Configurar newsletter
- [ ] Atualizar links de redes sociais
- [ ] Substituir imagens placeholder
- [ ] Testar em diferentes dispositivos
- [ ] Verificar SEO e meta tags
- [ ] Testar modo claro/escuro

---

**Pronto para impulsionar o futuro! 🚀**

