#!/usr/bin/env python3
"""
Gera ícones para PWA do jogo de alfabetização
"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("PIL não disponível. Instalando...")
    import subprocess
    subprocess.check_call(['pip3', 'install', 'pillow'])
    from PIL import Image, ImageDraw, ImageFont

def create_icon(size, filename):
    """Cria um ícone com gradiente e emoji"""
    # Cria imagem com gradiente roxo
    img = Image.new('RGB', (size, size), color='#667eea')
    draw = ImageDraw.Draw(img)

    # Desenha gradiente simples
    for y in range(size):
        # Interpolação entre #667eea e #764ba2
        r = int(102 + (118 - 102) * y / size)
        g = int(126 + (75 - 126) * y / size)
        b = int(234 + (162 - 234) * y / size)
        draw.line([(0, y), (size, y)], fill=(r, g, b))

    # Desenha círculo branco no centro
    margin = size // 6
    draw.ellipse(
        [margin, margin, size - margin, size - margin],
        fill='white',
        outline=None
    )

    # Tenta adicionar texto
    try:
        font_size = size // 3
        # Tenta usar fonte padrão
        try:
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
        except:
            font = ImageFont.load_default()

        text = "ABC"
        # Centraliza texto
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (size - text_width) // 2
        y = (size - text_height) // 2 - font_size // 6

        # Desenha texto roxo
        draw.text((x, y), text, fill='#667eea', font=font)
    except Exception as e:
        print(f"Aviso: Não foi possível adicionar texto: {e}")

    # Salva
    img.save(filename, 'PNG')
    print(f"✅ Ícone criado: {filename} ({size}x{size})")

if __name__ == '__main__':
    # Cria ícones nos tamanhos necessários
    create_icon(192, 'icon-192.png')
    create_icon(512, 'icon-512.png')
    print("\n🎉 Ícones gerados com sucesso!")
