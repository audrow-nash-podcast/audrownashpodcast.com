## [00:00:00] Start

[00:00:00] **Audrow Nash:** Hi everyone, Audrow here. Housing is expensive. A
big and growing part of that expense is the cost of labor. People are expensive,
and the laborforce is shrinking as more people retire than join. A big way to
drive the cost down is to automate parts of the process that are labor
intensive. But robotics in its current state is only good at certain things.
Therefore there's an art in picking things to automate. If the task is too
obvious, you have tons of competitors and it becomes a race to the bottom. If
you pick a task that's too hard, you run out of money trying to solve the
problem and the company fails. Today I'm talking to Barrett Ames, who's a
cofounder of Botbuilt. I think Botbuilt has found that sweet spot. They solve a
few really thorny problems and it lets them automate build wood frames for
houses and other buildings. This conversation will be interesting to - any
aspiring entreprenur as a great example of how different challenges can be
overcome - people curious about robotics construction - and any investors
looking to learn more about a strong robotics company with what seems to me to
be a good moat Before we dive in, a small secret since I'm making an
announcement in a couple of days, but I'm excited to that I've create Audrow
Nash Podcast Jobs board. The board grew out of a problem I kept seeing: robotics
companies struggling to find talent, and talented people struggling to find the
right robotics opportunities. I hope this jobs board can help here. Several
great robotics companies are already posting positions, including this episode's
guest BotBuilt, along with Formic, Luxonis, and Rerun. BotBuilt is still
finalizing their hiring plans and should have more engineering roles posted in
the coming weeks. If you're looking for a job or maybe thinking about making a
change, you can sign up for free email updates to be the first to know about new
positions. If you're at robotics company that's looking to hire new people,
consider posting on the Audrow Nash Podcast Jobs board to gain visibility with
our great community of robotics professionals. Job postings are free. You can
learn more at jobs.audrownashpodcast.com. I'll have a link in the show notes.
Alright, grab a snack, get comfortable, and here's my conversation with Barrett
Ames. Hey, Barrett. Would you introduce yourself?

## [00:02:22] Overview

[00:02:22] **Barrett Ames:** Yeah. My name is Barrett Ames. I'm one of the
co-founders of BotBuilt. At BotBuilt we build homes with robots.

[00:02:30] **Audrow Nash:** Tell me more about that. What are you doing to help
build homes with robots?

[00:02:33] **Barrett Ames:** Yeah. So we do a bunch of construction in a
warehouse. Right? So, somebody sends us a floor plan that's just like a PDF
drawing of the kind of house that they want. In fact, it doesn't even have to be
a PDF anymore. We just literally did a napkin drawing, like somebody drew out on
a piece of paper. Like, this is how I want my house to be. And we were able to
design that from the piece of paper. But anyways, however you have it, you give
us your floor, floor plan design, your house design. We ingest that, design out
the 3D aspects of it. So where does every piece of lumber, where does every nail
go in order to build this house? That gets transitioned over to our robots. And
we figure out first kind of a high level plan, how do we go and do each of these
pieces? So where does where, you know, do we put this piece of lumber in before
that one? Do we put these nails in before those nails. We do that and then we
execute it on the robots. So that's, you know, dealing with all of the gnarly
ness that is lumber, right? It'll be Bo. It'll be twisted all sorts of, bad
lumber. And we do all of that in a warehouse, in big chunks. Build your house
over a period of time in the warehouse, stack it up on the back of a truck, ship
it out to the jobsite. And the big win there is. It lets the framers go. The the
rough carpenters that are on site lets them go from a 14 to 21 day build cycle
down to a four hours. Wow. So there's a big labor savings, in particular on the
jobsite, right? Which is just like, not job sites are, like, not a great place
to be, right? Like, you're out there in the cold, you're out there in the sun.
You're out there in the heat. We just got our site video back from our last,
build, and, one of our panels didn't make it because they tore it up and burned
it to stay warm, right? Oh, my gosh. Like, that's,

[00:04:40] **Audrow Nash:** That's hilarious. Oh, man. Yeah. So you don't want
to be out there. And this is specifically for the framing part, which is the
walls that go up. Correct?

[00:04:49] **Barrett Ames:** Correct, correct. Yeah. So you can think about it
as just like the, the bones of the house.

[00:04:54] **Audrow Nash:** Okay. And so how is this done now and then. I'd love
to hear about how you guys are doing it. And then the challenges you come into
by doing it with robots.

[00:05:03] **Barrett Ames:** Yeah. So right now it's all done by hand, right.
It's just, if you go out to the job site, there will be like one really tattered
piece of paper on every job site. And that's the floor plan. Every framer is
going and looking at it, drawing on it, spilling their, their beer or their
monster on it. Right. Like, and they're just they're just picking up pieces a
two by four, cutting them down to size and nailing them together. And it's,
it's, it's surprisingly dangerous, right? Like, you don't, you know, you kind of
think about it abstractly and you're like, oh, yeah, you're just putting two by
fours together. Yeah, whatever. But in order to build the house up. Right, like,
you really have to start doing some pretty, pretty, interesting gymnastics
pretty early. Right? So, like, on that site video that I was, just referencing,
we could see guys on other jobs standing on top of the first floor, walking
around on two by fours. Right. That's all. No safety equipment. So it's just
like, there's saws everywhere, nail guns, and and it's just, it's just generally
not a safe place to be.

[00:06:16] **Audrow Nash:** There. Yeah, but the accident rates are pretty high.
For this and especially once you get into multi storeys. Right. Because I mean
first floor it's like well you have to stand up these things and you have to cut
and you have nail guns and things like this I'm sure accidents happen just on
the first floor. But yeah I'm sure with more than one floor it becomes very
dicey very quickly. Yeah probably.

[00:06:36] **Barrett Ames:** Yep yep. And so it's yeah. The way that they do it
right now is, pretty rudimentary, right. It's just, like, you get the plan, you
build it. And then somebody, somebody else, comes by and checks it, and that's,
that's kind of the end of the story. And you gotta you gotta do it. And
whatever, whether there is.

## [00:06:59] Challenges

[00:06:59] **Audrow Nash:** Yeah, that's sinks a cot or cold or anything. Right.
But so I think there are some challenges because we talked before. And so I
remember some of the things there are some challenges that sound very
interesting with this one. The floor plan is very low resolution, like it's it's
just basically this is where the walls are going to go. They're not saying the
like the distance between the studs, how much wood they need, all sorts of
thing. So I think there's like one there's a lot of ambiguity in this. And
especially for like custom homes or things like this, a lot of variation and
then probably a lot of waste because of this. Tell me a bit about this.

[00:07:36] **Barrett Ames:** Yeah. So every floor plan, when you look at it
first you, you think like, oh, this is a technical document, right? Like it's
got lots of lines and there's like a scale, right? Like there's all these
dimensions drawn everywhere. And what we've found is, it's not a technical
document at all. It's actually just providing designer intent. Right? Like we
want a window, and the window is here. The door is there. Right? And and we
understand it to be intent because, like, if you shift a door an eighth of an
inch left or right, no one cares. No one cares, right? They do care if all of
the doors, are lined up in a hallway or something, right? Like, so there there
are kind of these design guidelines, and so the first thing that we have to do
is, is really bring all of that intent in and then go and design every little
bit. And because we do that, we get a really accurate accounting. Right? Like we
have to know where every nail goes in order for the robots to come in, do that.
And when they're building a house right now, they're literally just looking at a
piece of paper and going, oh yeah, I need to do that over there. And they walk
over there and do it right. There's not a lot of like, yeah, there's there's not
a lot of planning necessary. And so they're they don't do a lot of planning. And
so when we go through and do every single stud in every single nail ahead of
time, we've get this, this really accurate picture of the house well before it
gets built. And because of that we can order material more accurately,
drastically reducing waste. Right. So on the houses that we built, we've had our
our contract partners say we usually have 3 to 5 dumpster dumpsters of waste,
but with you we only have half a dumpster of waste.

[00:09:32] **Audrow Nash:** Right. So that's a big reduction.

[00:09:33] **Barrett Ames:** Big Reduction in waste. And then on top of that,
the way that they actually currently order materials is really interesting.
They'll take the floor plan and they'll go to a lumber yard and they'll say
like, hey, lumber yard. How much material do you want or do we want? And, that.

[00:09:50] **Audrow Nash:** Sounds cooked.

[00:09:51] **Barrett Ames:** Right. Yeah. And so we've we've found 20 of all of
it. Yeah, yeah, yeah. So we find, we find, 20 to 40% saving in material, just
by, by kind of solving this asymmetry in it in, in in incentives.

[00:10:05] **Audrow Nash:** Okay. That's very interesting. What about so another
problem that I see that's kind of difficult is the variation in wood quality. So
like you buy a two by four it's slightly twisted or a little longer or the
angles are weird. Or tell me a bit about that too, because that that probably is
a challenge. Also.

[00:10:22] **Barrett Ames:** Yeah, it's a massive challenge. And it's it's a key
challenge, right. There are a ton of grades of lumber out there. You can go all
the way up to LSL, which is this, this beautiful engineered lumber, and it will
be straight and perfect, but it cost ten times as much as what a normal house is
built with.

[00:10:46] **Audrow Nash:** You're paying for that precision, right? Right. Or
this kind of thing, because it's two spec, right?

[00:10:49] **Barrett Ames:** Okay. Right. And so we're early on at BotBuilt we
had this decision put before us, like, do we decide to engage with the lumber
that is on the job site, or do we pick this much better engineered lumber?
Right. And it would have made the engineering problem much, much easier. But we
decided that the the fundamental thing is that we need to build more houses in
America, and that means cheaper, you know, cheaper materials. So we went with
what homes are built with today. And if you look at what homes are built with
today, it's just, it's just the two by fours that you can see at Home Depot,
right? Like it's just going to be twisted and borrowed. There's this thing
called waning, which is where big chunks of the corners are missing. Right.
There's going to be knots. There's a big pine beetle problem right now. So there
there will be holes in some of the lumber. And that's okay. Right. Like there
there's some.

[00:11:50] **Audrow Nash:** Amount that doesn't compromise the structural
integrity that much. Right?

[00:11:53] **Barrett Ames:** Okay. Right, right. And so there's there's just a
ton of variation within one species of lumber. Right. Like we in the southeast
build with, what's called spruce pine fir. But if you go to the Pacific
Northwest, they're going to be more Douglas fir. And so you'll get variations
in, in all sorts of the texture, like the visual texture, but then also the, the
geometry of the two by four, that are species dependent, location dependent,
harvest dependent. Time. Like, how old was this tree when they chopped it down?
All of that leads to just an immense amount of variation, I bet.

[00:12:33] **Audrow Nash:** Okay, so how do your, So, like, I feel like I have a
good grasp of the problem now. How do your systems work? And what have been kind
of the hard problems on the way? I can imagine a few and we've talked earlier,
but tell me about kind of like end to end. What are you guys doing? I know
you're building the frames, but what does it look like in your operation? And
then I'd love to just quickly, as you're describing it, talk about the, hard
problems and then we'll dive more into each of them.

[00:13:04] **Barrett Ames:** Yeah. From a operational standpoint. Right. Like
working with lumber, starts at, like a really material handling specific level.
Right? A lot of a lot of approaches. Don't think about just the logistics of
moving a two by four around. And so what we do is we just stack all of our
lumber right next to the robots. And then the robots look over, grab the piece
of lumber out of the out of. It's called a bunk, which is just a big old thing,
a lumber freight. Just think about all the lumber that you see stacked up in
Home Depot. That's a bunk. We grab a piece out of that, we put it in in, a
measurement device at the back of our system that allows us to position it
precisely to a 32nd of an inch. Then we pick up a saw, cut the lumber down to
size, and then pick it up out of our our. We call it the input table, but
basically our measurement device and put it on the, put it on the work table.
You do that a couple thousand times and you've built a house.

[00:14:08] **Audrow Nash:** Right? Yeah. Okay. So you process the lumber, you
put it in a big bin, the bunk, you grab it out, you cut it, you place it where
you need it. How do you. I guess so the main challenges that I see with this
one, getting an accurate 3D model of all the wood and then doing something
appropriate with it to cut it, and things like this. Like, tell me a little bit
about that. I suspect that's a good challenge.

[00:14:36] **Barrett Ames:** Yeah. Yeah. So I actually like even before we
characterize the lumber, just the, so the, the bunk actually comes to us just
strapped. Right. So there's okay, there's like, this nice 14 by 14, grid of
lumber. And when we, cut the straps, it's it's a bunch of lumber all recently
cut from the same tree, all laid out next to each other. So I actually like t
first problem is individual weighting or simulating that piece of lumber. Yeah.
Visually. Right. And so, so there's actually, a really interesting challenge
there, that we solve with a deep convolutional neural network, and a whole bunch
of data that only we have. Right? Like, there's not a whole lot of people out
there that are collecting massive amounts of two by four data, but we we're one
of them. Yeah. And so we that's fine. Yeah. We we simulate each of them. Just
using a stereo pair, and then, pick it up, we pick it up using vacuum grippers.
Wow.

[00:15:43] **Audrow Nash:** Yeah. I'm impressed. It's vacuum grippers for that.
That must be a big arm and big vacuum grippers. Then how heavy is each of these
pieces of wood?

[00:15:49] **Barrett Ames:** Two by four. It's actually only 10 pounds, so
they're actually pretty light. And.

[00:15:53] **Audrow Nash:** Okay. Just awkward and long.

[00:15:54] **Barrett Ames:** Yeah, yeah, it's like a motion planning nightmare,
right? Like, just imagine you don't whack stuff, right? Yeah. Just imagine
everything's a bug trap problem, because that's what everything turns into when
you have this. What long piece.

[00:16:07] **Audrow Nash:** What is a bug trap?

[00:16:08] **Barrett Ames:** Oh, yeah. Yeah. Just like, you know, the, the, it
comes from the, the bug traps that you'd use to catch, like, fruit flies. Right?
Like you take a cup, you put some, vinegar and some sugar in the bottom of it,
and then you put some Saran wrap over it, and you poke hole in it. Right? Okay.
And the fruit fly flies into it, but it's the they're too dumb to get out. Like
there's just one very narrow passage that can get through. Yeah. That's that's
what in motion planning. Like that's, that's how we describe kind of these
narrow passages. Right. Where relatively easy to get in one direction, but like
very specific to get out the other direction.

[00:16:48] **Audrow Nash:** To pull it out. Right. Of the bunk. Right. For this
kind of thing.

[00:16:52] **Barrett Ames:** Right. Okay. And so yeah. So just moving with
lumber in general kind of turns everything into these narrow passage problems.
Yeah. For sure. Right. Because you're you're.

[00:17:02] **Audrow Nash:** Because you have to, like, put it this way and bring
it that way. Right? Like backing up a car, kind of like turn the wood. Right.
This kind of thing. Right? Okay. So, yeah, you have to move all that. That
sounds painful or sounds like a challenging motion planning problem. And
segmenting it from all the other wood that looks similar with, 3D sensor. Yeah,
that sounds hard. But so you have a data set for that that you've collected
through your own. Means. And that lets you do it. Okay. So that's kind of like
problem one is the segmenting it gets at. Problem two is moving it. Then you
move it to your saw and your position for measuring it right. Everything.

## [00:17:41] Sketch to Structure

[00:17:41] **Barrett Ames:** Right. And that's that's a really tricky problem as
well because, gripping on to lumber. Lumber is actually pretty soft. Right. And
so you have to worry about deforming it while you're moving it. And how that
impacts your measurement. And so there are, there's a bunch of how do we move it
really quickly because we need to move it really quickly in order to, to process
it in, in an economical way, and get it down to a 32nd of an inch. Right. So we
have to measure very precisely, to, to really, get the, get the tolerances we
need. Right. Those tolerances are basically driven from like, how the lumber
stacks up in, in a building. And so there's like a really interesting controls
problem there, that we tackle with, with some in-house, kind of combination of,
of controls, sensor fusion and some custom, mechanisms.

[00:18:45] **Audrow Nash:** Gotcha. So once you're grabbing the wood and then
you're placing it, cutting, measuring it, cutting it, this kind of thing. Now
there's still the difficulty in my head of going from the napkin sketch to the
full plan.

[00:19:01] **Barrett Ames:** Yeah. Yeah.

[00:19:02] **Audrow Nash:** That has like windows and doors and all the features
that one might expect and matches code and things like this. Tell me a bit about
that because that sounds hard and interesting also. Yeah.

[00:19:12] **Barrett Ames:** Yeah. So that very difficult problem. And just,
just absolutely key to getting everything working, in the right direction.
Right. And so the, what, what we do is, is kind of this combination of, mixed
integer programing and generative AI. Right? So, we need to take in all of these
constraints and generate, the true constraint. Right. And so we we use a
generative model.

[00:19:42] **Audrow Nash:** What is your true constraint. What do you mean.

[00:19:43] **Barrett Ames:** Well, like we have to interpret all of these as an
intent as opposed to like, mathematically true dicta.

[00:19:51] **Audrow Nash:** Right.

[00:19:51] **Barrett Ames:** Yeah. And so that's kind of that's that's the
translation that I'm talking about here.

[00:19:56] **Audrow Nash:** I see. Yeah. So there will be a true constraint. And
that is something that matches all of the specifications dictated in the. Okay.
So you have to interpret that into something that's like right, complete right.
Right.

[00:20:08] **Barrett Ames:** And so okay, in order to build that model, we
actually have just just over 2,000,000ft² of floor plans that we've now
processed. And that lets us, train, I think we've got three, no, we've got four
generative models now that are built off of that, just picking out all of these
different constraints and synthesizing them together to give us something, that
can go into the optimization.

[00:20:37] **Audrow Nash:** Right. Okay. Why? For models, what are they doing
differently?

[00:20:40] **Barrett Ames:** Well, we kind of segmented it up into different
problems. Like finding windows and doors, as opposed to dimensions and like,
there there's just some nice, areas to segment it up.

[00:20:54] **Audrow Nash:** I see, yeah. Okay. Tell me more about that because
that's very interesting. So you trained on a bunch of floor plan data. What did
that data look like? And where were your sources? Yeah.

[00:21:05] **Barrett Ames:** For that. Yeah. Our our sources, mostly come from
builders that we've been able to talk to. And it's just, you know, anyone and
everyone that we can get to give us, floor plan. What? We'll we'll use the data
to help train our models.

[00:21:26] **Audrow Nash:** Okay, okay. And then so do you have to annotate it?
Yeah. Initially. Or how did how did all that work?

[00:21:32] **Barrett Ames:** Yeah. So we've got, a labeling team that goes and
annotate, really difficult to outsource that, because I bet it's not. It's not
your standard, like, labeling problem. Right? It's not just a classification
problem. It's it's I mean, in some parts it is, but, you know, there's just a
lot of.

[00:21:52] **Audrow Nash:** Code you need to be sort of subject experts, right?
Some some, like you need some training. Right? So I'm sure you can't like, or
Amazon Turk or whatever it is, that thing where you have, like, random people do
your task for a few cents, right? Or whatever it might be. Right?

[00:22:05] **Barrett Ames:** Yeah. So we spent six months training up a labeling
team, to be able to read construction plans and go and label everything. And
they're like, they're very key to the beginning of the whole process. Right?
Like, without them, we wouldn't have been able to get to this point where now
they're more supervisors, right? They're doing a lot of validation. And, the
models are doing most of the work. But early on they were providing all of the
annotations for.

[00:22:36] **Audrow Nash:** That's cool. Okay. So you have a bunch, you have a
bunch of floor plan data. Yep. You use that to learn how to generate plans that
your robots can make. You've had a bunch of people bootstrap this by adding the
data in and then you learn from that. What? It just sounds hard to me like I
wouldn't naively know that that would be, a tractable problem in a sense, or
that the data wouldn't be just, like, total garbage. The output wouldn't be
total garbage. Yeah. For this kind of thing. Like, how do you, like, it seems
like an optimistic bet to me. And I'm glad that it seems like it's working. But
tell me a bit more about the challenges around there.

[00:23:22] **Barrett Ames:** Yeah, I, I think, first of all, you're not alone,
right? Basically every engineer that I've talked to about this problem has been
like, well, why why did you even solve this problem? Right? Like, can't we just
make, make architects build it in CAD, right.

[00:23:40] **Audrow Nash:** And expensive and slow.

[00:23:41] **Barrett Ames:** Right, right. And, the fact of the matter is that
most PDFs are or most homes are, are coming out of designs that are already
exist, and 99% of them exist in paper. So that that really provided the impetus
for going and building this thing. And it's, it's really this combination, of
our, like, ripping out all the information or extracting all of the information
from the PDF with our optimization. That that makes it all work. Right? Because,
there's this, this, feedback cycle of, you know, here, here's everything that
we've learned from the plan. All right, run it through the, the more procedural
optimization constrained approach. Right. And, the way that we built that
optimization is really important, because it can, well, we we knew upfront that
builders were going to have different ways of building things. We knew that,
every state you go to is going to have different building codes. Definitely. So
we had to build that optimization in like a very, very nice, way.

[00:24:52] **Audrow Nash:** To, to include those features. Right. Or like labels
or something so that you can use them. It's like so your model understands the
differences that it may be saying, do this with the constraint of 16in between
stud. Right. I'm making it up. But like something like that, where one place
might be 18in, something like that, ten foot walls versus eight foot walls
versus whatever.

[00:25:12] **Barrett Ames:** Right. And that's why we went with like a more
classical optimization approach there, because we can just swap in and out the
constraints and those, those give us like these, these hard, hard guarantees
that we're going to satisfy the building code. Even though we're, we're shoving
in a whole bunch of stuff up front. And if, you know, if, if the labels are
wrong or the annotations wrong, which at this point, like, they're like 99%,
which is probably pretty good, right? Yeah. It's great. Oh, totally. Then.

[00:25:45] **Audrow Nash:** And then hopefully if they're 99%, that 1% is just
like a little tweaking or you run it again or something.

[00:25:51] **Barrett Ames:** Right, right, right. So like the first time we
built a plan, I went through, we didn't we didn't know that we needed the
software. Right. I went through the plan and designed every single panel by.
Right. Yeah. And like, that took me a week. Wow. And then I was like, this is
nuts. I should find somebody else to do this. So I went and asked a civil
engineering firm like, hey, will you guys design panels for us? They gave me a
quote for $20,000. Wow. I was like, all right, so we need to build this
software. And and now we're down to, just under two hours with validation.
Right. And the dam, the goal is 30s. I want to be able to put a plan in, get a
code out while you're on the phone with someone.

[00:26:41] **Audrow Nash:** Oh, that would be so sick. Hell, yeah. What is it?
Do you have any idea about the cost reduction in that? So if they quoted you at
$20,000, this probably if you don't include all the R&D cost and time developing
it, your your run cost is probably like super cheap. Yeah. I run a.

[00:26:58] **Barrett Ames:** Dollar or a few dollars. Yeah I've run it. Our run
cost with validation is about 20 bucks now.

[00:27:04] **Audrow Nash:** It's amazing. Yeah. So a thousand reduction.

[00:27:09] **Barrett Ames:** Yep.

[00:27:10] **Audrow Nash:** That's bonkers. That's so fun. Yeah. That's that's,
Beautiful. Yeah. Oh, yeah. Yeah, I love it.

[00:27:15] **Barrett Ames:** Yeah. It's it's it's, it's it's like one of the key
driving things here, right?

## [00:27:20] Generative Solutions

[00:27:20] **Audrow Nash:** Yeah. Big differentiator I imagine too, because it's
a, it sounds like a thorny problem and it sounds like. So when you say
generative, solutions, you're not talking like ChatGPT, you know, generative AI,
you're talking more like classical optimization or. Yeah, constraints or. No.
Like, what is it.

[00:27:40] **Barrett Ames:** Like like.

[00:27:41] **Audrow Nash:** Evolutionary strategy?

[00:27:42] **Barrett Ames:** No. You know what? What kind of thing? When I mean
generative, I really do mean generative. Like there is. Like like there there is
an underlying distribution and we're learning that underlying distribution. And,
and you know, you can think about new things coming in, and then sampling from
that distribution. So you can kind of condition your distribution based on
information that you've brought in. I've seen and then sampling from that to
give you an idea of confidence in something. Right. So if you make a bunch of
samples and they're all the same thing, you should have pretty high confidence,
like, oh, yeah, this. Totally. Right. So it's, that I, when I, when I say
generative, I do mean like, literally generative.

[00:28:25] **Audrow Nash:** You're making a distribution, you're sampling from
it. Right. I see with, with that, what kinds of decisions is the model making?
Like what what all is it deciding.

[00:28:37] **Barrett Ames:** It's it's, you know.

[00:28:40] **Audrow Nash:** It's like stud placement or like, configuration of
wood when you're putting, like, an actor somewhere or like all these things.
Like what what what all is it deciding. Yeah, it's.

[00:28:50] **Barrett Ames:** It's really synthesizing all of the various
constraints. Right. So it's it's like, what's the, you know, given given window
placement here and dimensions here. Like what what where do we really want that
window? And so that's the it's kind of, it's taking all of that,

[00:29:11] **Audrow Nash:** Hell yeah. And then how do you. So you're getting a
higher fidelity model with all the studs and things like this, in their
position. How do you go from there to what your robots are building?

[00:29:25] **Barrett Ames:** Yeah, yeah, yeah. The great question. It's, yeah,
deeply technical question. But at a high level, like, we're just thinking about
the geometry of the robot, the geometry of the problem, putting those two
together and saying, all right, we need this two by four to go here. How does
that impact what the robot can do? And vice versa. It it's the the way that
we've implemented it very much falls in line with, with, an area in robotics
called task in motion planning. And specifically, like a lot of the details are
just stuff that come directly from my PhD. So I did a lot of work on how you do
this kind of high level task planning, but it's parameterized by some behavior
that the robot has. And so that that,

[00:30:24] **Audrow Nash:** What do you mean? I don't quite understand.
Parameterize. So task I think of. So you have something to do that requires many
steps. And then parameterized with by the behavior that the robot has, I don't
quite. Yeah.

## [00:30:36] Structuring Build

[00:30:36] **Barrett Ames:** And so I kind of got my words flip there. The
behaviors are oh no are parameterized in the sense that like, you know, if, if,
you want to put a two by four on the table, there's a whole bunch of spots on
the table, you could put it down, or you need to figure out what the where,
where on the table is it going to go.

[00:30:54] **Audrow Nash:** Yep. So your parameters are dictating what to do
next. So you have a bunch of simple behaviors like place the thing here, but
then you have the parameters that specify the what should go in this location.
And then another piece should go in that location. Right for this kind of thing.
So you break down, but so that the process of breaking down your output from
the, the the blueprint to like PDF to, a more detailed frame design, that part's
very interesting. And maybe that's very hard to talk about for this kind of
thing. Yeah. But, I'm curious about that trends, because I imagine you have to
figure out where all the nails go. You have to figure out what order tasks must
be done. Yeah. Like, there's a lot there that I imagine is very hard. And the
way that I would naively suspect you implemented it is a bunch of heuristics.
Have been specified, and then you kind of run it over this, like basically make
sure you have something placed so you can attach something to it. Nails go every
this often this kind of thing. But tell me how you've done that.

[00:31:59] **Barrett Ames:** Yeah. So at at a design point, right. Like at the
end of the, floor plan to design stage, we end up with, just a CAD of the house,
right?

[00:32:12] **Audrow Nash:** Yeah. That's so cool.

[00:32:13] **Barrett Ames:** It has every two by four, every nail. And so from
that, we can we can take a panel out, right? Like, take our Lego block of the
house out of the house and say, all right, we want to build this chunk. And, and
building that chunk is really just a planning problem. Right. We know what our
end goal is. And we know a bunch of initial conditions which are the we know we
have lumber and we know where nails come from. Right. Yeah. They they.

[00:32:47] **Audrow Nash:** I like your framing.

[00:32:47] **Barrett Ames:** Of this. Right. Yeah. And then we just we have, you
say go, right. We have a classical planner, that interacts with the geometry of
the robot and searches through that space to find, you know, given our set of
behaviors, and the parameters for those behaviors, how do we get from pile of
lumber and the ability to magically make nails appear to end panel?

[00:33:13] **Audrow Nash:** That's awesome. And do you, do you do you kind of go
through it in simulation first?

[00:33:18] **Barrett Ames:** Yeah. Yeah.

[00:33:19] **Audrow Nash:** So how does all that work?

[00:33:20] **Barrett Ames:** Yeah, we do it all first in simulation, to figure
out like what's the feasible path, right? Yeah.

[00:33:26] **Audrow Nash:** Because that sounds very hard.

[00:33:27] **Barrett Ames:** Right. And a feasible path. We get it in about like
a minute and a half to two minutes. And then we spend, like another 25 minutes
optimizing. And then once we have that optimized path, it's giving us like high
level behaviors and, and and their, their parameters. Right. So it's, it's put
down this two by four, which for us is almost always the top plate goes in first
top plates. The two by four that goes to the top of the wall. And then you put
down a bunch of studs and then you put down the bottom plate, and how you put
the order in which you put all of those studs down is very important because the
geometry of our end effector like.

[00:34:09] **Audrow Nash:** Can't get everywhere, right.

[00:34:10] **Barrett Ames:** Unless you put it in just the right order. And so
we figure out that order, just by simulating everything. Right.

[00:34:18] **Audrow Nash:** I would imagine. Okay. That's really cool. And you
basically is it like you're trying to simulate it forward and then it's like
blocked. And then you throw out that one and you generate again and you do that
a few times. Or how do you I or it's an optimization problem where you keep
moving. I just I'm curious how you frame the optimization problem to get the
targets I suppose. Or like the the path that you're going to end up doing. Yeah.
For everything.

[00:34:45] **Barrett Ames:** Yeah. So we because we know what we want at the end
and we know everything that we have, both material and behavior wise. Right. You
can in parallel look at a whole bunch of different configurations that we might
run into along the way and decide whether or not they're valid. And that's a
really fast simulation shot.

[00:35:11] **Audrow Nash:** Oh, that's cool.

[00:35:11] **Barrett Ames:** And so it just shunts off whole branches, of of the
planning problem really quickly.

[00:35:18] **Audrow Nash:** Yeah. So it's a big branching thing and you keep
going. Oh, this one doesn't work. Right. Cut that off and then keep proceeding
down other ones. And so you'll have this big explored space of possible
solutions. And then from there maybe that's where you're like 25 minute
optimizing. Yeah. Yeah. You're like trying them scoring them whatever it is.

[00:35:36] **Barrett Ames:** Right. Yeah. Because the first the first plan
through. Well it'll like pick up and put down the tool like 25 times or
something. So it's free because it's just doing like depth first search through
this massive, you know.

## [00:35:49] When Things Go Wrong

[00:35:49] **Audrow Nash:** Huge space. Right. That's wild. What a cool thing.
Okay. Hell, yeah. So then you assemble your pallet and you load it on a truck
and then ship it out, and then builders assemble it. That's awesome. Okay, so
how do you handle exceptions with this? Like, I'm sure that things don't go
right all the time. Yeah, yeah. Like, maybe sometimes you drop a piece of wood
or a nail doesn't go in the correct play. Probably go in the correct spot, but
like, say it chips the wood or something like I'm sure exceptions happen.

[00:36:26] **Barrett Ames:** Oh, yeah. What.

[00:36:27] **Audrow Nash:** What are some of the exceptions and how do you deal
with that. Yeah.

[00:36:30] **Barrett Ames:** Yeah, yeah. So the exceptions are, they are
exceptional, but not as exceptional as I would like. Right. Of course, there's,
you know, if you think about a house being a thousand pieces of lumber and 2000
joints, there's going to be like, we have to be really, really good in order for
there to be no errors. Yeah. And so what we do is actually pretty interesting.
And and I've never, I've never seen anybody in robotics do this. I hope I'm
wrong. And there are just smarter people out there. But but we use this, thing
called the good Turing estimator. So. Okay. So Ian good was one of Alan
Turing's, colleagues while they were building the Enigma machine. And he
developed this estimator that just allows you to estimate the number of unseen
bugs. Right. Okay. Really useful. Interesting tool. And it's actually how we
quantify our exceptions, even though we haven't seen all of them. So we just,
write them down, as we see them, there's a few kind of key hotspots, and then
there's a long tail of stuff. And that's one of the really, really key things to
construction is that there's not one big like, hairy problem. It's.

[00:37:51] **Audrow Nash:** A bunch of little one.

[00:37:52] **Barrett Ames:** Thousand little ones. Yeah. Totally. And so I
actually early on, I was really lucky to find this guy who I consider to be the
oracle for the problem that BotBuilt is solving. He he spent the first part of
his career as a Seabee, in the Navy. So he is building stuff. And then when he
left the Navy, he went from a laborer to a superintendent of construction. And
then just, you know, around that he was like 40, 45 and decided like, I don't
want to do this anymore. Robots are cool. I'm going to go build robots. And I
did all the way up through the DARPA Grand Challenge. Right. So he has a vehicle
entered in the DARPA Grand Challenge. Like, just awesome. Just like how how do
you find people like this? I don't know, I just got really lucky and found this
one, dude. Yeah. And so I invited worlds. Amazing, right? I invited Mark to
BotBuilt, and I said, like, look, how do we die? And and his his his, advice was
exactly what I just said. The construction. There's not one big problem that
kills you. It's not doing the thousand things well. And so that's how we are.
We're always trying to figure out what are the thousand things, and then how do
we how do we prioritize those thousand things to do? Well, because, you know,
we're we're, we're constrained, right? Like, we can't solve them all at once.
So, like, the big things for us, over the last couple of couple of months have
been taking out those really high frequency things like the computer vision,
simulating all of the lumber, and doing a, a high enough of every, degree.
Those, those kinds of errors are actually pretty nice in that, when we do have a
problem in labeling, we just have an image, and we just need it labeled, so that
we can actually just ship out, get it labeled, comes back, robots keep going.
And now we have more labeled data. That's that's like, super nice problem. For.

[00:39:56] **Audrow Nash:** Sure. Yeah. Computer vision problems tend to be
nice, right? A lot of times if you get them. Right. Okay.

[00:40:01] **Barrett Ames:** But other like other classes of problem are like,
we, we have this unobservable problem that happens, about like once every 5 or 6
homes, a nail will go into a piece of lumber and there's a knot, hidden beneath
the face of the lumber. And so the nail will actually hit the knot, curve down
around it, because it's not more dense. Right? It's harder. Yeah. And it'll
actually go down into our work table.

[00:40:35] **Audrow Nash:** Then it gets stuck.

[00:40:35] **Barrett Ames:** And then it's stuck on your work, and we have no
way, like the first time it happened. We're, like, trying to pull this panel up
off the. What happens. Right? And then we figured it out. So that's just like,
an exception that we have to, to, to sense, right? Like, oh, we're trying to
pull this thing up, and it's not, it's not coming up. But we really don't have a
great way of solving that one yet.

[00:41:01] **Audrow Nash:** Can you put everything on, like, a not hard,
surface? Like, I'm thinking, like, a spongy thing. But you may also want the
rigidity for your framing. So that's actually probably pretty hard. Yeah.

[00:41:14] **Barrett Ames:** Yeah, it's it's definitely an interesting problem.
I think, we haven't even really tried to tackle it yet because it's so low
frequency, but, if I had to guess, you know, we'd use the force torque sensors
in the wrist and, and we'd notice, like.

[00:41:29] **Audrow Nash:** Oh, hey, we.

[00:41:30] **Barrett Ames:** Can tell we're or we can't pull this up. But there
is like, when I pull it up, you can feel that there's, like, this direction that
it wants to go. Yeah. And if you just allowed it to kind of follow along that
path,

[00:41:44] **Audrow Nash:** It might be able to pull it up that way, but
interesting. What a funny thing, that the notches are harder. Yeah. And then,
you get the nail deforming for all of this. What a crazy thing. That's so funny.
You're like, why the hell is this nailed to the table? Like, yeah, yeah, it's
wild. Okay, any other classes of different exceptions? You've kind of run
across? Yeah.

[00:42:06] **Barrett Ames:** We see, constrained motion planning problems a lot,
right? Like, that's just, fundamentally difficult field still. Yeah. Right. Like
you're, you're trying to, to sample from this manifold in, seven dimensional
space, but it's, it's, zero volume manifold from the samplers standpoint. So,
like, yeah, that's just difficult.

[00:42:30] **Audrow Nash:** Super hard.

## [00:42:31] Traditional vs. Automated

[00:42:31] **Barrett Ames:** And we we've made some improvements there. And
it's, it's all driven around, the fact that we have to move these big pieces of
lumber in and, you know, very specific ways sometimes.

[00:42:44] **Audrow Nash:** Okay. Very interesting. So for the end result, how
does this compare? Like how are, I guess, how many houses have you done so far
and how does it compare to the traditional building method of like the people on
site building it.

[00:43:01] **Barrett Ames:** Yeah, yeah. So, we're just finishing up 27, so.

[00:43:08] **Audrow Nash:** 27 houses or.

[00:43:10] **Barrett Ames:** 27 houses. That's awesome. Yeah. And, there are
just people living in them, right? Like, That's wild.

[00:43:19] **Audrow Nash:** What, what I bet that feels.

[00:43:20] **Barrett Ames:** Yeah, yeah. It's great. I mean, there's nothing
like writing code. And then somebody lives inside your code, right? Like. Oh, so
definitely, definitely a lot more like substance to that. It's it's pretty cool.
And they don't know that they're robot built, right? Like it. It's just another
home.

[00:43:38] **Audrow Nash:** Yeah, they're just home. Right? It's great. So how
does it compare to. So you have 27 homes. That's super exciting. How does it
compare in like efficiency or cost or things to, when you're building it on
site?

[00:43:54] **Barrett Ames:** Yeah, yeah. So, the robots are slower right now.
But more cost effective because one person can monitor a whole bunch of them.
Right. And I actually like the grocery.

[00:44:09] **Audrow Nash:** Store right thing where you have one checkout person
manning ten kiosks or something like that.

[00:44:14] **Barrett Ames:** Exactly, exactly. So our kiosk checker, his name is
Tim. Tim used to work at, chick fil A. He's just one of the guys his sons.
He's 16. And he.

[00:44:27] **Audrow Nash:** It's so good. Hell, yeah.

[00:44:28] **Barrett Ames:** He can operate all of the robots, right? And what
a.

[00:44:31] **Audrow Nash:** Cool job for a 16 year old.

[00:44:32] **Barrett Ames:** Yeah, yeah, it's it's he loves it. And we love
having him because he. Yeah, he pushes it way harder and faster than I will.
Right. Like I know too much 60. And of course, like he'll just go for it. Yeah.

[00:44:44] **Audrow Nash:** And so it's like any good 16 year old right. So
that's awesome.

[00:44:47] **Barrett Ames:** Exactly, exactly. So we we Yeah, he can he can run
all the robots. And that's where we get a lot of our efficiency is just scaling
out, Tim's ability to build a whole bunch of panels at once.

[00:45:04] **Audrow Nash:** Nice. Yeah. And that's awesome to Tim being 16. So
I, I suppose, like, maybe he has some construction background. But, like, that's
exciting that it's someone who's, like, relatively new to the workforce. Right.
And, it's a good model for that kind of thing that probably is very favorable
for you guys. Scaling eventually. Yeah, that Tim can be right. Manning all these
machines. Right?

[00:45:28] **Barrett Ames:** Yeah. All right. My co-founder, Brant was, in, in
the Army, and he said that I had to make the robots army proof. Right? So, like,
you just have to be able to have anyone, any old infantry, be able to run it,
and, that's, that's that's what we've tried to do.

[00:45:47] **Audrow Nash:** That's hilarious. Yeah. One of my good friends is in
the Navy, and he says the same thing. But Navy brew, right? For this kind of
thing. Right? Hilarious. Okay. Hell, yeah. Do you have any idea? So with this
parallelization, do you have any idea in terms of like time or cost, how it
compares?

[00:46:04] **Barrett Ames:** Yeah, we're still getting, better numbers on all of
those.

[00:46:09] **Audrow Nash:** And maybe the trajectory of your, improvements would
be interesting to mention.

[00:46:14] **Barrett Ames:** Yeah, the trajectory has been pretty awesome. Year
ago to now, we've improved our throughput by five x. So that's yeah, big, big
improvements there. The.

[00:46:29] **Audrow Nash:** Throughput, is that correct? Yeah. Yep. Okay. Yep.

[00:46:32] **Barrett Ames:** Yep. And we're about to drop a big feature that's
going to double our speed. So that that'll be awesome as well.

[00:46:41] **Audrow Nash:** And so be ten times better than it was a year ago.
Roughly. Yeah. Yeah, yeah, I like that. Yeah. That growth curve.

[00:46:47] **Barrett Ames:** That's awesome. Right? Right. Yeah. You don't you
that's that's the kind of growth curve you need for a venture backed company.
Right. Yeah. So and then the kind of the other big wins that we see are that our
panels are our, like, frankly beautiful, in that they're, they're very precisely
made, and put together. We, we were just walking one of them recently with, an
inspector here in Durham. And he said, wow, this is like, the best framing that
I have seen in Durham. Right? Which, like, feels really good. But it also just
means that at the end of the day, the consumer is getting a better product. And
it actually takes significantly less time to inspect. Right. So, we've seen
inspection times drop from two and a half to three hours, down to 30 to 45
minutes.

[00:47:44] **Audrow Nash:** That's awesome, because.

[00:47:45] **Barrett Ames:** The inspectors just gain a lot more trust, a lot
more.

[00:47:48] **Audrow Nash:** Quickly. Now, not to the, like, I'm sure that's
true, but to play devil's advocate. Yeah. With, like, ChatGPT and things, they
can seem very sophisticated. And it's kind of easy to trust for a lot of things.
But there is definitely cases where they, like, we'll just hallucinate random
stuff. And so the trust can occasionally be betrayed in some sense, or just like
it wasn't well founded. Right. This sounds a lot more structured than that. But
how would you think about that kind of thing if there is kind of a downside to
decreasing the, increasing the trust so much that they just let you go on past,
or on uncosted if something is a little bit wrong because they were just like,
yeah, everything looks so good because they assume a high level of competence
for the builders that are the machines. But you still can do something wonky
somewhere and they just may not see it. How would you think about that kind of
thing?

[00:48:47] **Barrett Ames:** Yeah, that's an interesting question.

[00:48:54] **Audrow Nash:** And obviously it's like you're on your way to doing
very good work. Right? So in the path of doing good work, you'll come like
you're on the right path for sure. Right? But this may be a thing that,

[00:49:07] **Barrett Ames:** Yeah. What could occur. Yeah. So one, one thing,
you know, like, there are they're just pattern matching, right? Like they're
when they look through a house, they're just kind of looking for things that are
odd and out of place. And our stuff tends to be extremely regular, orderly.
Right.

[00:49:25] **Audrow Nash:** And so that so they're looking for exceptions.
Right. And you don't have many exceptions. Right. That's exciting right. Oh
yeah.

[00:49:30] **Barrett Ames:** Right. And so that that gives them the confidence.
But it is it is a human inspection process. Right. From, from from the building
inspector standpoint, we actually do QA internally as well. Right. So because we
we have this 3D model of what we expect to build, we can.

[00:49:49] **Audrow Nash:** And you've added against that.

[00:49:50] **Barrett Ames:** Right. We can just look at that. And so that gives
us, higher confidence and I think I'm not positive yet, but I think it will also
help, with insurance matters down the road. Oh, there's.

[00:50:04] **Audrow Nash:** That's super cool.

[00:50:04] **Barrett Ames:** Like, building insurance is kind of this really
messy place, like, you know. Oh, yeah, a wall falls down and all the contractors
just go, not me. And then the judge just gives everybody an equal share. And
because we capture so much data on every joint and every piece of lumber will be
it will be able to very clearly say, like, look, we did our part. And if we
messed up, like, yeah, we'll, we'll also be able to say, yeah, of course,
clearly like, yeah, that's our bad.

[00:50:35] **Audrow Nash:** Yeah. Because you have like a 3D camera and you have
like a camera image. Right. And probably a 3D scan of everything. And so they
could be like, this wasn't done right. And it's like, well, leaving our
facility, here's the thing. It was perfect. Right. Which yeah, I view that as a
big win for insurance. Yep. For sure. Yep. It's so interesting to me that a lot
of these automation, a lot of the output or a result of increasing automation is
better monitoring and that it's very interesting to me that like insurance seems
to be a big winner. Yeah. Through this because and just like business tracking
right. And things like you mentioned like inventory tracking and things very
interesting.

[00:51:15] **Barrett Ames:** Yeah. I think so I've been, I've been thinking
about this like, framework or paradigm for like how to build robots. Right. And
I call it teleoperation driven development. And the idea is basically like first
you have to design the mechanism, then you have to run the mechanism, but you
want to run it with teleoperation. And that helps you get this, this idea.

[00:51:38] **Audrow Nash:** Problem fit.

[00:51:39] **Barrett Ames:** Right like problem fit, but also like you have to
have really good perception in order to operate it. Right. And so you get this
like, observability from a control standpoint, very early in the process. And
because we're building control algorithms that are subhuman, they always seem to
need more perception than humans, right? Like they can't keep this in. What do.

[00:52:04] **Audrow Nash:** You mean? Subhuman?

[00:52:05] **Barrett Ames:** Just like like below, below human care.

[00:52:08] **Audrow Nash:** But they're not as sophisticated as us, I guess.
Yeah, yeah. Or they may be in other ways, but for the most part, they're less
sophisticated than us, right? Right. In sensing. Say.

[00:52:16] **Barrett Ames:** Right. Right. Well, I'm kind of like keeping an
internal model, right? Like where we kind of sub out a lot of our perception for
like, this really rich internal model, at least, I think. I don't know, I'm not
a neuroscientist, but I.

[00:52:28] **Audrow Nash:** It sounds right to me. Yeah.

[00:52:31] **Barrett Ames:** And then, you know, once you've done the
teleoperation stuff, you're, you're you've now guaranteed kind of two things.
One, that you have enough perception and two, that, you have enough actuation to
get the job done, then you can go and build your own. Yeah, build your control
algorithm.

[00:52:46] **Audrow Nash:** I like that, yeah. I've been thinking of, like, one
thing through all these interviews that I've seen as a big pattern and something
that I've often said, I suppose, is like a human in the loop. Development is
very good for startups, for the reasons you described. But also, like, you can
gradually automate parts of it. You're getting data you're checking for, unknown
unknowns because you're actually getting out there and solving it. Yeah. And
using Tim or similar people where it's like you can slowly scale the number of
robots one person is able to manage, then eventually you can get to full
autonomy. Right? And at the same time, you're proving your market right, which
is really effective, so that you can go get investment and, you can go start
working with and pleasing customers. Yeah, for this kind of thing. So it's they
seem very similar, these two ideas. And I really like your perspective on it,
where you have enough sensing and then you can confirm that the actuation can do
it. So now you can start automating right for this. Right.

[00:53:49] **Barrett Ames:** Right. Yeah. Yeah. That's your your thought process
there I think exactly. Mirrors kind of how I think about teleoperation driven
development.

[00:54:00] **Audrow Nash:** Yeah. Yeah. And it's so interesting to me because a
lot of the like hardcore roboticists don't like this approach. But it is I think
a very fast way to find value. Right. Like where you can add value. Yeah. And to
me that's more interesting. Yeah. You know to make something really work.

[00:54:16] **Barrett Ames:** Well it also really.

[00:54:17] **Audrow Nash:** And solve something. Yeah. Yeah. Go ahead.

[00:54:19] **Barrett Ames:** I was just gonna say it also really helps you
quantify the problems to solve, right. Like totally the good Turing test that we
do just really helps us figure out, like, okay, these are the things with high
frequency and high severity. Those are the things that are worth solving.

[00:54:34] **Audrow Nash:** Yeah. Right. It's a good way of weighting the
problems to solve for sure. Right. Yeah. Because frequency time severity is the
urgency. Right, right. I don't know that thing but I'm gonna look at Turing and
good. That seems like a wonderful.

[00:54:47] **Barrett Ames:** Yeah it's, it's a model. It's a pretty interesting
way to think about how robust your system should be. The other thing that I've
done kind of, kind of with it is I've applied it to scheduling, which is pretty,
pretty interesting as well. We.

[00:55:04] **Audrow Nash:** What do you mean by schedule like.

[00:55:05] **Barrett Ames:** Like engineering scheduling. So, so if you have, if
you've got, some, some big engineering task that you want to do, you get a whole
bunch of engineers together, you all kind of lay out the path that you would
want to do. And the areas where like.

[00:55:22] **Audrow Nash:** Highest technical risk, right, kind of thing. Well.

[00:55:25] **Barrett Ames:** Those will show up as, like a whole bunch of
different ways of doing the same thing, and where people are in agreement. It
kind of collapses down to like, one thing. And the, the cool thing about is the.

[00:55:38] **Audrow Nash:** Frequency, right? Dimension is the consensus. Right.
Interesting.

[00:55:42] **Barrett Ames:** And so the, the cool thing that you get out of the
good Turing estimation is you get now instead of just saying, like, hey, to the
schedule, you get to scale your schedule estimate based off of uncertainty. Oh,
I love that. And so the, the, the awesome thing that we were able to do with it
was I took a six month project. We laid it out with this, and we were within a
week.

[00:56:07] **Audrow Nash:** Damn. That's awesome. Yeah, yeah, it's like how a
GPS will take into it. Like, when you're taking directions on a map, it'll take
into account all the uncertainty. But by the distributions of how traffic
progresses and whatever, on average, you'll arrive pretty close to the time you
want it, right? That sounds super cool. If you could do that with engineering
effort, because that's not like everything is always happening later than it was
expected. And things like this. And it's interesting if you can codify your
problem in this way and then get a really good estimate, that takes into account
a lot of the uncertainty. Yep. Super cool.

[00:56:43] **Barrett Ames:** Yeah, it's been fun. I'm still still experimenting
with it, but at least the early tests I've done with it. It seems really
helpful.

## [00:56:52] Time & Cost

[00:56:52] **Audrow Nash:** I would absolutely love if you make like a blog post
or a video or something once you have it more fleshed out. Yeah, yeah. Or just
hell, we can do another podcast interview. Yeah. And, I would love to learn more
about that because that that's a hard problem. Yes. And, yeah, I mean, people do
or companies do scrum and stuff like this and yeah, not that satisfying in my
experience. And this, this kind of uncertainty because I think that's always
funny with scrum is it's like, well, I don't know the task. So therefore it's
hard to do it for this kind of thing. Right. And so this is like it takes into
account the uncertainty. Right. Which is quite cool. Right. Yep. Very cool. Do
you have any idea of the potential cost? I know I keep asking around the same
kind of things, but yeah, I'm wondering like, do you think it'll be a good bit
faster because like one of the things that comes to my mind through most of my
interviews is that there are massive labor shortages, and I think construction
is one of those areas particularly strongly affected. Yeah. And so I wonder how,
like just getting the task done at all is fantastic. But if it's done really
efficiently and you make a lot of gains in terms of speed and it allows people
to use it for hours instead of 20 days or whatever. You said at the beginning.
Yeah. I maybe that's the good metric to assess. I'm curious. Kind of like an
apples to apples in terms of like, you build a house this way and you build a
house the traditional way. I'm curious if there's like a cost estimate and then
a person time estimate, maybe 20 weeks to the other one. But can you talk a
little bit to this? And it sounds like the trajectory is improving rapidly.
Right. But I'd be interested to hear where you are and where you think it's
going.

[00:58:39] **Barrett Ames:** Yeah, we're we're right at parity right now. Like
it depends a little bit on the complexity of the job. But we're like up and down
right around parity with humans.

[00:58:48] **Audrow Nash:** That's exciting.

[00:58:50] **Barrett Ames:** And so I think, you know, we will be we still
haven't turned the dial up on the actual industrial arms, right. Like they're
still set at 20% speed. So we can we can certainly get a lot more speed out
there. And the big the, the big thing that we're, we're releasing shortly will
be what will help improve speed even more.

[00:59:19] **Audrow Nash:** Can you speak to that at all or is that, secret
thing that will be announced eventually.

[00:59:25] **Barrett Ames:** Well, just, stay tuned. It'll it'll be it'll be a
pretty cool video. And I'll, Oh, hell yeah. So we'll we'll, we'll show it, for
sure. But, yeah, it's there, there's a lot, efficiency still to be squeezed out.
And we're, you know, we're we're making good progress on that every day.

[00:59:48] **Audrow Nash:** Yep. So cost is about the same. And so if you make
it faster, that'll make it cost less. Yeah. I suppose with all of this and I
mean, you guys from my. So you guys are approaching series A. Yep. Correct.
Yeah.

[01:00:02] **Barrett Ames:** Yeah yeah. We're just about to do our series A
fundraise.

[01:00:06] **Audrow Nash:** Hell yeah. Want to share any details with that or.

[01:00:11] **Barrett Ames:** Yeah. You know, we're, we're, always looking for
investors who are interested or experienced in robotics. There's, you know, I
think an ever growing group of people out there who.

[01:00:23] **Audrow Nash:** It is growing.

[01:00:24] **Barrett Ames:** Yeah. Who who understand? I call it the return
profile. But, like, it's, you know, the moats are much bigger in robotics.
Totally. And so I think the, the long term returns will be higher. But it does
take it does take longer. Right. Like there there's. I can't ask ChatGPT to
build me, robot code yet. Well, you can. Yeah, yeah yeah yeah yeah, yeah. But
it's not a it's it's certainly not as easy as building a web app now.

[01:00:58] **Audrow Nash:** Definitely. Yeah. Yeah. It's, there's a new breed of
investor that's, I'm seeing that's coming out, that's thinking long term for
robotics and it's very exciting to see, and they understand a lot of the
grievances that robotics companies have had in the last ten years working with
investors that try to turn everything into software as a service.

[01:01:19] **Barrett Ames:** Right.

[01:01:20] **Audrow Nash:** With subscription.

[01:01:21] **Barrett Ames:** Models and stuff. And I think as a community, we're
also just doing a better job of getting to value faster, right? Like totally
doing doing this teleoperation driven development type approach, like, let's,
provide and verify value, much, much earlier. Whereas, you know, like, I totally
used to think this way that like, yeah, we just got to automate the whole thing.
But that's, that's, that's clearly the wrong way to go about building a robotics
startup. Right. Like, yeah.

[01:01:52] **Audrow Nash:** Not very capital efficient. Right. All right.

[01:01:54] **Barrett Ames:** For this. Right. So I think, you know, they're
they're the kind of investor community pairing I think is really close to being
at, I kind of think about it as like getting ever closer to, like 20. Well, like
2008, 2009, like web dev or SAS, right? Where you're like, yeah, Ruby on Rails
is just starting to come out. People are like, oh, yeah, I can build all these
cool things now. And yeah, I think, I think the category as a whole is about to
have an inflection point.

[01:02:33] **Audrow Nash:** I think that's true. And I think that is going to be
brought on even more by labor shortages and like, aging demographics causing
labor shortages. Yeah. Where things are going to need robots to continue. Yeah.

[01:02:46] **Barrett Ames:** Yeah. Construction for sure has that problem,
right. Where like the. Oh, yeah. The crazy the crazy anecdotes that I have. And
data for construction here are just like 40% of contractors are over the age
of 50.

[01:03:00] **Audrow Nash:** I know, right? Oh, my God. And new ones are not
being trained.

[01:03:03] **Barrett Ames:** Right. So it is.

[01:03:04] **Audrow Nash:** Everyone went to college and didn't want to go to
blue collar job, right? Which now we need so many more blue collar people,
right?

[01:03:11] **Barrett Ames:** For every day in North Carolina, there are three
contractors who can do electrical work that are licensed under the age of 30.

[01:03:19] **Audrow Nash:** Wow. That's the whole state. There's a.

[01:03:20] **Barrett Ames:** Whole state. Holy cow. Yeah. That's wild. Yeah. So
there there's they're there has to be automation. Right. Like. Yeah. And and one
way to think about it is that automation is just taking this old construction
problem and making it sexy. Because if you, if you do it with a robot, it's hot.
And like, doing it by hand. Well, let's say it's not.

[01:03:49] **Audrow Nash:** Yeah. Well, I mean, but it lets you there's so many
exciting things about doing it with robots because one, the robots get better
and better. It's like you can become a bit more of like a technician. Yeah. For
the robots. Right. I don't know. I think the jobs will be changing. Definitely.
For all of the stuff, I mean.

[01:04:07] **Barrett Ames:** Yeah. And then, you know, there there are labor
shortages on the job site as well. Like, on a recently I saw somebody post they
expected 27, framers to show up for a job and only three showed up. And like,
that's, that's part like that's just the way contractors are, right? Like
they're a very mercurial bunch. But then also like the political climate is also
not great for the contractor. Yeah, right. Like, the, the, official numbers are
that a 30 to 40% of contractors are undocumented. Our experience is more like
90%. Holy cow. So there's there is kind of this, you know, very interesting
political aspect to it, that that will, will, you know, I think demand more more
automation, more robotics.

[01:05:04] **Audrow Nash:** Yeah. That's just what I'm saying. Yeah. Because
it's the solution. We can automate ourselves into a better situation. Right. I
do think there will be, I suspect, a wave of blue collar workers. Yeah. Because
plumbers are making 300 K in the Bay area. So yeah, it's like they're making
more than some software engineers. Yep. And I think we're seeing that kind of
everywhere. Where are a lot of places anyways that it's like a lot of these
jobs, it's so scarce, that you have a competent person that they can command a
wonderful wage. And so that's driving people back into it. Which will start to
correct, I expect, in the US. Yeah. Specifically because we're relatively young
demographically. Right.

[01:05:49] **Barrett Ames:** Right, right. And I think still will be tough. I
think you're right there. It'll be a little bit slower in bigger cities because
they tend to be more unionized and have a lot more requirements. You know, you
gotta apprentice for 7 to 10 years or something like that, right? Yeah. And so
that'll, that'll slow things down. But on the flip side, unions are also very
good at adopting technology quickly. Because, they, they have to be able to
like, demonstrate, like, hey, are higher wages, provide more value, right. And
so we actually we're really concerned about unions at first, but what we found
is that they're actually, pretty interested in adopting technology.

[01:06:32] **Audrow Nash:** That's cool. Yeah. One of the companies that I
talked with a while ago was canvas, and they're doing robots for drywall. Yep.
And they work very closely with unions in California. Yeah. Last I talked to
them, and that was very interesting to hear. Are you guys doing any similar work
with unions or how are you guys working with or thinking about unions?

[01:06:55] **Barrett Ames:** Yeah, unions aren't a big thing. In the southeast
in general. So not terribly important.

[01:07:01] **Audrow Nash:** And you're in North Carolina. Yeah, yeah. As you're
saying. Durham. Yep yep.

[01:07:04] **Barrett Ames:** Yep. So we're we're not terribly concerned. Like we
they just don't exist here. In, in other places, you know, it's definitely going
to have to be a conversation, but I think, like Kevin from canvas, has
demonstrated, like, the right way to approach, unions and automation and just,
like, show that, like, yeah, this, this, this is a tool. And just like all
tools, craftsmen should use them.

## [01:07:36] Long-Term Vision

[01:07:36] **Audrow Nash:** Yeah. Totally. Especially, like for canvas with
drywall work. One the labor shortages are intense. There. And to the people who
do it get like unbelievable repetitive stress shoulder injuries because they're
just holding a sander. Yep. And it's like finishing the wall and it's just
super, super difficult on their body. So they retire quickly from that kind of
job. Yeah. So that makes sense for the union to really want to help them. And I
would bet that it's similar for a lot of jobs, like you were saying at the
beginning that, the injury rate is quite high or accident rate because it's like
sores and stepping on two by fours, one floor up or more, this kind of thing.
Yeah. So I would bet that this would be a big benefit. So you guys have 27
homes. You're going for your series A so you're looking at scaling more. Yep.
Well what do you think the future is going to look like for you guys. Like kind
of draw it out for me because I think like my impression is the last, like
getting to 27 homes now or getting to 27 homes has been kind of like a proof of
concept. You've gotten it working. You're now making efficiency gains. Tell me
how we go forward from here. And what do you think the timing and what do you
think the bottlenecks are? Yeah. Everything.

[01:09:00] **Barrett Ames:** Yeah, yeah. So forward, is is kind of along I think
three fronts. First is, continuing to push on efficiency, of robots. Second is
adding more value to panels. Right. So if you if you think about the what, what
can be prefab, the biggest piece of that pie, is what we're already doing.
That's about 20% of the cost of the home, right. It.

[01:09:35] **Audrow Nash:** Is that factoring and labor? Yeah. 20%. Yep. Okay,
so if you remove labor, if you just look at. Oh, but I guess okay, that's the
fair comparison for this okay. So that's 20%. Yeah I guess finishing takes a lot
of it. Like the finished it parts or I.

[01:09:50] **Barrett Ames:** It's I don't know. So like a roughly 20% of it is
lumber. Sorry framing. And then the next two biggest chunks are actually
plumbing and electrical. And yeah. And so we have, we have the ability to help
them a lot there. In that we can rule, plumbing and electrical.

[01:10:14] **Audrow Nash:** Oh, I like that a lot.

[01:10:16] **Barrett Ames:** We can save a lot on on copper. Copper is
expensive. And then actually plumbing in electrical are the number one causes
for framing failures, when it comes to inspection, because when you're, when
you're if you're drilling a hole through two by four to run a, pipe, the hole
saw, if it walks a little bit one way or the other,

[01:10:37] **Audrow Nash:** Kinda compromises the integrity of the structure.

[01:10:39] **Barrett Ames:** Right. Right. And so being able to a root it and B
cut the holes very precisely makes their job easier. And then you know, there I
think there is kind of an interesting, I don't know, 18 to 24 month problem of
like do we start to wire it in in the warehouse. Right.

[01:11:01] **Audrow Nash:** Like that would be so great.

[01:11:02] **Barrett Ames:** And there there's, there's some interesting things
there.

[01:11:06] **Audrow Nash:** Sounds really hard. I imagine a lot of hard problems
around it because are deformable, right? Materials. I know they're pretty rigid.
Right. But, still.

[01:11:13] **Barrett Ames:** Right, right. And then that motion planning
problem.

[01:11:17] **Audrow Nash:** Right. That'd be much harder, I bet.

[01:11:18] **Barrett Ames:** Yeah. Right. Right, right. And then, the kind of
like third area that I think is really important, for us is we'll be pushing a
lot on learning from demonstration, because, as you expand into more and more of
the house, things get, more fabric, like, or more squishy, and there's a ton of
experience locked in craftsmen. That if we can get them to demonstrate it, we
can get the robots to do it.

[01:11:50] **Audrow Nash:** Oh, that's really cool. That's a nice long term
perspective, right?

[01:11:54] **Barrett Ames:** Right. So, like, a really early, thing for us to
tackle is, is actually insulation, right? Insulation is this kind of fabric,
right? When it's when it's made from fiberglass. It it feels kind of just like a
big blanket, being able to put that in, it is not a straightforward, like just a
motion.

[01:12:15] **Audrow Nash:** Planning because it's, it's a very difficult
compressible surface. Right. You have to do it just right and not have it
overlap and stuff and whatever else. Right. Okay. Yeah. A lot of cool a lot of
very cool, problems and a lot of high potential use cases that sound like they
leverage what you already have pretty. Well. Yeah.

[01:12:38] **Barrett Ames:** Yeah, yeah. I think one of, one of the, the key
things for us is that by tackling framing first and doing that in a warehouse,
we really set ourselves up because everything else builds off of framing. Yeah.
Right. And so we so we can leave ourselves kind of crooked cookie crumbs where,
where necessary to help future problems.

[01:13:01] **Audrow Nash:** Yeah. Super cool I would say like the super low
hanging fruit to me that adds a lot of value is just cutting those holes for
pipes and wires. Yeah. Right. As you're doing it that's like I can't imagine
that's that much harder because you could just drill it while you're, you grab
the piece of wood you want, you drill the hole through it. Yeah. And then you go
place it where you want that holes there now. Yeah. That that to me seems super,
super exciting. And then all the other things are very, very cool. As you guys
grow as a company. Yep.

[01:13:30] **Barrett Ames:** Yep. Yeah. Though the holes are like our number one
requested feature right now. We don't get a lot of requests from from, the job
site. They tend to usually just say everything's great. But that that's one,
that's one that that we've gotten.

[01:13:47] **Audrow Nash:** Oh, yeah. Okay. Very cool. So tell me a bit more
about the construction space in general. Because a lot of people I did a poll on
X a while ago, and like, it was bonkers. It was like 90% of people that are in
the audience are interested in starting a robotics company at some point, and
like, 25% already had or something like bonkers. Yep. So tell me about the
construction space. From the perspective of an entrepreneur, what are like low
hanging fruit? Lots of opportunity. Yeah, yeah. How do you think of it? Yeah,
it's an exciting space. And I don't know too many robotics startups that are
going in. And I think there's a lot of low hanging fruit. Probably. Yes, but
what do you think? Yeah.

## [01:14:35] Construction Opportunities

[01:14:35] **Barrett Ames:** The way that I think about it is threefold. And it,
it really ties into like, well, why is it awesome to work at BotBuilt every day.
A that for, for me as a CTO there are, there are there's an endless number of
problems right. Like and for me that's really exciting. For some people that's
overwhelming. Super fun. But like, you know, I'll solve this problem there will
be another one. Yeah. And it's because for the last 70 or 80 years, there's been
basically no innovation in construction. So you're 100% right. There's a ton of
low hanging fruit. Where where strides have been made that they're typically
made in high end commercial where when you fail, failure means losses in the
hundreds of millions of dollars. We haven't seen a lot of innovation in homes.
Because if your home goes up in, you know, ten, $15,000 in price or whatever
your mortgage goes up by, you know, ten, 15 to 50 bucks a month or something
like that. Right? And so you don't really like the kind of American consumer has
been boiled like a frog, as the prices keep going up, because there's not really
anything pushing it down. So the result is that the US is short homes, about
tons, four and a half to 5 million homes. And we're not building them fast
enough to catch up. That problem is getting worse.

[01:16:06] **Audrow Nash:** I wonder, I wonder how you work with, baby boomers
moving into retirement. Yeah. For everything. And if they'll move into, like,
condos and free up their homes or pass away and free up their homes or things
like this. But yeah, there's a huge home shortage and so many people are just
moving into apartments. Right. Which is really interesting. And like if you live
in a many big cities, it's just absolutely prohibitive to buy a home, right, for
this kind of thing. So you're taking a bite out of that huge problem? Well, I
guess the four and a half to four or 4 to 5 million. Yeah. Is that does that
count people that are in apartments or is that just how do they get that number?
I don't know if you know.

[01:16:47] **Barrett Ames:** Yeah, I there's like 3 or 4 different people that
that work on this problem. We know Stephen Kim who's economist at Evercore, if I
remember correctly, he's just down the road here in Raleigh. Cool. And there's a
bunch of ways that they get at this number. And I don't remember any of them off
the top of my head.

[01:17:09] **Audrow Nash:** So that's okay.

[01:17:11] **Barrett Ames:** But the.

[01:17:12] **Audrow Nash:** Cool it's a huge growth.

[01:17:13] **Barrett Ames:** Rate. The cool thing is that he he actually
releases a report every year on the state of housing, and just looks at, oh,
that's also like latent demand, all sorts of, you know, various technical
aspects. He's doing it from, like, an investor standpoint. Yeah.

[01:17:31] **Audrow Nash:** And so with this huge shortage of homes that pushes
up the price of all the other homes, making it even harder for people to buy
homes, right then, so you guys are trying to increase supply? Yep. Which will
make it so that costs come down. More people can be in homes, right? I really
like the mission. I think like I've been a homeowner now for almost three years
and it is glorious. I absolutely love it. Like the best thing is sitting in the
backyard, right. And everything. Yeah. And but, it's a yeah. Go ahead.

[01:18:02] **Barrett Ames:** It's actually pretty interesting because, I bring
this up because not a lot of people believe this. More supply will drop the
price down. And, and and there there's a number of people who don't believe
this, but, Austin is a great example of a city that I.

[01:18:19] **Audrow Nash:** Was going to say if you didn't.

[01:18:20] **Barrett Ames:** Yeah, that that has massively increased its housing
supply and has seen, rents and mortgages drop, by 15%.

[01:18:31] **Audrow Nash:** Totally. Yeah. We bought a house right around that
time, and we're in San Antonio and it went through San Antonio is like an hour
away from Austin. We saw the same thing. And then it's just amazing. It's like
market forces working because you see the prices go rise up because they can't
build as fast as the demand is growing, because everyone has the internet and
everyone decided to move there all at the same time. Right. And then, they build
and build and build and then years later, it's like the demand or the, the, the
demand matches the supply. And then you see prices come right back in line.

[01:19:04] **Barrett Ames:** And it was just remarkable.

[01:19:05] **Audrow Nash:** Yeah. Like I oh wonderful I absolutely love that.

[01:19:08] **Barrett Ames:** Yeah. So so there's, there's, you know big
technical problems. There's a big societal problem. Right. Like if we don't
solve the housing problem there's going to be a lot of unrest. Right. Like
people that the American dream kind of really, really affects how a lot of
people think about whether or not they're successful in life. Right. And so you
could have this big societal unrest if, if you have a whole generation that
can't get into get into homes, totally. And then the the last bit is it's a
massive market, right? Like it's $1.7 trillion in the US. And I want to drive a
fancy car and have a nice house. So you, like, you put all of those together?

[01:19:51] **Audrow Nash:** I think it's forces aligned.

[01:19:52] **Barrett Ames:** I think it's a great place to build a robotics
company. And there's so much, so much to do. I would love to have more friends
come and build and construction.

[01:20:04] **Audrow Nash:** Hell, yeah. Yeah, that would be awesome. Oh. One
thought with the you mentioned unrest from lack of housing. Yeah. One other
thing is that if people don't have houses, houses, or like space, it's harder to
have kids because you guys are all on top of each other. And, like, we need a
big replacement generation coming up. Yeah, for this kind of thing. Yeah. To
just keep life going and make it so we have a good, strong consumption economy,
right? Yeah. 30 years from now. Yeah. Or this kind of thing. Yeah. Because a lot
of advanced societies, you see, they just move, industrialize and then they stop
having kids and the birthrate plummets like a lot of Europe. Right? So.

[01:20:40] **Barrett Ames:** Right. Right. Yeah. Yeah. When we when we moved to
Durham, we, we had, a tiny little two bedroom, two bath, got four kids. Now, I
now have a four bed, four bath. Definitely need lots of space for kids. Can
confirm.

[01:20:55] **Audrow Nash:** Oh, totally can confirm. Yeah, yeah. That's great.
Let's see. So tell me about North Carolina because I don't know too many. Like.
So I lived in Charlotte for a while. I really loved it. But tell me a bit about
Charlotte or, North Carolina as a place for you guys as a robotics company.
Yeah. And being in the southeast in general.

[01:21:21] **Barrett Ames:** Yeah. The as a robotics company, where we're
located is actually, I think deeply underappreciated. The they call it the
Research Triangle. Right. Basically, Durham is Chapel Hill and Raleigh, in that
triangle, we actually have the second highest number of computer science
pitches. We're only be by the Bay area. Oh. And like, people are like, no, that
can't be true. That is that. But RedHat, IBM, Cisco, Lenovo, Epic Games, there's
all that's a whole bunch of smaller companies, that have spun out of that. And
then there's, there's a bunch of biotech. And so we see.

[01:22:04] **Audrow Nash:** Oh, yeah, that's what the area is known for, right.

[01:22:06] **Barrett Ames:** For sure. Right. But we also see a lot of surgical
robots because of that as well. And then you add Duke and NC state. I have
wonderful, engineering programs. I went to Duke for my PhD, so, like, I guess
I'll begrudgingly say uncW is also a good school. We actually just made our
first UMC hire, and he is absolutely crushing it. So. Hell, yeah. It's it's it's
great to, to be in kind of this, this area where, I can have, a big house, lots
of kids, and start a robotics company. And, you know, like, that's all very
affordable, right? Like it's not, I'm not I'm not getting crushed by rent in San
Francisco. Yeah.

[01:22:56] **Audrow Nash:** Yeah. It's crazy. My my house when we bought in,
like, the housing peak when everyone was doing it, the mortgage on my house is
the same as my studio apartment in San Francisco. Yeah, just before moving here.
Right. And that price has increased since that was, like, Covid discount for
this kind of thing. Yeah. So bonkers.

[01:23:15] **Barrett Ames:** Right. And then the the southeast as a whole.
That's right. Like the Sunbelt, is growing and everybody's building houses down
here. So it's a wonderful place for a construction robotics company. And then
there's just this really weird happenstance, where Durham, where we're located,
has become kind of a construction tech hub. There are two other two other
construction tech companies, both doing really cool things. Planted, is down the
road. They're building, plywood sheets, from grass. And the cool thing there is
that it? It's, a very.

[01:23:50] **Audrow Nash:** Don't know what that means at all.

## [01:23:51] Lessons Learned

[01:23:51] **Barrett Ames:** It's like a very particular type of grass, but what
it what it boils down to is it's not as, susceptible to mold growth, that it's a
it's a couple of space guys that rolled out of space and decided to build up, a
create a greener, safer, cheaper, building material. And then hammock is, is
also down the road and they're doing like, they want to make it. So that way you
can design your, your dream home from your house. Right. Like, it's just,
building out kind of the video game aspect of, like, designing your house. So
cool. The the three of us, you know, we it's it's been really cool to just be
surrounded by other people who are. We're thinking about how to change
construction.

[01:24:40] **Audrow Nash:** Hell, yeah. And also makers and doing the good
problems and everything. Yeah. That's great. Yep. Hell, yeah. What do you. So if
you had to start over or, say, advice to a young founder, what do you think?
Like what would be some really good things to communicate to a younger you.

[01:25:02] **Barrett Ames:** Yeah. Yeah. Younger me or earlier. Yeah. Yeah,
yeah, yeah. I think, like, we came to the, teleoperation driven development,
part way iteratively. Yeah. And I like that would be the biggest thing is, is
start with that as your, your formative paradigm. And then, honestly, like, just
don't talk to SAS investors. You're just wasting your time, right? Like, a lot
of them. A lot of them will totally. Just like they'll say they're cool and
they're like, oh yeah, we do hard tech, right? Like that's a cool thing to say.
But like, if they haven't made robotics investment, like, just don't expect them
to, right. And then, I would, I would also like update. KVK right. So like we
have a lot of, we have a lot of strategic that have helped us. What is CV. Oh
sorry. What is a corporate venture capital? Oh yeah. Totally. And and at least
in construction, it's been it's been massive for really understanding more of
the nuance of, of all the, the particulars in this field.

[01:26:22] **Audrow Nash:** Totally. And you're finding good partners and
they're opening up a lot of doors, I expect. Yeah.

[01:26:27] **Barrett Ames:** Yeah. So that those are kind of the, the big areas
that I would think about, it's, and, and the last thing, the last thing I'll
say, founder market fit is ridiculously important. And maybe, maybe it's just,
under underappreciated from my perspective. But I don't hear a lot of people
talking about it anymore.

[01:26:51] **Audrow Nash:** What is it? Yeah. What do you mean, cylinder market?
Yeah.

[01:26:53] **Barrett Ames:** So, like, if it's like.

[01:26:55] **Audrow Nash:** Finding markets, it.

[01:26:56] **Barrett Ames:** No no no no no. Like like, you as a founder, do you
fit with the market that you're trying to sell into?

[01:27:05] **Audrow Nash:** And so I, I don't hear this about ever basically.
Yeah. So that that's a great point. Okay. Yeah.

[01:27:10] **Barrett Ames:** Tell me more. Yeah. So like the, the idea but one,
one way that has been described by outsiders is that we're white collar workers,
with a blue collar attitude. Right. And, and so that lets us engage in
construction. Right. Like this is probably the longest I've gone without
cursing, for several days. Right. And you didn't have to do that. All right, I
know, I know, but, like, I don't know, the kids, my watch. So.

[01:27:45] **Audrow Nash:** Yeah. So funny.

[01:27:47] **Barrett Ames:** But, like, you know, there's there's superficial
stuff like that, but there's also like, like, do you share values with your
customers? Right. And if you don't, maybe you don't want them as customers.
Right? Because it can be really hard for you to have any kind of customer
empathy. If you're not like if there's not some kind of value alignment there.

[01:28:14] **Audrow Nash:** How would you know about that? I guess looking at
your values. But I do think it's also very easy to delude yourself into
something that seems to be lucrative, where you're like, oh, I could be
interested in that, or I'm sure I'm interested in this altruistic purpose. Even
though it doesn't align with who you are and what you're actually interested in.
Like, how would you find that? Because that seems like, a good introspective.
Yeah. Challenge that, I think a lot of people will struggle with.

[01:28:44] **Barrett Ames:** Yeah, that's a good question. I mean, I it's just
what I gravitate towards, right. And so, like, I enjoy hanging out with
construction people. So, that's kind of how.

[01:29:05] **Audrow Nash:** How I the simple answer that I think is kind of it.

[01:29:07] **Barrett Ames:** Right. Yeah. Yeah. Like, you know, it's it's just,
Yeah. There, there, there's just something about the, the market that you want
to go into that you find interesting or fascinating, because at the end of the
day, like, it's going to be deeply frustrating, right? Like, totally there there
are so many things that are going to go wrong and so many people that, that, you
know, that, that I'll butt heads with. Brant, our CEO is amazing at being
friends with everyone. And so like, for, as a founder, like, you just have to,
like, what's going to get you through whatever that frustration is.

[01:29:55] **Audrow Nash:** Okay. I like that a lot. I have not heard about
founder Market Fit. I think that's a really good idea to pick customer or pick
some group to work with that you really like anyways. Because yeah, I say you,
you hate the values of one group like you find it's silly or something, right.
And go and try to work with them. And now it's like your startup's going to take
ten years. And so now you're interfacing with this group the whole time. It's a
really easy way to get burned out, right. And not do a good job. Whereas if you
like, really like the values of them, then you're going to enjoy hanging out
with them. You're going to enjoy trying to understand their problems. And, you
guys will probably both be more open to working with each other. Like they'll
try your thing and they'll let you in on good feedback and not sabotage your
device or something like this, which might occur. Right? If they really dislike.
Right?

[01:30:47] **Barrett Ames:** Yeah, 100%.

[01:30:50] **Audrow Nash:** Hell yeah. So looking forward, I know that it's
hard. And you pointed to three things that look really exciting. In the future,
a botbuilt, but like, say, 2 to 4 years from now, where do you expect you guys
will be? Yeah.

[01:31:07] **Barrett Ames:** We'll be on site 100% like. All right. Oh, yeah. I,
I think for us to capture ever more value and to provide ever more value, we
have to get out of the warehouse. And we like very specifically chose to begin
in the warehouse because I knew just enough about lumber to know that, like, it
was going to be painful to learn how to do it. And I wanted to do that in a
controlled environment. But to really make an impact, to, to fundamentally
change, how construction is, we need to get onto the job site.

[01:31:47] **Audrow Nash:** That's awesome. Hell, yeah. Any thoughts with, like,
size of the company, number of houses deployed? And these can be like, because
obviously none of us know the future. But like, your current rate of growth,
growth seems amazing. And I suppose if a fraction of that is capped over the
years, it will be quite impressive where you guys get. But, looking out in the
future, any ideas around that?

[01:32:13] **Barrett Ames:** Yeah. So right now we have, three robot teams, that
are producing all of our houses. The robot team is just a pair of industrial
arms that work together. I think in three years, we'll have call it 150 to 200
teams.

[01:32:32] **Audrow Nash:** Holy cow, that'd be amazing.

[01:32:34] **Barrett Ames:** And we'll we'll have deployed with a whole bunch of
franchise partners, right? Like, we can't we can't own the US just by ourselves.
Particularly in construction, where, so much of the sales is like, well, my dad
knew his dad, right? But it's a very relationship based business. But we can
make them more efficient, and let them focus on what they like doing, which is
sell me. And so, we're actually doing our first deployment, this this summer to
Florida.

[01:33:06] **Audrow Nash:** Oh, so out of North Carolina, you're saying? Yeah.

[01:33:08] **Barrett Ames:** So we'll have a bunch of teams set up, down in
Florida. And that'll that'll be kind of, the beginning of this franchise
opportunity.

[01:33:20] **Audrow Nash:** Hell, yeah. And the start of, like, remote scaling,
which is its own hard problem. Right. And that will be amazing because. Yeah,
once you nail that, then you can go everywhere, right? Come to Texas, go
everywhere else. Right?

[01:33:32] **Barrett Ames:** Right.

## [01:33:32] Final Thoughts

[01:33:32] **Audrow Nash:** Hell, yeah. Okay. Wrapping up, what do you hope our
watchers and listeners take away from this interview?

[01:33:42] **Barrett Ames:** You know, I, I think there's two things. One is
that, the future of construction is automated. And second, that, working on
robots that work in construction, it is a really interesting problem, that can
help a lot of people, right? Like you can you can do really good things for
people and work on really interesting technical problems.

[01:34:12] **Audrow Nash:** Yeah. I think it's a super exciting space. All
right. Hell yeah. Thank you Barrett. Yeah.

[01:34:16] **Barrett Ames:** Thank you. Great to be here.

[01:34:19] **Audrow Nash:** All right. Bye everyone.
