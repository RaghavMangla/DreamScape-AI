# AI Art Gallery 🎨

A dynamic showcase of AI-generated art and animated videos, powered by SDXL and Animagine-XL. This project demonstrates the fascinating possibilities of combining multiple AI models to create immersive visual and auditory experiences.

## 🌟 Features

### AI Image Generation
- Powered by **Animagine-XL** (Hugging Face)
- High-quality static image generation
- Detailed prompt configuration showcase
- Gallery of successful generations

### AI Video Animation
- Built with **Stable Diffusion XL (SDXL)**
- Frame-by-frame generation with controllable parameters:
  - Frame count and FPS control
  - 3D Translation (X, Y, Z axis)
  - 3D Rotation (X, Y, Z axis)
  - Seed value management
  - Motion interpolation settings
- Video compilation from generated frames

### AI Music Generation
- Integrated **Meta MusicGen** model
- Context-aware music generation based on video prompts
- Seamless audio-visual synchronization

## 💻 Tech Stack

- **Frontend Framework**: Next.js
- **AI Models**:
  - SDXL for video frame generation
  - Animagine-XL (Hugging Face) for static images
  - Meta MusicGen for audio generation
- **Video Processing**: Frame concatenation and music integration

## 🎬 How It Works

1. **Image Generation**
   ```plaintext
   User Prompt → Animagine-XL → Generated Image
   ```

2. **Video Creation Process**
   ```plaintext
   1. Configure Parameters (FPS, frames, motion settings)
   2. Generate frames using SDXL
   3. Apply motion transformations
   4. Concatenate frames into video
   5. Generate matching music using MusicGen
   6. Combine video and audio
   ```

## 🔧 Technical Requirements

- Node.js >= 16.x
- NPM >= 8.x
- GPU recommended for faster generation
- Sufficient storage for frame sequences

## 🤝 Contributing

While this is primarily a showcase project, you're welcome to:
- Report bugs
- Suggest improvements
- Share your creations using these models

## 📚 Resources

- [SDXL Documentation](https://stability.ai/stable-diffusion)
- [Animagine-XL on Hugging Face](https://huggingface.co/)
- [Meta MusicGen Information](https://musicgen.com)
- [Next.js Documentation](https://nextjs.org/docs)

## 🔗 Connect

- Portfolio: [Raghav Mangla](https://raghav04-portfolio.netlify.app/)
- Twitter/X: [@RaghavMangla7]

Created with Next.js 🚀 and AI 🤖
