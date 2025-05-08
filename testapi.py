import openai

API_KEY = "API_KEY"

client = openai.OpenAI(api_key=API_KEY)

response = client.images.generate(
    model="dall-e-3",
    prompt="a futuristic city skyline at sunset",
    n=1,
    size="1024x1024"
)
print(response.data[0].url)  # Prints the image URL
