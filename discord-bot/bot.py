import discord
import os
from dotenv import load_dotenv

load_dotenv()

intents = discord.Intents.default()
intents.messages = True
intents.message_content = True
client = discord.Client(intents=intents)


@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

    if message.content.startswith('$give'):
        role = message.content.split(' ')[1]
        mentions = message.mentions
        for mention in mentions:
            await mention.add_roles(discord.utils.get(message.guild.roles, name=role))
            await message.channel.send(f'Role {role} given to {mention}')

        
client.run(os.getenv('TOKEN'))