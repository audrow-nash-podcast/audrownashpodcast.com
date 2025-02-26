## [00:00:00] Start

[00:00:00] **Audrow Nash:** Hi everyone, Audrow here. This is collection of live
interviews that I did at a local robotics event between Austin and San Antonio
Texas. I talk with Kyle Morgenstein, a PhD student, working on making legged
robots safe (aka not destroying everything) in human environments David Venegas,
whos the Head of Operations at Durin, on automating tasks in mining discovery
and finally, I talk with Barrett Ames, whos a co-founder of Botbuilt, about
their robots in construction. I think you'll like this interview for a range of
robotics perspectives from legs to mining and research to startups. I wish I
could say more about the group hosting this event. They're currently in stealth,
kind of like a speakeasy, that is it's an open secret. Hopefully, I'll be able
to share more in the near future. What I can say is that I think what they're
doing is incredibly exciting and audacious. And I think and hope that it will be
a major accelerator for the robotics community. If you're curious, they're
having a big event March 8th in between San Antonio and Austin Texas. It's free,
but you need to apply to get in. If you're someone in hardtech, you'll fit right
in. I'll put the event link in the episode notes. Alright, with that, I hope you
enjoy the interviews. Kyle, would you introduce yourself?

## [00:01:24] Kyle: Legged Robot Safety

[00:01:24] **Kyle Morgenstein:** Hi everybody. I think I've met about half of
you. I excited to meet the rest of you. After this. And also a huge thank you to
Ethan, for putting this on super cool event, thrilled to be here. I'm currently
a fifth year PhD student at UT Austin. I've done a bunch of stuff in legged
robotics. Humanoids. Quadrupeds, mostly with reinforcement learning. Some model
based control as well. I spent the last year at the Boston Dynamics AI Institute
helping get them off the ground for a lot of their RL work. Before that, I was a
NASA JPL. Like I mentioned before, I was a geologist originally by training,
looking for queens. Yeah. Know that that's not a joke. I mostly undergrad, as in
geology. Most of all, my undergrad research was, evidence of life on Mars. So
the Mars Perseverance rover got into JPL doing that stuff there for three years.
And then the robots we have only have wheels. Couldn't get to a lot of the cool
rock outcrops down cave, stuff like that. So that's like on two legged robots.
And so I've been sort of doing that ever since.

[00:02:16] **Audrow Nash:** That is awesome. So tell me what you're doing in
your PhD. Like what's the focus? What good questions are you investigating?

[00:02:22] **Kyle Morgenstein:** Yeah. So I think the common theme for my PhD
thus far has been about putting these legged robots in human environments, as
sort of the main promise for a humanoid robot. It's shaped like us, has our
morphology. So we're going to put it in things like our homes and medical space
and stuff like that. And so the big algorithmic problem that I see, at least
that we aren't paying off attention to safety. What does it mean to have these
robots interacting with us, touching us, bumping into us, things like that? We
know how to control them generally. There's still a lot of engineering
challenges to go there, but there's a lot more work to do to make them safe and
sociable and things like that.

[00:02:53] **Audrow Nash:** Yeah, so I've seen like on X, a ton of videos,
quadrupeds and humanoid robots being very sophisticated. Sounds like back
flipping over stuff and running on all sorts of surfaces. Tell me about that.
From a safety perspective and why that doesn't why mobility isn't quite solved.

[00:03:08] **Kyle Morgenstein:** Yeah. What's safety? I think they're really
impressive demos. They're showing sort of the limits of the hardware and the
capabilities that the platforms can obtain. But not one of those videos. Do they
show a person? There's no people near that robot. And having worked with a lot
of the unit robots, I would say that those motors are likely fried after a lot
of those demos, and the robot drives down the mountain at a single purpose demo.
And so if you want these things to be doing work in human spaces repeatedly,
reliably, safely, it's not just, can I do a backflip? It's can I hand you an
apple and not fall over and break my own arm or yours when I do? These are big
metal robots are not light, at the moment at least. And so I think there's yeah,
a lot of open questions there that just again, we're showing off these very
flashy demos that are remarkable that that progress we've made. But there really
hasn't been a concerted effort towards human environments. Yeah. Okay.

## [00:03:55] Improving Robot Safety for Humans

[00:03:55] **Audrow Nash:** So when you want to make a robot better for safe for
human environments, how do we start approaching that. How do we make it safe.
What ideas of safe do we have.

[00:04:05] **Kyle Morgenstein:** Yeah totally. So there's a couple different
answers to that question. The first is hardware driven. And so the when you make
contact with the robot is a kind of reflected load mass, the reflected load
inertia. And this is the weight you feel at the end effector. And so
mechanically you can build robots that can dissipate the energy in some way,
some compliant mechanisms and soft robotics, things like that. There's a lot of
work that's been done in this for many, many years that there's still lots of
progress being made, even like SOP, 3D printing. Do these things very
efficiently. But then on the control side, it's very, very different. We'd like
to embed these sort of same ideas of compliance into a controller, like an
impedance based controller. And so the question is do you want that intelligence
to come from the mechanical structure or the controller or some combination. So
a lot of my work is then more on the control side. I take this big metal robot.
It doesn't have safety baked into it. How can I make it safe enough while we
wait for the soft robotics, the sort of safer mechanisms to be embedded as well?

[00:04:57] **Audrow Nash:** And that just seems like a good approach to me,
where you can make it better by the hardware, but you can do a lot of it with
software outside, because you can use existing robots, but also it's going to be
a lot better to control if you can do it just with a robot. That's hard. So how
do you how do you go about this? How do you go about making it. You say for like
how are you thinking of it.

[00:05:20] **Kyle Morgenstein:** Sure. So the, the, the way this has been done
thus far is if you have some let's say I don't want to apply more than 50
newtons of contact for. So I have some model for that contact. Then in a model
based controller I can make that a constraint, whether a hard constraint or a
soft constraint. I embed that into my control approach, that the robot cannot
find a solution that creates more force than whatever I call my safety
threshold. And this works fine when you're doing things like picking up a block
where I can model that as just a perfect cube. It's a rigid body. Everything's
great when we're talking about people. I'm not a rigid body at all. I'm quite
soft, actually. And so all of our models of contact don't work here. As soon as
that's robust to any shape, any size, different material properties, etc.. And
that's where learning really comes into the picture that in simulation or with
demonstrations, you can try out of a wide variety of different, you know,
objects and interactions and try and teach the robot that I use reinforcement.
So through this trial and error to achieve your goals. But it's not a hard
constraint. The way that model based controllers have historically data and
things like the manipulation space of a lot of the industrial arms that we see.

[00:06:21] **Audrow Nash:** Tell me. So I'm not 100% sure if everyone's familiar
with like the idea of reinforcement learning is you tell me what it is like.
What's the setup , and then how you're using that in a context to learn safe
movement paths.

[00:06:34] **Kyle Morgenstein:** So at its core reinforcement learning is about
trial and error. So your robot tries a thing and then you buy some reward model
that you this a yes robot. That's very good. Here is your slice of cake or that
was terrible. Crack the whip. And so it's it's learning through this you know
positive and negative reinforcement what actions it should take. And so it's a
very flexible framework because as opposed to having to write down a
mathematical objective function that my robot must just do this one thing, you
can give it lots of different factors. I want it to do all of these different
things, and then it's going to learn the these behaviors through the reward. So
maybe sometimes on Tuesdays you should go to this classroom. On Wednesdays on
this classroom, as long as the robot knows you know what day it is, you can
reward it each way. If you don't have to tell it explicitly, it is Wednesday, so
go here. It's a flow statement as opposed to with a reward model. I can say, oh,
I want you to go here. I want you to go here. You know, depending on all these
factors, the robot's able to observe. And just to that trial and error, they're
always able to pick up on it and what it ought to do.

## [00:07:25] Humanoid Robots: Progress & Future

[00:07:25] **Audrow Nash:** Okay. How is this working like, or what kind of
results have you got so far? And like, how is the state of the field in general?
Like, are we going to see, humanoid robots walking around in our homes next
year?

[00:07:38] **Kyle Morgenstein:** I don't know. Well, our homes maybe you and I
is home to general people. I don't think it's quite that far along yet, but we
are getting there. We've been able to do locomotion very effectively. The main
way this is leveraged in robotics research is that as opposed to having a
physical robot that does these things, you buy to try it on the real hardware,
that could break or be inaccurate or whatever we tried in simulation, we can
have, you know, tens of thousands of robots at the same time trying these
different things. We take that control policy we learned in simulation, and then
we put it on our real robot. And we're currently starting to see our robots walk
very, very robustly. They walk like people were able to do a little bit better
than if you've seen some of the older robot locomotion videos. They look very
constipated. It's a very low center of mass. And it came from an algorithm,
called zero Moment Point from maybe 20 years ago. We started to be able to
overcome that, to do more natural looking walks that are very stable to
disturbances and plushies, things like that. So we're getting there. But I think
getting the robots safe enough that we can reliably put it in your home without
worry, don't be hit with a huge lawsuit next year. We're not quite at that point
yet. We're getting there, but it's going to be more than a year, I would say.

[00:08:38] **Audrow Nash:** What would the timeline like? What would your
optimistic and and pessimistic, mind? Would you guess?

[00:08:43] **Kyle Morgenstein:** I think optimistic would be like five ish
years, I think. Will you be able to buy one to put in your home if you've got
the money for it? Yeah, within maybe two years. I, I think even now the Chinese
companies will sell you one. Yeah. You know, you've got to do all of it on your
own. Now. You can buy them today. But in terms of, like, it being stable enough
that you could see it as a product that is being marketed for something useful
that isn't just a novelty or a toy. I think five years is pretty reasonable. To,
to do, you know, very basic things. Right? It's not like I buy this thing. It's
my at home, but I can do everything. We're not at that point. That's maybe more
like a ten year stretch goal type thing, but safe enough to put in your home.
I'd like to see five years. Something like that.

[00:09:19] **Audrow Nash:** That'd be awesome. Yeah. So you brought a robot. Do
you want to do a small demo?

[00:09:23] **Kyle Morgenstein:** I'll have it set up right the second. But after
this talk. Yeah, that definitely we can, I brought, one of the Unitree go ones.
It's a little quadruped robot. So if people want to take a turn trying it out
later, I know. Please come and see me. I'd love to, to show that around. Yeah.

[00:09:37] **Audrow Nash:** Oh, yeah. So we'll open up the Q&A in just a little
bit. But you said one thing that cracked me up is single purpose demos. Tell me
about that, because that's hilarious. Because you assume, like, you see the
video of the robot with that, like the quadruped with the wheels skidding down a
snowy hill or something like that. And it's like, oh my God, they're amazing.
Some, some post on X was like, how would you outrun one of these?

[00:10:00] **Kyle Morgenstein:** If you could run long enough, you could, not
just from a barrier perspective, but the they're these robots are very fried.
Yeah. They're, they're they're fairly fragile. They, they degrade pretty
quickly. So when we do a lot of our experiments, we do a lot of multi-robot
stuff. So you want to do some kind of search task? You want a bunch of different
robots searching through, you know, let's say you're doing some fire rescue type
stuff. We only could do our experiments at night during the summers because that
robots overheats. And so it's even in 20, 30 minutes, it doesn't work anymore.
Even though this is like a sold product using the base controller that it ships
with, after 20 minutes, it overheats. And so it's they're not super reliable
yet. They work well for the first couple months. You own it. But that
performance, you know, sharply degrades.

## [00:10:39] Boston Dynamics vs. Unitree

[00:10:39] **Audrow Nash:** That's so interesting. So and then you mentioned at
the beginning so you've been that Boston Dynamics. How do you compare Boston
Dynamics which is probably a good bit pricier versus Unitree which you can buy
those things and throw them away.

[00:10:52] **Kyle Morgenstein:** Yeah. So when I say it is Boston Dynamics AI
Institute I think they've rebranded as robotics an AI Institute they can't
figure out their name quite yet. But it's a separate company. Although both
owned by Hyundai. I'll say the difference between the Boston Dynamics spot, for
example, versus the Unitree, so, first for price comparison, the cheapest model
of this is about $1,600. The Boston Dynamics starts at 70,000 that goes up to
about 250,000. The difference that was made, I think it's the difference between
buying a, tricycle for your toddler versus a Porsche for yourself. What the
Boston Dynamics robot, the code I put on it works the first time. Every time.
Really, really phenomenal. They've done all the system identification. I know
that if I ask for 30 Newton meters of torque, I am getting 30 Newton meters. For
that I’m just praying, and I hope that I get it. I usually not the first time I
turned it on, it jumped two feet in the air and hit its own power switch. I wish
I had a video of it. I it sounds crazy, but it's short circuited and had itself
turned off. So it's it's a great, you know, starting platform. It's it's made it
so that robotics research has become much more accessible. Lads all over the
world. I've been able to get into it because of these platforms. So it's it's
really great in that regard. But it's really hard to compete with these sort of
really expensive, battle hard and not battle in a war sense, but like, they're
very well, engineered to design the Boston Dynamics robots are, that's a they're
very, very robust. They've got a well-documented API in English. And that helps
a lot as well. Yeah.

## [00:12:14] Reward Models for Safer Robots

[00:12:14] **Audrow Nash:** Okay. Hell yeah. Okay. With that. I am happy to open
it up to questions. What questions do you guys have for Kyle? I guess raise your
hand and then I'll repeat what you say. So we get it on the video. But who wants
to be the first person? So reward definition is hard. How do we get safety
especially. How do we do that.

[00:12:41] **Kyle Morgenstein:** Yeah. So there's, I'll give you the answer for
what we've done thus far. Then maybe some of the what we'll do in the future.
Right now, like you said, there's a lot of engineering effort that has to go
into designing these reward models. So the sort of simplest thing you can do at
least a bit of our software, there's multi humans interacting with the robot is
that we assume we have perfect knowledge of all of the contact forces in our
simulator, whether it's soft body, rigid body, whatever. And we, you know, show
that to the robot and we say, great, this is what we think is a reasonable pain
threshold. We give you more reward for being below it, no more penalty for going
above it, and it learns sort of how to act, whether it should get close to a
person versus not even just like a little, little hallway driving robot. It'll
learn if it's able to, see the people's environment. You give it like cameras,
for example. Then it will learn to be very aggressively drive until it sees a
person. It slows down where the if you don't give it camera data, then it's
going to always go at whatever the fastest speed is such that it never would hit
the safety threshold. If it makes contact with somebody because it can't prevent
it, it's sort of only reacting. Those are like the like most naive approach. You
could possibly take what you think is going to happen a lot more is that we're
going to embed priors from the way people acts. We're going to take a lot of
data from things like video sources, maybe from YouTube, from demonstrations,
and we're going to train a reward model based on that. That takes what the robot
has done and make some assessment. This outputs a number. This is good, this is
bad. And we already see this. And how language models are trained. But to bring
that into the loop for robotics I think we'll have some of these more, you know,
less rigid rigidly defines reward models we're taking. What do we generally like
about how people interact. And now can we reward our robot for doing something
that is similar to that distribution without telling it to act exactly the way a
person does? We just wanted to approximate that distribution in some sense
without having to act. If it's not learning from demonstration in the sense that
we're repeating the actions, it's just taking it as sort of a baseline to move
towards. And a reinforcement learning, something like that.

[00:14:33] **Audrow Nash:** Yeah. With this kind of optimization, do you have
like how hard, how hard has it been to go from simulation to physical hardware?
How is that been?

[00:14:42] **Kyle Morgenstein:** Yeah. On Unitree takes about three months and
spot takes about 30 minutes. Like out of the box and works. It's again, the big
difference is about system identification. Knowing that your motors output what
you expect, knowing that your, you know, simulation model matches the real
robot. When you have a model that matches your real robot, it's the easiest
thing in the world when you don't have it. Yeah, it's a nightmare.

## [00:15:05] Foundation Models: Impact on Data & Timelines

[00:15:05] **Audrow Nash:** Yep. Because you're climbing some wrong
distribution.

[00:15:16] **Kyle Morgenstein:** Yeah. Physical intelligence.

[00:15:19] **Audrow Nash:** So what do you think of the foundation model and how
that affects your timeline?

[00:15:24] **Kyle Morgenstein:** Yeah. So I think the, the big concern is about
what data this is. They're doing a learning through demonstration approach. They
have a very large data set that they've collected and they, you know, piece the
robots to full laundry to do the dishes, whatever may be in their data set. And
the big sort of breakthrough for them is that they've got one model that can
view all of these tasks. Most of the demos that you see, both in academia and
industry, have one model trained for each task that they do, and some router to
pick which one they're activating at a time. The big concern I have for that,
their approach, is that it's bound by the data for what they've seen before. So
if my home looks significantly different than anything that they've seen during
training, I have no assumption that their model is going to work in my home. If
it does not generalize, we can only assume interpolation within the data that
they seen before. So you can collect enough data that everybody's home is
represented in the data set, then yeah, that approach should work. The question
is scale. I don't have an internet worth of data to back up here. I only have
whatever they're able to collect. So it's a phenomenal approach when the thing
that you're deploying matches close enough to what you've trained on. But I have
real concern to go to deploy that into people's homes that there's a huge
diversity of what people's homes look like. And I'm not sure we're at the point
where we have enough data to really make that jump.

## [00:16:34] Teleoperation Efficiency

[00:16:34] **Audrow Nash:** Yeah, definitely. There was related, I think it was
the lab that founded it or a similar one. They released a bunch of robots being
tele operated and then doing it, doing many of the tasks autonomously. And the
thing that I thought was so funny is in their videos, they had the robot push
chairs back into the back against a wall, and they highlighted specifically that
the third chair or whatever number was not trained on. So it shows you how
specific is it that they're calling that out as a really big thing that we
didn't we didn't do this chair over here. We just did chairs over here. So it's
kind of spiky. It doesn't work always. Probably. Is teleoperation efficient for
these tasks?

[00:17:29] **Kyle Morgenstein:** Yeah. This is the way the word was sample
efficient. And I want to you explain that first for people in the audience that
might not be familiar with the terminology. So sample efficiency is how
efficient is your algorithm at replicating a behavior per sample that it's
shown. So if I show it one demonstration of the behavior and it can learn it
after just seeing it once, that's a very efficient algorithm. So one of the
downsides for reinforcement learning, the method that I tend to champion is that
they're very, very simple in a fashion. You have to see many, many
demonstrations in simulation before you can use it. The difference is that in
simulation you can generate essentially unlimited data, more or less for free
with Teleoperation, when they even ask about is you have to physically do it. So
it's very, very sample efficient. You can show just a couple of iterations.
Maybe you show it 20 to 50 examples, and it has this sort of standard at the at
the moment in the field, although people are trying to reduce that and then it
works very, very well. So it's quite sample efficient. But it's not time or
energy or money efficient because that's operator hours. You've got to build the
infrastructure, build the hardware, use it to collect that data, maybe clean
that data in some way. So from an algorithmic perspective is incredibly sample
efficient from a deployment perspective. Not sure if it's as efficient as we'd
like it to be yet. But again, as these algorithms require fewer and fewer
demonstrations, if you could show a just one demonstration that it works, then
maybe those economics work out for you.

## [00:18:45] Training Robots Using YouTube Data

[00:18:45] **Audrow Nash:** Oh yeah. One thing that I've heard that I found very
funny also is that, a lot of things that they might want to do in a learning
from demonstration context, they don't work multiple times. Like if you're
talking about assembling furniture, like if you assemble furniture and then
disassemble it like, let's say it's Ikea furniture, like it's eventually all the
holes are going to break and you're going to you're going to end up going
through a whole bunch of new furniture. For a lot of these learn learning from
demonstration tasks. So there are constraints where your stuff actually wears
out, which is hilarious as a difficulty I wouldn't have expected. Okay. Hell,
yeah. How well is working, training off of YouTube data work in real life.

[00:19:36] **Kyle Morgenstein:** For a humanoid robot? Not great. The difference
in the kinematics between, you know, the dimensions of my arm or the robot's
arm, I end up making a fairly big difference there. It can be really helpful for
bootstrapping. So you can use it to start learning. So you've got some general
idea for, oh, I've got these things called arms that I can move kind of like
this. But to get really good performance on a real system, you do want to train
with as close to the true dynamics of your robot as possible. When I mentioned
it earlier, the context of arms I like where there's a lot more promise to that
kind of data, is using it as a reward to encourage the robot to be more like the
person that can juggle. So as opposed to having to figure out how to specify
some reward function explicitly for what juggling is, that's quite hard. But
it's quite easy. The videos I'm juggling and and I show my reward model what my
robot is currently doing, versus the video of someone juggling and say, are
these two things the same? Action? If yes, reward if no penalty. That's where
that kind of data becomes really, really valuable as a reward process, but not
as valuable for training the robot's dynamics itself that you do want to match
pretty closely.

## [00:20:36] David: Mining Basics

[00:20:36] **Audrow Nash:** Cool idea. Yeah, yeah. Using it as basically a way
of labeling data, so that's awesome. Would you introduce yourself, David?

[00:20:49] **David Venegas:** Hi my name is David Venegas I'm head of operations
at Durin, Mining.

[00:20:57] **Audrow Nash:** Tell me about what you guys like., the problem you
guys are trying to solve. And tell me a bit more about the company. What stage
you're at? How many employees?

[00:21:05] **David Venegas:** Yeah, we're small, so pre-seed about five people
right now. And basically mining. A lot of people don't really have any idea how
it works. So maybe give me a quick, like, primer just to understand the basics.
Would be really good. So it is the most important industry, the most fundamental
industry. You have mining, you have energy. That's basically all that we have to
agriculture. Agriculture would be a step above because you need the minerals and
you need the energy to get to that and stuff. So super fundamental, very
fundamental, same core like manufacturing construction only so once thereabout.
So yes, these are the two literally the most important industries. If you want
to see everything else grow and yeah, it's been forgotten. Mining has not been
like it's it's very old industry, Anyway, to break it down in a few different
steps. You start with exploration to really know whether something's worth doing
in an actual development step. And that's billions of dollars. You're building
towns beside it. Running railroads out there like this is a huge operation.

[00:22:12] **Audrow Nash:** So you're saying, like, surveying the area, finding
the material, and then all the logistics of, like, getting energy, getting
railroads, getting all the things.

[00:22:20] **David Venegas:** Yes, definitely going to be the development side.
That's when you know, this is worth doing and you're putting literally billions
of dollars. So much time, so much resources. So that's the development side to
get there. And you have to go through two previous steps. Simplifying this. But
it's exploration and that's finding a needle in a haystack. You're searching the
entire globe. And that needle is buried on the ground. So very difficult. Once
you explore, then it goes to feasibility. That is the biggest bottleneck
permitting it. It's economics. Is it like six kilometers away from a port? is it
600km? Is it this high from ground? Is it is whatever. Like all these details
really, really matter. And it's like, what kind of rock is it? Is this
extractable from like a chemistry standpoint and a feasible way. And there's a
lot like, okay, do we have sources to supply these things? Do we have power or
water, all these things. And these these last 50 plus years.

[00:23:24] **Audrow Nash:** So it's a big investment upfront. And then you might
get along at a time of using it.

[00:23:35] **David Venegas:** Oh, yeah. Yeah, it's a huge thing. So exploration
that is where Durin comes in. That is where we are. I can break down exploration
for you a little bit more as well. This would be necessarily explain why we're
doing what we're doing. Basically you can break it down to prospecting which is
determining okay, like where it is geology. You're like, all right, what is this
rift do, where you're taking soil samples, running planes and helicopters with
gravity sensors, running electrical magnetic sensors, gravity sensors to see
like differences. You're looking for problem. Reality's like something that's
not common because it's kind of interesting. It's almost every single mineral
you have a tiny bit like a five parts per million or whatever, literally
anywhere on Earth. Like right now you have uranium, gold, like basically almost
everywhere. But it's the concentration, right? Is it economically viable? And
these are extremely high. Like like sometimes you're moving an entire ton just
to get like a little tiny, tiny bit. Totally. Depending on the material and
everything. So yeah, all that plays into like what is the grade essentially. So
it's a 2% grade. That means out of, you know, I'm mining 100 of these to get to
units. In the exploration process, you do your geophysics, you do your geology.
But to really know what's down there, to know if it's worth those billions of
dollars, literally billions. You have to drill. So you gotta put a rock, put
holes in the ground to get the rock out. That's all is dome.

[00:25:20] **Audrow Nash:** So you're taking a sample basically you're going and
probing?

[00:25:23] **David Venegas:** Yes. Called core sampling. It's the most expensive
part, upwards of 80%, 85%, oftentimes of the entire exploration process straight
into drilling all the money, all the time.

[00:25:35] **Audrow Nash:** All the like surveying and all of the people
looking. why is it so expensive? I’m imagining like, drilling a well. Is it
offensive? But it’s not that expensive. But maybe this is much harder than that.
Much bigger. You have to probably probe a lot of area.

[00:25:53] **David Venegas:** You’re going About 100 holes by the time, like
anything's even considered. And you're going about a kilometer, two kilometers
deep. It's it depends. You can do like 300m, but generally you're going pretty
deep. You're paying a lot of money. About $300 a meter. It can be as high as a
thousand, sometimes as low as 100. But generally it's within that variance of
like upwards of 300. And the deeper you go, the harder it is, the more materials
you have to use and the longer it takes. So it just keeps everything constant.
Castling. So that. Right. And the biggest issue is emissions that are doing
this. The biggest actual improvement that we've seen. Has been back in 1958
someone called bought one year, invented something called a wireline drill which
instead of literally moving your case piping up every time you wanted to, you're
like three meters of sample and you have to send a wire down, you get to send a
wire down, which is the step change improvement. And now, okay, I just bring
that up and I only trip, which is called tripping when you’re moving all your
pipe up and I can take hours. Just when you need to change a bit or something.

[00:27:00] **Audrow Nash:** So is it like you lift up everything by a wire, for
a little bit, and then you change something down there, and then you let t down
again?

[00:27:07] **David Venegas:** If you knew water well drilling or oil well
drilling you're basically casing. You're putting pipe casing. So it's it's got a
hole in the middle and you're putting a shot down the middle. I'm pronouncing it
incorrectly, but that will go down as the drill, which is it's a tungsten
carbide with industrial diamonds. So it's sort of a diamond core drill,
basically. That'll cut through anything. So it'll keep going, you know, bring
rock up through the middle and you're on that shot. It's waiting. It's got a
spring load thing. Once it hits a certain 1.53. You get a sensor that'll tell
you, hey, the pressure is high and you, you snap it off and you bring it up, and
then you're laying out on a trough. You're now hitting with a hammer to get it
out into a cardboard box, and it's going off to a final stamp for exploration,
so that's the chemistry side of things. I want to know what my grade is at 900m
is it, you know, 2%, is it 1% whatever. And you're using all that information to
go back into the model. It's a cyclical process. It takes years. So how this
actually works is you have a bunch of exploration companies that are they're
called junior exploration companies. These aren't big like conglomerates or
anything. They're aren't like your Rio Tinto's. Your massive companies do have
arms that'll do this. But generally they that's it's really risky. So they push
that all off to these junior exploration companies to jump on to $20 million
market caps and their whole like objective is okay by mineral rights to a
specific piece of land that we think could have whatever mineral we're looking
for. And then they’re contracting out all these services. So the geology, the
drilling, everything. And the whole point is to raise more money to do it again
and again. 80% of that money goes straight into drilling.

## [00:28:58] Automating Mining Tasks

[00:28:58] **Audrow Nash:** Wow.. Okay. So it's hill climbing in a sense,
because they're justifying themselves through getting an elevator. Because it’s
growing growing growing. And then eventually big mine gets put there. So where
do you guys come in?

[00:29:14] **David Venegas:** We build the drills. Oh so the drills like I said
before it's biggest step change has been 1958 when you get a wire going down.
I'm trying to remember this story correctly. But basically there's a there's the
company that like they made a they figure out the the biggest problem and the
biggest injury for their drillers was restrained by moving the pipes. So they
found out by like removing two threads from the screws that were like putting
into the top. 40% improvement. I'm saying that's the biggest changes you're
seeing, like little itty bitty changes. And again, this isn't a satellite. This
is a really complicated robot. It's not a fighter jet which we've built on the
back of napkins in 90 days. Like we're capable of really incredible things.
Yeah, this is it goes like this and it goes down. That's it. He brings up rock.
Okay. Yeah. And it's really expensive. We're building more autonomous versions
of these. So not fully autonomous, not trying to go there. There's, you know,
the 20% that gets you the 80%. So that's the whole point is whatever you can do
to make, it just less humans because, again, safety, that is the whole thing.
Yeah. It's about 50% of all drilling costs in north of that is straight into
labor. And this isn't fun work. It's not a fun job. Yeah, you're you're losing
your fingers, you're inhaling dust, your pounding on rods, 12 hour shifts
constantly. Like, yeah, it's not fun. Very tough. But it is cool. Rocks are
cool. I, I know all geologists love rocks. We all love rocks. I like,
fundamentally like, trucks are sick. When you're a kid, you're too. You're
playing with the truck. But this industry is in a really bad place. It's about
been avoiding, change. It's been avoiding the need to, like, innovate. This is
the way it's always been done. It's old. The average age is 55. Half the
workforce is going to retire by 2029. The boomers, 5% of the workforce is
under 30. So nobody thinks it's cool. Nobody thinks mining is sexy. You know, we
do like it. It's not appealing to anyone. And all the like, smart engineers and
talented people don't want to go up. Don't go out and do this because it
actually isn't like appealing. There's no appeal. And that's a problem. This is
one of the most fundamental, industries in existence.

[00:31:42] **Audrow Nash:** So what is, I don't fully understand where your
improvement is to this sort of automated to a larger extent makes it fewer
people have to do it. You can have younger people that don't want to hammer the
fingers off working.

[00:31:53] **David Venegas:** Yeah. You can have this same person that can run
ten of these sitting in a little box and monitoring them. Okay. This one's going
to okay. I'm like, you hear my water there or whatever. That's a a bit of an
abstraction. But yes, that is like the idea. Yeah. We want monitoring. We don't
want 24 over seven operation because what you have is somebody sitting there
waiting for this thing to be going down. Somebody's sitting in the cage,
literally like listening to how the engine and how the generator goes in and
like, okay, how's it going? Me oh, I know that sound. And they're adjusting the
RPM in the water flow or the torque. That's how it gets sucked. That is why.

[00:32:27] **Audrow Nash:** It's like a person with a CNC. You do the same thing
there. Because they listen to it. So how are you guys improving?

[00:32:41] **David Venegas:** So he goes on in there. But long you has some
drills that do this in some ways, but it's not the closed loop fully. You just
close the loop. The rod handling. Make the rods do like this. Have the pipe, the
dirt come out. That's all you need.

[00:32:58] **Audrow Nash:** Wow. Very simple. Seems very effective. So you guys
are pre-seed you said?

[00:33:03] **David Venegas:** We showed some numbers. You know TechCrunch and
Wall Street Journal want to do an article soon. So new stuff. But 2 million
pre-seed. We'll raise a seed. Q2.

[00:33:20] **Audrow Nash:** Yeah, where are you guys located?

[00:33:21] **David Venegas:** We’re located in LA, Ganado, California. So yeah,
it's a good place.

[00:33:27] **Audrow Nash:** Oh, yeah. What brought you out here? You here just
for this event?

[00:33:30] **David Venegas:** I'm here. Meet people I connections. We're looking
to hire two people. Automations and controls engineer and a robotics engineer.
So people who have these types of skills, that's that's very important. We can
hire those, yesterday. So yesterday, you know. Awesome. All right, again, if
anybody knows, I also might be a little easier. There's a site called
learn.durin.com Recommended Durin is the name. In case I didn't mention that.
Durin and talking reference. Yeah. That'll kind of give you a little bit more to
work with. There's citations and stuff if you're interested. So yeah, I know
we've probably gone pretty far.

## [00:34:09] Access Challenges in Excavation

[00:34:09] **Audrow Nash:** No, it's great. I mean, so this is an industry like
I don't know much about. And so it's nice to get a thorough walkthrough of how
it works.. And it sounds like a valuable thing that you guys are doing. And
it's, it's funny using like the first thing you learn in a robotics education is
like a PID controller, you know, for this kind of thing. And it's wonderful to
apply that kind of technology to things, work and adds a lot of value. Well, so
you can have one person watching ten stations instead of ten people watching ten
station. Yeah, this kind of thing. Yeah. Let's see. So I'd like to open it up
for questions. And I have I want your questions. What questions do we have? Have
you had trouble like getting on the excavation site?

[00:34:57] **David Venegas:** No. Everyone needs this and I know they need it
really bad. Yeah. This is the linchpin in everything. Again, all the cost is
going this direction. It's a culture problem where they can't get the talent.
They don't have the Silicon Valley money or the space talent to make it happen.
We do.

[00:35:14] **Audrow Nash:** Let's see other questions? What do you have so far
and what's the efficiency of it.

[00:35:23] **David Venegas:** Yeah. We're we're putting together we're we
literally hired the engineering team on six weeks ago. So we'll have holes in
the ground February, mid February. Is it going very soon. Iterate on prototypes,
manufacture a lot of these. We're operating them ourselves. That's where you're
going to see real margins. 3 or 7%.

[00:35:47] **Audrow Nash:** It also sounds like it's early. You’ll find out a
lot of this eventually.

[00:35:50] **David Venegas:** We know a lot of this. There's a lot of low
hanging fruit and ridiculous amount of low hanging fruit when it comes to this.
The biggest one, again, is, is humans safety factor, exploration when companies
want to want to increase their safety factor because, start drilling
contractors, which we are the drillers want to increase the safety factor
because they get more jobs, they get better bids from the exploration companies,
because if somebody gets hurt, it's not just the driller who's paying, it's the
exploration company. And it's really expensive. So my dropping safety, you'll
actually get a lot more like not it's actually more important than like
throughput and speed because that'll that'll kill an exploration company if you
get too many safety incidents.

[00:36:29] **Audrow Nash:** And I know also it sounds like so like grocery store
kiosk kind of thing where you have one, checkout person manning ten kiosks that
customers are going to like if you have one person manning ten station. That’s a
big multiplier. That sounds like a very nice thing. Yeah. Let's see maybe one
more question and then we'll move on to our next speaker.

## [00:36:57] Use of Simulation

[00:36:57] **David Venegas:** Do you simulation at all? How do you handle tough
things like friction? Yeah. We will you whatever simulation test stands we need
for for those sorts of things right now building the structure, getting getting
it going. It's not as complicated as you think you're actually in a really
constrained environment. It's you just need to make sure that it's okay. You're
hitting this. Let's let's adjust. Yes. There are like, I'm not sure if I got the
question correct.

[00:37:25] **Audrow Nash:** I mean, that makes sense to me. I would imagine for
your specific use case that just some equations would be what you want to run
everything through and you can optimize within a simple model. Not that you need
like a whole visual simulation and and everything. What do you think?

[00:37:40] **David Venegas:** Yeah. There's multiple things to to to attack. One
of them is the rod handling. So that's robotics. Just move stuff around. Maybe
that's not what we're going to go for long term. You want to build something
custom that's very reliable and the that it can get it. So we are looking
working on that.

[00:37:56] **Audrow Nash:** Oh yeah. Awesome. Barrett, you want to introduce
yourself?

## [00:38:03] Barrett: Construction Robots

[00:38:03] **Barrett Ames:** Yeah, sure. Hey, everybody. My name is Barrett. I'm
a co-founder at Botbulit. Been working on robots for a really long time. When I
was a little kid, I came running downstairs one morning and I said, mom, I just
want to blow shit up. And she said, you're going robot camp. So I've been
building robots since then. I did my undergrad at Cornell. Mechanical
engineering, computer science. After that, I got to work at NASA. Houston, on
Valkyrie, Robonaut, Atlas did that for a while. Decided I should go do, PhD in
my at Duke. Focus on the intersection of artificial intelligence and long term
planning and, like, geometry of robots. Right? So just shove all that together.
We started Bob built four years ago. We build homes with robots. We do that in a
factory. Think prefab components for a home.

[00:38:58] **Audrow Nash:** Oh, yeah. Okay, tell me about the need for that.

[00:39:01] **Barrett Ames:** Yeah, yeah, the need, is a lot like mining, right?
So 40% of contractors are over the age of 50. Framing, rough carpentry. Not
something you do well into your 60s.

[00:39:15] **Audrow Nash:** And when we say framing this to make it totally
clear, that's what. How do you describe that?

[00:39:20] **Barrett Ames:** Yeah, it's just the it's all the structural
elements in a residential in a home. Right. So it's it's all the two by fours
that you stick together. Right now we're focused on the walls. We're also
working on on roof trusses as well. But they're that's kind of anything that
makes it stand.

[00:39:38] **Audrow Nash:** So the idea is you take all these frames and you
kind of put them all up. And that's the good start for a house. They need to do
the roof separately. And you're working on that. So massive labor shortages.
Tell me more.

[00:39:49] **Barrett Ames:** Yeah. So it's, the big, big labor win. Is that
right now, when you frame a home, it takes about 14 to 21 days for a crew on the
jobsite to do it. When they use boat build panels, it let some stand up a home
in 4 to 8 hours so that’s massive labor win there, and we effectively move it to
the robots and we move it off of the jobsite.

[00:40:14] **Audrow Nash:** So how does that work? So you say you move it off
the jobsite?

[00:40:17] **Barrett Ames:** Yeah. Yeah.

[00:40:18] **Audrow Nash:** How do you. So I'm imagining like a big frame for
the side of a house. How do you ship that.?

[00:40:22] **Barrett Ames:** Yeah, it's actually pretty easy. Most, most
ceilings are like 9 to 10ft, so you can you can build a 9 or 10ft wall, stick it
on the back of a truck and ship it. And then we bad. Yeah. We just flatpack
everything. So the the crew on site stands it up. We're not doing, like, big
modular stuff.

[00:40:41] **Audrow Nash:** Okay. And so one thing that I have heard has been
tough for a lot of construction robotics companies is it's like there's a
balance between cookie cutter homes that are all the exact same and some sort of
custom home. How where do you fall in this?

[00:40:57] **Barrett Ames:** Yeah, we go of full custom. So you give us a floor
plan and we will build your house. We've done 25 homes so far, and 22 of them
are different homes. You just bring your floor plan, whatever it is. Like if
it's got dimensions on it and the lines are straight ish. Will work on it. Okay.
And that's that's like a massive differentiation, between us and everyone else
who's tried to do this in the past.

## [00:41:27] Custom Home Focus

[00:41:27] **Audrow Nash:** Why have other people not or other companies not
taken this approach? It's it seems like the ideal like I, I if I was naively to
think a company should make frames. I would think you just make it custom as
you're going. And that would be what customers want. And you're just basically
replacing the labor that builds the frame. But I imagine there's some thorny
problems on the way there.

[00:41:50] **Barrett Ames:** It is a huge pain in the ass. And it's for a bunch
of different reasons. First and foremost, we all look at floor plans, and as
engineers, we go. That's a technical document. It is not right like it is. One
of the floor plans that we recently processed, didn't actually form a closed
polygon. So there are gaps in this house. So we called up the architect, and we
said, what's what's going on with this? Like your house is doesn't house, right?
And the response was, well, I don't like fractions, so I just rounded them out.
But didn't change anything. Right? So it's not really a technical document. It's
mostly like design intent. Right. And so starting with that is your framework.
You have to go and build like this whole generative approach that understands a
deeper level. Like, yes, we want all of these constraints to be correct. These
other constraints we don't care about so much. So if you need to violate one of
those, go ahead and violate one of those.

## [00:43:06] Botbuilt’s Approach

[00:43:06] **Audrow Nash:** That is interesting. So tell me about the generative
approach. It sounds like you probably need a way of taking what they give you,
which maybe in a lot of forms what the builders or whoever give you or the
architects. And then you turn that into something that is very specific so
robots can build it.. Tell me about that whole process.

[00:43:25] **Barrett Ames:** Yeah. It's, basically comes in, we have this PDF,
right? We have to extract all the information that is basically, door locations,
window locations, dimensions of walls. And in many cases, those constraints will
be conflicting. And so we have to say, what's the, what's the intent here?
Right. And so what we did is we just took we have one point 7,000,000ft² of
plans that we process and shoved into this. And that lets us pull out kind of an
intent because that's what framers do, right? They work with craptastic plans
every single day. And what they do is they just lean on their experience to say,
all right, these two things are in conflict, but usually people want it this
way. So that's that's the, the approach that we really take.

## [00:44:16] Botbuilt’s Data Sourcing

[00:44:16] **Audrow Nash:** That is so cool. So you are. How did you get this
data?

[00:44:20] **Barrett Ames:** Beg, borrow and steal. Just like, anything,
anything you can do to get more floor plan data. Like, I think anytime I meet a
builder, I'm like, hey, you got floor plans? Like, can I get some hook me up.

[00:44:37] **Audrow Nash:** That's hilarious. So when you get all of this data
and then you annotate it in your system in some way, and that was time
consuming.

[00:44:45] **Barrett Ames:** Yeah. So there's, a ton of annotation that we had
to do.

[00:44:51] **Audrow Nash:** They're effectively. Well, I guess they're like 2D
for each one, but it makes a 3D structure and there's probably relationships
between the different 2D panel.

[00:45:00] **Barrett Ames:** Right. So the, at the floor plan level, there's
actually like a bunch of constraints, a little bit of structural detail, but it
doesn't actually specify like this is where this two by four goes. It doesn't
actually tell you how to build it. Right. The carpenters do that on the job
site. So we actually have to generate all of that plan, and do that according to
building code.

[00:45:23] **Audrow Nash:** So how does that how do you generate primitives or
like low level things that you're using to inform your approach for a new
design. Like it's there's a bunch of ways I could imagine that you could do it.
But I wonder what you have done for that. That has been like the most useful.

[00:45:41] **Barrett Ames:** Yeah. Yeah. I mean, we we really think about it as
like constraints. And then we have an objective function that's just like
minimizing cost, minimizing robot speed or like robot time, not robot speed.
Yeah. And then we just it's actually, like, generative brings in, builds up this
nice set of constraints, and then we just have, a massive mixed integer program
that we run that says these are all the right places to put studs because it
satisfies all the constraints.

[00:46:11] **Audrow Nash:** Cool. That's wild. So that that's like the crux of
the problem you guys have solved. Is that fair to say?

[00:46:19] **Barrett Ames:** That's step one. Step two and step three. Step two
is now that you have this model of this house, how do you go and build it.
Right. Like what are the steps of the robot needs to actually do at a high
level. Right. It's kind of the task level planning. And if you guys are familiar
with task and motion planning, like it's exactly that problem. It's just
construction here.

[00:46:44] **Audrow Nash:** And that's. Then do that then. Right?

[00:46:46] **Barrett Ames:** Right. But you have to, you know, you have to, you
have to satisfy all your, your robot constraints as well as your task level
constraint.

[00:46:54] **Audrow Nash:** Definitely.

[00:46:56] **Barrett Ames:** And then step three is go and do that. But now
nothing's a perfect poly or like. So we made a very, big decision early on,
which is to use the exact same lumber that everyone is already using. And so
that means it's going to be borrowed and twisted, warped wayand like, it's going
to happen. And that lets us operate at a much lower cost, right? If you look at
a lot of the other previously mechanized approaches, they were like, we need the
best wood ten times, but quite expensive.

[00:47:37] **Audrow Nash:** Yeah. Okay. That seems like a good approach to me.

[00:47:41] **Barrett Ames:** Yeah. At that level, then you have to enable a
whole bunch of computer vision.

[00:47:45] **Audrow Nash:** a lot of real time response to things, a lot of like
3D modeling of what you're getting and then sitting that together?

[00:47:52] **Barrett Ames:** Right.

[00:47:52] **Audrow Nash:** Wow. Okay.

[00:47:54] **Barrett Ames:** So that's the those are, you know, first problem's
big. The first one is actually big enough that we've found SAS customers for
just that. And then the other two are like what I thought I was getting into.
Right. Building and building homes with robots.

[00:48:15] **Audrow Nash:** Yeah. That's wild. That's. It's so funny how a lot
of times they're like, I want to do this. And then it's like, there's so much
legwork required before you can even get to the part of the problem that they
want to be solving.

[00:48:24] **Barrett Ames:** Yep.

[00:48:25] **Audrow Nash:** Okay. That is so interesting. And so you said that
you found SAS customers for this kind of thing. Does it mean you have like
multiple like that's a revenue stream for you guys?

[00:48:34] **Barrett Ames:** Yeah. Yeah. So we have builders who need to
estimate the amount of materials that are going to go into a house. We can do
that to down to the stud and to the nail, because we have to in order to go
build with the robots. Yeah, right. And so that that level of detail saves a
builder 20 to 40%. Materials. They are literally using rules of thumb. Like, you
go to the, there's this crazy incentive alignment problem where the builder
actually doesn't do his own take off. He'll take it to a lumber yard, and the
lumber yard will tell the builder how much lumber he needs. The great incentive
alignment. If you go into the lumber yard and say, all right, how are you guys
estimating that? In many times you're using their actual thumb, right? It's not
just like a saying. They're they're actually counting. It's very literal. Yes.
And so that's how they end up estimating how much lumber that, that you're going
to get.And so they end up with just tons of overage. Yes.

## [00:49:47] Working With Robots

[00:49:47] **Audrow Nash:** Now so I want to move into questions, but I want to
before then just hear about working with robots for this task. Like, tell me a
little bit about that and then we'll move into questions.

## [00:49:57] Perception Stack

[00:49:57] **Barrett Ames:** Yeah. Yeah. I think, you know, kind of the
interesting bits for using robots on this particular problem is that we're using
we're kind of constructing this like almost worst case motion planning problem.
We've had these two big by like two big industrial arms. And they're usually
moving 8 to 10ft lumber. Right. So you you're always kind of like in this bug
trap type problem.

[00:50:23] **Audrow Nash:** So they slide around or anything?

[00:50:28] **Barrett Ames:** Yeah, they're on tracks on the ground. Purposely
went for seven days off because I wanted the redundancy wanted and the ability
to do a better to do linear, movements. So that's we actually use used
industrial arms. They get kicked out, in a perfectly usable state for us most of
the time. We had just found an arm that has five centimeters of error in it.
Yeah. So that one will be fun to correct, but they're, like a 90% price
discount, right? So that's massive for cutting down our costs. Oh, yeah. Okay.
So I'd like to open it up to questions. Let me know if you have a question. What
is your perception stack look like? Yeah. So right now our perception stack is
is growing. We seem to always find new places for more cameras. But generally
right now we've got, an L5 one five real sense that looks at lumber. It's a
really interesting the, the particular wavelength there. Returns really nicely
on lumber and not on our table. So it makes the classification problem, a little
bit easier there. But we have, several convolutional networks that are that are
helping us classify different, like the plate versus the stud, pressure treated
versus non pressure treated. And then actually one of the most difficult
computer vision problems is, we pull lumber out of a stack. Right. So you take a
tree that's been cut up into a whole bunch, two by fours, and then laid out next
to each other, and simulate each of those, and pick it up.

[00:52:18] **Audrow Nash:** That sounds hard.

[00:52:19] **Barrett Ames:** It was a tough one to crack.

## [00:52:20] Handling Lumber Challenges

[00:52:20] **Audrow Nash:** I bet. On the robotics, I guess from, like, the
assembly side. Is that, like, you have to do an extra process of cutting to the
specific point? Are you pre sizing everything? So how do you deal with the
lumber being so difficult. And you process it.

[00:52:42] **Barrett Ames:** So before assembly we pick it up out of the stack.
We've actually, got, we followed the input table. It's basically just, really
precise positioning system. And then we pick up a 16 inch saw blade and we cut
it. We cut it down to a 32nd of an inch on precision. And we do that only for
top and bottom plates. Right. So the vertical members we just call studs. And
then the, the horizontal parts of your wall, we call those plate. And so there's
a bunch of precut lumber for stud length. And plates are have to adjust based on
our design for that particular house. So the table like, like really just clamps
down and, and makes it as straight as it can. Then we cut it. And when we place
it in there the arms are, you know, 2,600 pounds of cast iron. So they can just
format however it needs to be.

## [00:53:39] Margins vs. Pre-Fab Homes

[00:53:39] **Audrow Nash:** Oh yeah. Other questions? How margins compared to
pre prefab home?

[00:53:47] **Barrett Ames:** Yeah. Just to give you an idea, carpenter, a rough
carpenter makes about $31 an hour nationally in the US. We can run the robots
for a buck 15 hours.

[00:53:57] **Audrow Nash:** Wow.

## [00:53:57] Transport Costs

[00:53:57] **Barrett Ames:** So that's very. There's, there's a few other
complicating factors in there, but, one that we're we're better than, manually
doing it.

[00:54:07] **Audrow Nash:** So what's the cost in transport?

[00:54:09] **Barrett Ames:** Yeah, the the overall cost. I think a lot of people
would be surprised by the fact that framing is 20% of the cost of a home. So
it's a massive portion of it. In that it's actually in the biggest portion. It's
also the most dangerous portion.

[00:54:24] **Audrow Nash:** Is that, is that counting labor costs and
everything?

[00:54:27] **Barrett Ames:** Yeah. So it's, Yeah. With labor, of that 20%, 10%
of it's directly labor. So they're, they're, it's a big portion. It's a very
dangerous portion. If you look at most dangerous jobs in the US. Rough Carpenter
is going to be near the top. As far as logistics go. We can ship 500 miles for
about a grand. The typical framing package is going to be 20 to 40 grand on a
house. So in comparison, relatively small, for like, a one off house. We'll we
can do that all day. No problem. If Dr. Horton wants to build a whole
neighborhood, we'll just set up on a basketball court that's going to be in the
community anyways, and just build there.

[00:55:18] **Audrow Nash:** Oh, yeah. Back there. You talk about the efficiency
of time and how time, money. And then working day night. Tell me about the time
efficiency.

[00:55:27] **Barrett Ames:** Yeah. So from, from a time efficiency from the
builder's perspective, time really is money there. Construction loans are very
expensive. Builders will have something on the order of $250 a day. To $750 a
day, just in interest charges. Right. So every day matters, to the builder. And
from a robotic standpoint. Right. Like we can build 24 seven, with these arms.
It's it's, you know, something that can be a relatively constrained within the
warehouse.

## [00:56:02] Botbuilt’s Lifecycle

[00:56:02] **Audrow Nash:** Yeah. So I think we'll do one more question. You
mentioned that that company about four years old. You probably got 25 from so
far. Talk about the lifecycle of the company where you guys are. It's still
development? Are you starting to scale up production Lifecycle of a company?
Where you guys are, you've been going for four years.

[00:56:22] **Barrett Ames:** Yeah. Yeah. So, first, kind of like, we actually
built our first frame three months after starting. We and we were a part of Y
Combinator. So for Demo Day, we actually built frames that got stood up as part
of a house in Arkansas. And then we, as we learn more and more of the process,
we found all sorts of different pieces that we needed to, to automate.
Particularly the floor plan part. Right. So we took took, took time to figure
that portion out. And then we've really started to hit more of our production
stride this year. We just set up a three team facility in North Carolina, that,
can pump out, floor a week. As far so, you know, basically 100 panels. And we're
we're going we're scaling that up right now. We're just about to do our series
a, so that's kind of the, I guess, the, the rough life cycle from a labor
standpoint. It's, like roughly on par with labor right now. But we're vastly
more cost effective.

[00:57:32] **Audrow Nash:** Yeah. That's wild. The like 20 times improvement
that you're seeing. Okay. Hell yeah. So one thing we haven't done in the past
ones but what do you hope that people like everyone here takes away. This
conversation.

[00:57:46] **Barrett Ames:** Yeah, I, I hope everybody realizes that the future
of construction is in automation, right? So many people don't even realize all
of the pain and suffering that goes into their house. And how that that creates
a whole bunch of societal ills. The future can be so much better if we just
automate housing.

[00:58:10] **Audrow Nash:** Totally. Hell, yeah. Alright. Thank you Barrett.

[00:58:13] **Barrett Ames:** Thank you.

## [00:58:17] Outro

[00:58:17] **Audrow Nash:** That's it. I really enjoyed this. I just love
talking as you can tell, and doing it with an audience is super fun because they
have great questions and it was cool to feel the excitement in the room. If you
liked this and can make it, consider coming to the event march 8th. I'll
probably be helping out with panels, and I'd love to meet you there. I'll put
the link in the show notes. That's all for now. See you next time.
