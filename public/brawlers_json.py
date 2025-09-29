import json

# with Gemini's help
# dont forget 'cd public' before running
file_name = 'brawlers.json'

brawler_descriptions = {
"HANK": {
        "description": "Hank is a one-shrimp, one-tank army on a mission to liberate sea life from kitchens and markets everywhere. Chefs, consider yourselves on notice!",
        "class": {
            "id": 2011, 
            "name": "TANK"
        },
        "attack": {
            "name": "Balloon Blast",
            "description": "The longer you hold, the deadlier the blast."
        },
        "super": {
            "name": "Fish Torpedoes",
            "description": "Hank launches Fish Torpedoes in all directions, and he heals for a part of his missing health."
        },
        "gadgets": [
            { "description": "The next Balloon Blast also slows down enemies for 3 seconds." },
            { "description": "Hank takes 40% reduced damage for 3 seconds." }
        ],
        "starPowers": [
            { "description": "When Balloon Blast is charged over 80%, Hank gains 10% extra movement speed." },
            { "description": "Hank takes 40% reduced damage for 3 seconds." }
        ],
        "hypercharge": {
            "name": "Home Fish-iles",
            "description": "The Fish Torpedoes that Hank fires with his Super have been upgraded to home in on targets!"
        }
    },"JACKY": {
        "description": "Jacky is a miner who can't resist mouthing off about her wild work experiences using very colorful language! Luckily, the bad words are drowned out by the noise of her jackhammer",
        "class": {
            "id": 2011, 
            "name": "TANK"
        },
        "attack": {
            "name": "Groundbreaker",
            "description": "Jacky hops on her Jackhammer to shake the ground all around. Enemies caught too close will get a pounding!"
        },
        "super": {
            "name": "Holey Moley!",
            "description": "Jacky drills a hole in the ground, pulling in foes to introduce them to her Jackhammer!"
        },
        "gadgets": [
            { "description": "Jacky gets a burst of energy and moves 25% faster for 4 seconds." },
            { "description": "Jacky rebuilds the environment in a small radius around her." }
        ],
        "starPowers": [
            { "description": "When receiving damage, Jacky returns the favor by converting 30% of the damage into a Groundbreaker counterattack." },
            { "description": "Jacky's Hard Hat protects her by reducing any damage she takes by 20%." }
        ],
        "hypercharge": {
            "name": "Seismic Event",
            "description": "Holey Moley slows down nearby enemies for 1.5 seconds."
        }
    },"JAE-YONG": {
        "description": "By day, Jae-yong is your average office worker. By night, he is a karaoke GOD... or so he thinks. The jury is still out on his singing skills.",
        "class": {
            "id": 2014, 
            "name": "SUPPORT"
        },
        "attack": {
            "name": "Work Hard, Play Hard",
            "description": ["Fires a piercing projectile, with different effects depending on Jae-yong's mode. ",
"WORK: Deals less damage, but creates slipstreams with projectiles that give speed boosts to teammates and himself. ",
"PARTY: Heals teammates with a piercing, damaging projectile."]
        },
        "super": {
            "name": "Mix It Up",
            "description": ["Switch between Jae-yong's Work & Party modes! Switching modes changes Jae-yong's main attack and activates the matching ability. ",
"WORK: Gives all nearby teammates a temporary movement speed boost. ",
"PARTY Heals all nearby teammates."]
        },
        "gadgets": [
            { "description": "Deals area damage and increases main attack damage for 5 sec." },
            { "description": "Jae-yong slows enemies around him and his attacks will leave trails of slowing paperwork for 5 sec." }
        ],
        "starPowers": [
            { "description": "Being near teammates gives Jae-yong a 10% speed boost per teammate in range." },
            { "description": "Main Attacks now deal an additional 20% Damage per target pierced." }
        ],
        "hypercharge": {
            "name": "",
            "description": ""
        }
    },"JANET": {
        "description": "Janet will do whatever it takes to reach the top! As a bonus, her performing skills come in handy for rescuing her sister Bonnie, whenever she gets into trouble.",
        "class": {
            "id": 2012, 
            "name": "MARKSMAN"
        },
        "attack": {
            "name": "High Note",
            "description": "Janet sings a loud note. The longer she holds the note, the more focused it will become and the farther it will fly."
        },
        "super": {
            "name": "Crescendo",
            "description": "Janet uses her jetpack to take to the skies for a moment, where she attacks opponents from above for the full duration."
        },
        "gadgets": [
            { "description": "Janet deploys a speaker that deals 100 damage per second to all enemies in the area until it gets destroyed." },
            { "description": "Janet's next High Note pushes her back, even over walls. The more focused her attack is, the further she'll be pushed back." }
        ],
        "starPowers": [
            { "description": "While in the air with her jetpack, Janet reveals a large area of bushes around herself." },
            { "description": "Janet's attack focuses 30% faster." }
        ],
        "hypercharge": {
            "name": "Magnum Opus",
            "description": "Janet retains full movement control during her Super."
        }
    },"JUJU": {
        "description": "Juju owns the Oddities Shop and is followed everywhere by her “pet” voodoo doll, Gris-Gris (pronounced Gregory). Although she can control the elements, Juju is also a talented toymaker who makes dolls to sell to Starr Park's many visitors.",
        "class": {
            "id": 2016, 
            "name": "ARTILLERY"
        },
        "attack": {
            "name": "Elemental Energy",
            "description": "Juju throws projectiles empowered by the environment she is standing on, giving them different properties! Ground: More damage .Grass: More range. Water: Has a slowing effect"
        },
        "super": {
            "name": "From the Other Side",
            "description": "Juju summons Gris-Gris. This spooky voodoo doll drags itself to the nearest enemy and throws damaging needles.",
        },
        "gadgets": [
            { "description": "Juju's next main attack has the power of all three elements." },
            { "description": "Juju gains a temporary buff based on the current environment she is standing on. Earth: Damage reduction .Grass: Invisibility. Water: Increased movement speed." }
        ],
        "starPowers": [
            { "description": "Gris-Gris is summoned with a protective shield." },
            { "description": "Gris-Gris' attack now also slows the enemy for 1 sec." }
        ],
        "hypercharge": {
            "name": "",
            "description": ""
        }
    },"KENJI": {
        "description": "This highly skilled sushi chef has a wholesome life running his restaurant in Starr Park, but it feels like he's trying to hide something about his past... though his sushi tastes so good, nobody cares!",
        "class": {
            "id": 2015, 
            "name": "ASSASSIN"
        },
        "attack": {
            "name": "Dash 'N' Slash",
            "description": "Kenji's basic attacks alternate between a Dash and a Slash. Dash deals damage to all enemies in a straight line and Slash deals damage to all enemies in a wide area in front of him."
        },
        "super": {
            "name": "Slashimi",
            "description": "Kenji targets an area with precise slices, dealing heavy damage and gaining invulnerability for the duration of the Super.",
        },
        "gadgets": [
            { "description": "Kenji's basic attack only uses Dash for the next 3 seconds." },
            { "description": "Kenji instantly heals 75% of damage taken over the last 3 seconds." }
        ],
        "starPowers": [
            { "description": "Slashimi's slices have 30% longer range." },
            { "description": "After avoiding damage for 5 seconds, gets 60% damage reduction from the next enemy attack." }
        ],
        "hypercharge": {
            "name": "All You Can Eat",
            "description": "Pulls enemies to the middle of his Super, and re-appears in the center of the X instead of at the starting location."
        }
    },"LARRY & LAWRIE": {
        "description": "Larry sells tickets to Starr Park visitors under the watchful eye of his twin, Lawrie. Larry loves rules, they make life easier! Lawrie doesn't love rules so much as enforcing them. They make a good team.",
        "class": {
            "id": 2016, 
            "name": "ARTILLERY"
        },
        "attack": {
            "name": "Ticket Dispenser",
            "description": "Shoot a ticket bundle over obstacles that explodes twice after landing, damaging nearby enemies."
        },
        "super": {
            "name": "Call For Backup",
            "description": "Throw a signal to summon your twin Lawrie for help. He will seek out any trouble makers and serve justice with his taser gun.",
        },
        "gadgets": [
            { "description": "Swap weapons with Lawrie." },
            { "description": "Dash towards Lawrie while Lawrie dashes towards you, healing both for 25% of max health." }
        ],
        "starPowers": [
            { "description": "While Lawrie is in range, transfer 30% incoming damage to himself instead." },
            { "description": "While Lawrie is in range, reload 30% of your ammo whenever he damages an enemy." }
        ],
        "hypercharge": {
            "name": "",
            "description": ""
        }
    },"LEON": {
        "description": "Since Leon doesn't like hanging with other people much, his ability to become invisible comes in handy. Only his little sister, Nita, seems to get through to him.",
        "class": {
            "id": 2015, 
            "name": "ASSASSIN"
        },
        "attack": {
            "name": "Spinner Blades",
            "description": "Leon flicks his wrist and fires four Spinner Blades. The blades deal less damage the farther they travel."
        },
        "super": {
            "name": "Smoke Bomb",
            "description": "Leon becomes invisible for 6 seconds. If he attacks, he will be revealed. Enemies close to Leon will be able to spot him.",
        },
        "gadgets": [
            { "description": "Leon creates an illusion of himself to confuse his enemies." },
            { "description": "Leon creates a stealthy area for his team to hide in. The lollipop slowly loses its health over time." }
        ],
        "starPowers": [
            { "description": "When Leon uses his Super, he gains a 30% boost to his movement speed for the duration of his invisibility." },
            { "description": "Leon recovers 680 health per second while his Super is active." }
        ],
        "hypercharge": {
            "name": "Limbo",
            "description": "Leon stays invisible while attacking his enemies."
        }
    }
}

try:
    with open(file_name, 'r') as f:
        data = json.load(f)

    if "items" in data and isinstance(data["items"], list):
        for brawler in data["items"]:
            if "class" not in brawler:
                brawler["class"] = {"name": "", "id": "0"}

            if "attack" not in brawler:
                brawler["attack"] = {"name": "", "description": ""}
            
            if "super" not in brawler:
                brawler["super"] = {"name": "", "description": ""}
            
            if "hypercharge" not in brawler:
                brawler["hypercharge"] = {"name": "", "description": ""}

            if "gadgets" in brawler and isinstance(brawler["gadgets"], list):
                for gadget in brawler["gadgets"]:
                    if "description" not in gadget:
                        gadget["description"] = "" # Tambahkan description kosong

            # 2. Periksa dan tambahkan 'description' ke setiap item STAR POWERS
            if "starPowers" in brawler and isinstance(brawler["starPowers"], list):
                for starPower in brawler["starPowers"]:
                    if "description" not in starPower:
                        starPower["description"] = "" # Tambahkan description kosong


            name = brawler["name"]
            if name in brawler_descriptions:
                desc = brawler_descriptions[name]
                if "class" in desc:
                    brawler["class"]["id"] = desc["class"]["id"]
                    brawler["class"]["name"] = desc["class"]["name"]
                
                if "description" in desc:
                    brawler["description"] = desc["description"]
                
                if "gadgets" in brawler and isinstance(brawler["gadgets"], list):
                    for i, gadget in enumerate(brawler["gadgets"]):
                        if i < len(desc.get("gadgets", [])):
                            # Akses desc["gadgets"][i] aman karena sudah dicek panjangnya
                            if "description" in desc["gadgets"][i]:
                                gadget["description"] = desc["gadgets"][i]["description"]

                # Update Star Powers
                if "starPowers" in brawler and isinstance(brawler["starPowers"], list):
                    for i, starPower in enumerate(brawler["starPowers"]):
                        if i < len(desc.get("starPowers", [])):
                            # Akses desc["starPowers"][i] aman karena sudah dicek panjangnya
                            if "description" in desc["starPowers"][i]:
                                starPower["description"] = desc["starPowers"][i]["description"]

                if "hypercharge" in brawler and "description" in desc["hypercharge"]:
                    brawler["hypercharge"]["description"] = desc["hypercharge"]["description"]
                    brawler["hypercharge"]["name"] = desc["hypercharge"]["name"]

                if "attack" in brawler and "description" in desc["attack"]:
                    brawler["attack"]["description"] = desc["attack"]["description"]
                    brawler["attack"]["name"] = desc["attack"]["name"]

                if "super" in brawler and "description" in desc["super"]:
                    brawler["super"]["description"] = desc["super"]["description"]
                    brawler["super"]["name"] = desc["super"]["name"]

    with open(file_name, 'w') as f:
        json.dump(data, f, indent=4)
        
    print(f"Semua deskripsi berhasil ditambahkan ke '{file_name}'.")

except FileNotFoundError:
    print(f"Error: File '{file_name}' tidak ditemukan. Pastikan file berada di folder yang sama.")
except json.JSONDecodeError:
    print(f"Error: File '{file_name}' bukan file JSON yang valid atau formatnya rusak.")
except Exception as e:
    print(f"Terjadi kesalahan: {e}")