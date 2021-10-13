insert into Authors (name) values ("H.P. Lovecraft"), ('Keith Davidson')
insert into Books (title, summary, published, pages, rating,picture, AuthorId)
values (
    "Call of Cthulhu", 
    "'The Call of Cthulhu' is a short story by American horror writer H. P. Lovecraft, written in August and September 1926 and originally serialized in the February 1928 issue of Weird Tales. It is the only story written by Lovecraft in which the extraterrestrial entity Cthulhu himself makes a major appearance. The story is written in a documentary style, with three independent narratives linked together by the device of a narrator discovering notes left by a deceased relative.",
    "11/01/1919", 
    4, 
    4, 
    'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/CallOfCthulhu.jpg',
    1
), 
(
    "Dagon", 
    "'Dagon is a deity who presides over the Deep Ones, an amphibious humanoid race that currently resides in the Earth's oceans. He is first introduced in Lovecraft's short story 'Dagon;', and is mentioned extensively throughout the mythos. Also known as Father Dagon and the consort of Mother Hydra, although they are Deities, they are generally not considered Great Old Ones.",
     "07/02/1919", 
    4, 
    5, 
    'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/Father_Dagon.jpeg',
    2
),
(
    "The Shadow over Insmouth", 
    "The narrator is a student on an antiquarian tour of New England. He sees a piece of exotic jewelry in a museum, and learns that its source is the nearby decrepit seaport of Innsmouth. He travels to Innsmouth and observes disturbing events and people. A local resident tells him a horrifying story of aquatic monsters who can interbreed with humans to produce amphibian hybrids. The student is tricked into staying overnight in the town, and he is attacked in his hotel. He flees, but finds that his pursuers are the hybrid monsters of his informant’s story. He alerts the authorities, who take drastic action. He then discovers that he has alien ancestors and must eventually return to the sea.",
   "03/01/1927",
    40,
    3,
    'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/91EiE+zQcmL.jpeg', 
    1
),
(
    "Colour out of space",
   " In the tale, an unnamed narrator pieces together the story of an area known by the locals as the 'blasted heath' in the wild hills west of Arkham, Massachusetts. The narrator discovers that many years ago a meteorite crashed there, draining the life force from anything living nearby; vegetation grows large, but tasteless, animals are driven mad and deformed into grotesque shapes, and the people go insane or die one by one.",
    "03/01/1927"
    30,
    5,
    'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/81NeKHR+iaL.jpeg',
    1
),
(
    "The Cats of Ulthar",
    "In the tale, an unnamed narrator relates the story of how a law forbidding the killing of cats came to be in a town called Ulthar. As the narrative goes, the city is home to an old couple who enjoy capturing and killing the townspeople's cats. When a caravan of wanderers passes through the city, the kitten of an orphan (Menes) traveling with the band disappears. Upon hearing of the couple's violent acts towards cats, Menes invokes a prayer before leaving town that causes the local felines to swarm the cat-killers' house and devour them. Upon witnessing the result, the local politicians pass a law forbidding the killing of cats.",
     "06/01/1920",
     28,
     2,
     'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/718cwVfIf5L.jpeg',
     1
);
