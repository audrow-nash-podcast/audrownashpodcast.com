[00:00:00] **Audrow Nash:** Hey there and welcome to the Audrow Nash podcast.
Today we're diving into the fascinating world of robotics with a guy who's
making robot arms work in the most. Unexpected places from the vast expanses of
space to this strawberry field right here on Earth.

I sat down with Dave Coleman, the Chief Product Officer and founder of PickNik
Robotics. Now, Dave's not just any robotics expert, he's someone who's been
deeply involved in the ROS or robot operating system community,

and his company has become a pivotal player in helping over 110 companies
harness the power of robotic arms for diverse applications. If you are curious
about how robotics can revolutionize industries like agriculture, aerospace, or
even your local restaurant, or if you're just a fan of innovative tech, this
episode is for you.

So buckle up. Grab your favorite snack and let's explore how Dave and PickNik
are pushing the boundaries of what robots can do in our everyday lives. Let's
get started.

## [00:01:04] Introduction to Dave Coleman

[00:01:04] **Audrow Nash:** Hi Dave. Would you introduce yourself?

[00:01:07] **Dave Coleman:** Hey, this is Dave Coleman. I am at PickNik
Robotics, and I've been, a long time, ROS Advocate and someone in the ROS e or
the robotics ecosystem. I got my PhD in Robot motion planning, back in 2017 from
CU Boulder. and yeah, that's, I guess that's me in a nutshell.

## [00:01:28] Overview of PickNik Robotics

[00:01:28] **Audrow Nash:** Now tell me about PickNik. like some of the details
just for context of the company. So you said you guys are in Boulder. How many
people are you, when did you guys start? and then like high level of the
business model. So how are you guys getting money,

[00:01:45] **Dave Coleman:** Yeah, I'm, really glad to be, being interviewed by
you again. This is, I love this every couple years. so you've heard this before,
but PickNik, we're, we're a delayed spin out of Willow Garage in some ways.
There was certainly a couple years gap, where I was still in grad school, but,
essentially Willow Garage back in, in Menlo Park, Silicon Valley started the
robotic operating system.

And one of the projects was MoveIt. And I was, actually an intern back then
helping develop the first version of MoveIt. And after Willow closed, it was in
the hands of SRI for a minute. but that got, it, got dropped from there. And
then, I picked it up on behalf of, PickNik Robotics leading this, open source
project.

And, from there we've just, we've grown a lot. We've helped over a hundred
companies now, maybe 110, probably, just do more with robot arms. It's
deceptively hard using robotic arms for a lot of classes of applications beyond
traditional industrial automation. and so we've been through a bunch of
iterations since, we're at 30 people now have gone up and down.

but we got just a great team of engineers, PhDs who understand how to combine
motion control, kinematics computer vision, and then most recently machine
learning into a comprehensive solution that, just a lot of companies really
benefit from. And, we love partnering

[00:03:13] **Audrow Nash:** Hell

[00:03:13] **Dave Coleman:** with other robotics companies.

[00:03:15] **Audrow Nash:** Awesome.

## [00:03:16] Challenges in Robotic Manipulation

[00:03:16] **Audrow Nash:** Now you say, tell me some of the ways that,
manipulation is hard. what are some of these challenges that are not obvious for
why manipulation may be so hard that you guys are working on very often and
helping these companies with?

[00:03:31] **Dave Coleman:** Yeah, so part of my theory on the industry of,
robotic arms is it started with maybe like the seventies with automotive, and
then it grew into general manufacturing. And so a lot of the incumbents have
gotten really good at serving those needs. And those needs don't actually align
with a lot of the newer, more modern applications of robot arms.

We basically wanna get robot arms, into every part of our life. Small
businesses, restaurants, your, home. we want it to be outdoors and farm fields.
We want it to be in hospitals, in space, building our next, lunar colony, which
is the thing that we actually are under contract with NASA for,

[00:04:10] **Audrow Nash:** Super cool.

[00:04:11] **Dave Coleman:** subsea, supporting like infrastructure for oil and
gas, un under water.

Just there's so many areas that I think people forget about and they just think,
we have an assembly line, we have a conveyor belt, and we're, palletizing. We
are, machine tending. We are a welding parts of a car. And, so the, these
incumbents I referred to a minute ago, they've done a really good job of serving
this kind of more blue collar warehouse, like factory space with, the classic
stuff that people always talk about, teach pendants and, PLCs and all those
things.

And of course, Audrow, you know a ton about this. You work for a similar
company. So I'll acknowledge that.

## [00:04:54] Unstructured Robotics and Applications

[00:04:54] **Dave Coleman:** But we, actually, a, term that we borrowed from
academia and that we are trying to push forward is unstructured robotics is the
niche that we're looking at. So I think most robot companies today, they're
still looking at the biggest market, which is manufacturing and logistics.

And, we certainly have customers in that space, that we're working with. you can
see some of the logos on our website, but our main focus really is yeah, these,
next gen applications. like we had a big program picking strawberries outdoors
in California, in the farm fields. That was a really rewarding process because
there's a tractor driving and arms hanging off and things are very dynamic.

You got the, dirt bumping and even the seasonality of the, shadows from the sun
changed throughout the season, as the earth rotates. and then all those things,
they have these big impacts on your machine learning models and you have this
like data drift. and that's just like one, one use case.

It's pretty wild the number of things that we've been able to help with. So
we're really industry agnostic. we just like hard problems that maybe aren't so
served by hard coding waypoints.

[00:05:59] **Audrow Nash:** And what, so the traditional factories that we think
of when we think of robotic arms, where you, they pick up huge metal and they
repeat the same motion over and over again. so that's not the use case you're
serving. You're serving unstructured environments where things change, the world
changes.

the strawberry is not always in the same position. These kinds of things. What,
in the unstructured space of robotics applications, what are some of the like
classes of problems that you see? So you mentioned the environment changes, like
the sun moves over the course of the year. what are some of the other ones?

[00:06:38] **Dave Coleman:** I, I wanna clarify there, there are actually still
plenty of hard problems in manufacturing

[00:06:45] **Audrow Nash:** Oh, definitely

[00:06:46] **Dave Coleman:** That are barely solved or just starting to be
solved, like wiring harnesses, for example, or assembly is a, big one. or just,
what is it? Low high mix. Low yield, low volume manufacturing like

[00:07:00] **Audrow Nash:** Yeah. High mix, high volume kind

[00:07:01] **Dave Coleman:** Yeah, high mix, high volume.

Thank you. Thank you. and so again,

[00:07:05] **Audrow Nash:** area.

[00:07:06] **Dave Coleman:** we do get pulled into some of those. a big area
we've been helping out with lately is in, in big spaces where you don't want
fixed work cells, but you actually want, like mobile robots, an example of a
hanger for, aerospace for like large planes.

[00:07:22] **Audrow Nash:** Hmm.

[00:07:23] **Dave Coleman:** you want actually robots that can drive around and
when you have a robot with an arm on it, suddenly you have to deal with a lot of
calibration issues and understanding where you are with the respect to the work
piece and the work and, the, the tool that needs to be. So there's a lot of scan
and plan.

I, do think I missed your original question, Audrow. That, that it, what was it
again?

[00:07:43] **Audrow Nash:** The classes of problems that you may encounter in a
structured environment,

[00:07:50] **Dave Coleman:** And you mean unstructured?

[00:07:53] **Audrow Nash:** unstructured Yes.

[00:07:53] **Dave Coleman:** Yeah.

[00:07:57] **Audrow Nash:** or in a few categories of problems that you're often
helping

[00:08:01] **Dave Coleman:** there's one category. It's just pick and place,
which can be a very simple thing if you have a conveyor belt and you make sure
that all the parts are coming in in the same exact position. But that is such a,
huge term that we have to really, when someone says we won't pick in place, we
have to ask 'em like, what kind?

'cause okay, let's say we focus on, bin picking, and you have a, a bin of parts.
And this is again, more like warehouse logistics. It, there's just so much
variety to even that one of like, how chaotic are the parts in the bin? how
exact do you need to place? Because a lot of times people just want pick and
drop.

That's a lot easier. 'cause you don't have to worry about like where you've
picked it in your hand. and then there's the question of okay, the, if you maybe
have various products that you're fulfilling, let's say your Amazon warehouses,
how many SKUs are you supporting? If it's like a single SKU bin, that's a lot
easier than

[00:08:55] **Audrow Nash:** SKU is like an inventory code, right?

[00:08:58] **Dave Coleman:** Correct. Yeah. Every industry has their own terms.
But SKUs a, common term for a,

[00:09:02] **Audrow Nash:** I have no idea

[00:09:03] **Dave Coleman:** if there's a

[00:09:03] **Audrow Nash:** for, but I know what it means. Do you know what it
stands for? I've asked in past interviews and I haven't looked it up.

[00:09:08] **Dave Coleman:** Nope.

[00:09:10] **Audrow Nash:** Okay, so you have different skews and the SKU might
be a different object,

[00:09:15] **Dave Coleman:** yeah. So so

[00:09:16] **Audrow Nash:** is a different object.

[00:09:18] **Dave Coleman:** yeah. So that's an example of a thing we might do,
but In other environments, you want to drive up to a table and move a tray from
one work, like, automation islands. I've heard of this term like where you have
different machines and you wanna do this machine tending, and that's a different
kind of like pick and place.

'cause now it's a little more structured. Maybe this tray has little slots where
you put each product in and it kind of slots in, or the machine needs a certain
format of that. So there's just such a wide variety. and then place itself. if
you're just placing onto a, flat surface, that's easy.

If you're inserting it into a particular, like a pe and hole type of problem,
like you're having to pull in all this force torque control to make sure that
you exactly get it aligned. if you're assembling, maybe you need to hold and
have a secondary arm, attach it with some kind of welding or screwing operation.

So there's just such a wide variety and, we're, taking on the really hard
problem and. You probably are familiar with this problem too, of a generic
toolbox that can do all of these things, regardless of industry. So like we say
yes to the hard stuff, bring it on, we'll, take it.

And a lot of robot companies, they, have a, arguably this is a strength, but
they're really focused on one thing and doing that, doing that well, and we're,
going after the broad stuff. So when there are things that haven't really been
solved before, a little more, more novel, that's the stuff that we get excited
about or more dynamic or changing environments or has a lot of sequences and
steps.

[00:10:52] **Audrow Nash:** That sounds really awesome. So it sounds fun to work
on all the different diverse, challenging problems that you might do. How do
you, balance between that and being spread too thin? Because you were saying
it's arguably a strength to just focus on one thing. but I think there is
strength in being very general, and maybe there's a larger market if you're more
general.

but tell me about that. Tell me about being more general, and how do you counter
becoming too spread thin?

[00:11:23] **Dave Coleman:** Yeah, we've been doing it for a long time and so
there's just a lot of momentum. We've and, software and tools we've developed.
We're also like. we're, pretty pro, using open source, so we're big contributors
to the ROT ROS, like I mentioned earlier, MoveIt, the open source version is out
there.

We, we have developed a, new product called MoveIt Pro, which I'm sure we'll be
talking about, but because we've been around for basically 10 years now, we've,
done this a lot. We've seen it with a lot of customers, and so we've taken that
experience, and our work with, a lot of big government agencies like NASA and
Space Force, and we've just built out this.

We, we've already built most of this, like we have a huge library. we're
counting like, over 160, and that's, I think, a conservative count because some
of them maybe are more like our customers. We've built something custom for our
customers, but, at least 160 of these skills and behaviors that are, available.

it's always growing. And so I just, I look at it as, I think the robotics
industry, it needs a more common platform so that we don't keep reinventing the
wheel. I imagine this is, again, similar to what you're, doing in Intrinsic, but
I look for inspiration often at the video gaming industry, actually.

I. I, I've never been a video game developer myself, but of course they have
video gaming engines. And when that was first came out, my understanding from
reading the history of this, it was, novel. It was, most shops were building the
whole 3D graphics, ray tracing, shading, all that stuff they're building each
time on their own.

and some groups like Unreal Unity came along and said, why are we, having to do
this? Is this causing way too much costs? And it's a long time to get a new
video game title to market? And of course, these shops had their own code that
they were using for multiple games. But, the, emergence of these, big platforms
to speed up and improve the user experience and the tooling and, make it so you
can focus on your end application, whether it's certain storyline for a video
game or it's a certain kind of con combination of mobility and robotic arms and
manipulation.

And Yeah, that's what we have available now, and we have a lot of successful
case studies now of customers using our, I like to call it like a manipulation
engine. It's a, it's equivalent to a.

[00:13:42] **Audrow Nash:** Cool.

## [00:13:45] MoveIt Pro: The Commercial Grade Solution

[00:13:45] **Audrow Nash:** Okay, so Manipulation engine, how does, so I'm
curious, how does that fit with MoveIt Pro and can you tell me a bit about
MoveIt Pro?

[00:13:54] **Dave Coleman:** Sure. so MoveIt Pro is the new commercial grade
version of, MoveIt. I'm sure some listeners here are aware of this. It's move.
It's very, I don't know if you introduced that one. It's, very, popular in
research. My PhD thesis was, based on it. I contributed a lot of, my work to it,
but there's been a lot of other, great researchers, more, more accomplished than
I who have contributed pretty incredible algorithms for collision check and
motion control, grasping and all of that.

So that's available PickNiks still maintaining it, and we still are contributing
ex fixes to it. Improvements. We just released the latest version for the, for
ROS to Jazzy, did I get that right? so that's out. But MoveIt Pro is okay, this
is move, it's for research and it's for com.

It's a benchmarking tool comparing algorithms that, that was the initial design.
my mentor, y Sukin designed it for that. and

[00:14:49] **Audrow Nash:** mean? So benchmarking algorithms. So you give them a
similar task and you see how you, how they do

[00:14:55] **Dave Coleman:** Exactly. Yeah. So different labs, like Rice
University has developed a lot of kind of, they call it search based planning
algorithms. And those have gotten a lot of mileage. It's our favorite, like
maybe you've heard of RRT. but then other labs, did more like, SVP Ls, a
library, that came with a different way.

And then, of course now there's new machine learning approaches to this. there
are different optimization algorithms, but there's a whole bunch of different
ways of solving these robotic arm problems. And for a while at least. The
researchers were really interested in comparing and publishing papers saying
mine's better than yours.

And, so I, I was totally guilty of that. I've published some comparison things
and, MoveIt was great for that. And then when you wanna actually deploy these
algorithms to harden reliable systems that have to have the infrastructure and
containerization and, like introspection, recovery fault management, being able
to do a lot of complex sequencing, that's not what movement was built for.

And so we, and we, kept building all that custom for our customers and we, so I
said like, why, do we keep doing this? These are like multimillion dollar
programs. It's taking customers, year plus couple years to get to market, or
sometimes they fail. They would underestimate how hard the feasibility of all
this was.

And we've seen a lot of robotic startups who try to use robot arms kinda shutter
or have to really pivot. or maybe they get acquired, which is sometimes similar
to shuttering. just merging. and so we, our kind of thesis is okay, let's, stop
wasting all of the, this investor money on building the same thing over and over
again.

And, we've built a, first, first in class application of okay, now you just drop
in all these different algorithms, depending on what you need. We can prototype
something very quickly in like really complex physics simulators, and then work
with you through different phases. So like PickNik, we, really love to get a
quick prototype out with our customers, and that could be something that's used
for market validation, getting that pilot out, showing investors, getting them
excited about the vision.

And these aren't just like concept videos. This is like we're using the full
existing algorithm suite. We just haven't done some of the like six sigma, like
last mile reliability and Deployment system, so we can do that. but yeah,
that's, kinda where we're at today. So MoveIt pro I think you were asking about
that.

it's, both a, runtime and it's developer platform. And so the runtime is the
gaming engine part, and it provides like the core algorithms and a lot of the,
AI components.

[00:17:28] **Audrow Nash:** When you, so I, don't fully understand when you say
it's the gaming engine part, is, you're saying it's a metaphor to the gaming
engine? It's, or is it, literally has an engine for you to it's its own software
suite in, I, guess I don't understand the parts of it, completely.

[00:17:46] **Dave Coleman:** yeah, it's the two parts. It's the, game, the. The
runtime is what goes in your release robot. So it's got the actual, some brains.
And then, of course there's a whole application layer that our customers build
out. and to make it easy to build out their applications. We have a bunch of
developer tools, so it's a whole user interface.

And we're not an IDE, we're not trying to replace whatever, developer
environment you're used to for coding, so you can use VS code or Eclipse or
anything. but we certainly have a,

[00:18:17] **Audrow Nash:** files. Uhhuh.

[00:18:18] **Dave Coleman:** yeah, but we certainly have a lot of, of 3D
visualizations where you have multiple panes, different simulated camera feeds,
real life camera feeds.

There's a lot built around like teleoperation and recovery, so you can remotely
help your robot out when you're going through your development stages. and then
the, core of it is as behavior trees, which is a very popular thing in robotics
right now. It's kinda like a state machine, but we just, we allow our customers
to build out very.

Like complex, like multitask. If we're gonna do this and then that we're gonna
drive over here, we're gonna stop, we're gonna survey, we're gonna understand
what's in the environment, and then pick something and we're gonna go over
there, put it down, we're gonna do a, spraying operation, maybe a welding
operation.

That's all that's enabled by behavior trees. And then the, bugging
infrastructure where you can have break points and see some insights about what
the robot's thinking. and maybe as you're developing it, something's not working
right? that's like a lot of the problem of robotics is like understanding what
the robot's thinking is.

It's a hard problem that like without good tooling, it's causing our industry
just to, to stumble.

[00:19:28] **Audrow Nash:** Yeah, for sure. Yeah, I just interviewed Adrian from
Fox Glove and visualization is critical for sure. okay, so you have the runtime.
The runtime is the part that is actually running on the robot. So that's,
talking to it and executing your program. Then you have tooling. That's the
other big section.

and so that makes it easier for them to write their code introspect. what, and
let's see. The debugging is very interesting. So actually would you take me
through what it might look like in, in a cartoon version of using, MoveIt Pro I.
To do a simple application for this? what, does it look like from the
developer's perspective or the company's perspective?

How does debugging work? introspection in general. gimme a cartoon of that kind
of thing.

[00:20:25] **Dave Coleman:** A cartoon. so we have, a handful of reference
applications that we've built a lot of different. To things already that you can
draw from. And so that's the quick start is, figure out what most close closely
resembles your application and then build from there. And, that's just useful
because this isn't, this is still pretty low level and yeah, there's, there is a
drag and drop component of it that you can use, but we definitely, en encourage
you to make your own code just so you can do your own plugins, your own, we call
'em behaviors or skills.

[00:21:05] **Audrow Nash:** Is it, so when someone makes a program, or behavior
a skill, is it like one drop or 1 1 1 node in your behavior tree. Okay.

[00:21:16] **Dave Coleman:** But you can make as many nodes as you want

[00:21:17] **Audrow Nash:** Oh yeah. You can make your whole application from
it, but that's the abstraction and where you give users access. I see.

[00:21:23] **Dave Coleman:** Yeah, and we've always, been very pro ROS. So we're
actually using the, just the ROS infrastructure. It's, a ROS package. It's in
like the, the ROS build system. And so you can easily pull in, in the Ro ROS
ecosystem. There's this, concept of, actions and the services and all that's all
built in first class.

[00:21:43] **Audrow Nash:** awesome.

[00:21:44] **Dave Coleman:** we're trying not to like. the development workflow
that a lot of people have learned in grad school and in college. this is a
defacto for development now, but we, know there's a lot of rough edges and, I,
think with the, what Adrian's doing at Fox Glove is it's really exciting and
we're, really compatible with all those tools.

So you can still launch our visit if you want. we have our own, we built a
specialized visualizer that's really focused on robot arm trajectories and robot
arm manipulation

[00:22:10] **Audrow Nash:** Oh, cool.

[00:22:12] **Dave Coleman:** debugging. the, understanding like how, a pipeline
of grasping and, planning works. But you could definitely still connect to Fox
Glove and RVIs, and we actually provide easy commands for that outta the box to
use those tools.

and so we're, trying to be very developer friendly. And so it could be from a
high level, like if you don't know all that stuff, there's a lot you can do
without it. But you might want someone on your team who has some like deeper
computer science to add those extensions, however. Part of our business model is
that we also just build that for our customers often.

So you can hire us to do those integrations as well. For sure.

[00:22:51] **Audrow Nash:** Yeah. Very cool. Okay, so you have the runtime.
Yeah, go ahead.

[00:22:57] **Dave Coleman:** not sure I answered your question about this
character like this cartoon.

[00:23:02] **Audrow Nash:** I was, I, have an idea of what you're doing. I was
just meaning you have a specific task you wanna do then, so you're grabbing one
of these, reference solutions for this kind of thing. You can try it. and then
this is how our intro specter works. And, we have, when you have some weird
collision thing and your path planning is failing, then this is how we debug it.

You're just writing it in your normal editor, like these kinds of things. so I
can see the process a little bit better.

[00:23:36] **Dave Coleman:** Yeah.

[00:23:38] **Audrow Nash:** but I mean, I feel like I have a decent
understanding of it now. Anyways.

[00:23:41] **Dave Coleman:** Like any, like offline programming environment, we,
you can prototype the whole thing in a, physics simulator, and we've recently
upgraded that simulator. we're not using Gazebo anymore. And then that's really

[00:23:52] **Audrow Nash:** are you using?

[00:23:53] **Dave Coleman:** Be because like gazebos always been really good
about AMRs and I don't know, like things that aren't as much contact dynamics,
but we just, we really found limitations in being able to like, see the,
manipulation of your fingers and your grippers on that.

Mujoku is actually the new thing that we've just

[00:24:14] **Audrow Nash:** Mujoku. Huh?

[00:24:17] **Dave Coleman:** that's a pretty cool library.

[00:24:19] **Audrow Nash:** Gazebo. And when you said AMRs, that's mobile
robots. Autonomous mobile robots. but the mu yoku, so gazebo is like a higher
level abstraction as far as I understand, than a simulator. Like you can use mu
yoku in gazebo, but I guess you went down a lower level and now you're using mu
joco more directly.

and you were able to maybe visualize your paths and the gripper f the finger
grippers and all these things, better with this, like additional control you
gain by going down to just using mu joco. Is it Correct?

[00:24:56] **Dave Coleman:** Yeah, we can now simulate like really complex
admitence control and admitence control is a, form of force feedback where we
have a closed loop and we can actually push on surfaces with a certain amount of
force and certain vectors. And, it, allows for just speaking at a little higher
level here, if we wanna do a peg and hole insertion task, you can actually see
the object deforming a little bit as we do like an insertion or an assembly.

we, we can actually like, push onto things and it's just, it's, really exciting
what that's enabled so that when we build, when we deploy to hardware, which we
do a lot, it's such a smaller gap because it's so much more similar.

[00:25:40] **Audrow Nash:** That's super cool. Very interesting. Yeah, I've used
mu joco in the past a little bit and I actually funny enough, even coming from
open robotics, I have very little gazebo experience. I have a little bit, but,
still a different, I'm mostly on the ROS 2 side of things, but,

[00:25:58] **Dave Coleman:** and we still do support gazebo. We can actually
plug into any, simulation environment. We have another one that's just we call
it mock Sim, but it's no physics. It's just a, whatever you tell

[00:26:09] **Audrow Nash:** RVIs, probably.

[00:26:10] **Dave Coleman:** It, whatever you tell it to do, it just does it
magically. and then we also, we have some integrations into Nvidia, Isaac Sim.

so there's some advantages there with the, synthetic data generation for ml. but
we, have some of our customers now using our platform for generating training
data because we, for training models, so that's, I, mentioned ML earlier, like
we're more and more using that for all of our computer vision needs, but also
for training models for other folks.

It's been a big area of interest.

[00:26:42] **Audrow Nash:** Very cool. Yeah, it's interesting all the AI stuff
and all the generating data and how that bootstraps things. Are you guys, so
people are using you, why are using your new, what's your simulator called? Are
you just calling it the PickNik simulator or

[00:26:59] **Dave Coleman:** Yeah. it's just MoveIt Pro and we have the
development platform and,

[00:27:04] **Audrow Nash:** everything is under the MoveIt Pro umbrella in a

[00:27:07] **Dave Coleman:** Yeah.

[00:27:08] **Audrow Nash:** Okay. And so when you were saying that it's more
hardened, and you have more of a deployment, do, you, like there's a lot of
tough challenges there. There's a lot of infrastructure that needs to be handled
and you mentioned several things, but you're handling like, things like
deploying the code actually to the runtime so it can run it and updating and
like testing introspection.

It sounds really cool that you have the tele op related behaviors. just tell me
about all the infrastructure that you have. 'cause this isn't what I think of
with MoveIt. MoveIt is the research and also very good first, way of doing
manipulation in my head. And so we haven't talked actually, and I, since studio
has been released, I think it was very early days where it was more of a
concept.

but tell me about all the other infrastructure that you have around it and how
it all works together.

[00:28:06] **Dave Coleman:** yeah. we've. We've heard a lot of feedback that
there's a lot of applications where they, don't want it to be reliant on cloud.
That could be for security reasons. We, do work with, space Force a fair amount,
and so they have like air gap requirements. So I think a differentiation from us
and maybe like Intrinsic, which, keep bringing up is there's really actually no
cloud connectivity aspect.

I love what the guys over at Formic are doing, Jeff, providing all, of the fleet
management. There's a couple fleet management companies, of course, and we have
a, we had, an integration with them. It's still there. We haven't been using it
lately, but, so if you wanna do cloud connectivity remote operation, we
recommend you set up a VPN on your own, like whatever.

We're basically network agnostic. you do, you'll leave that to you. a lot of
companies have big opinions on that. we're just focused more on the, the

[00:29:01] **Audrow Nash:** Getting

[00:29:02] **Dave Coleman:** al algorithmic deep control engine aspect. Like we
see just so many companies, they, see, a lot of like headlines about what the
open source can do.

and maybe I'm guilty of this, MoveIt open source claims to be, to do a lot, but
when you actually get into it, like we were talking about earlier, mobile
manipulation, like there's a lot of shortcomings and limitations and, so we've
been building out the things that we're missing to actually deploy.

And so you can do it yourself. We've helped companies do it themselves. Just
know that you're in for like millions of dollars of an investment and it's gonna
to deploy your time to market. And then there's also like the long term support
maintenance where we're, doing that for our customers. Now we have a, real time
support channel.

Like we usually like share slack channels with our customers. we have a QA team
who's making sure that the quality's there and we would just like a much more
professional operation so that. for companies that aren't doing research, this
is the, thing we recommend now to have a reliable, yeah.

Robotic product. And I think, the industry needs companies like us, like for
Foxglove to mature the tool set we have.

[00:30:12] **Audrow Nash:** definitely. Yeah. And it's, do you know, do you know
Polymath Robotics? I,

[00:30:18] **Dave Coleman:** Yeah. They're focusing on, the navigation problem.
Is that right?

[00:30:22] **Audrow Nash:** yes. And they, the way I think of it is it's like
behavior as a service kind of thing where you communicate via, h like a normal
rest, API endpoint. So you just send a simple request and say, go here or do
something like this. and it will handle that kind of thing. So they're making it
like behavior as a service is really how I'm thinking of what they're doing.

And it's, they handle a lot of the infrastructure for you and that doesn't
really. To my knowledge that doesn't exist in the manipulation space for this
kind of thing. But I'm hearing a lot of like echoes of what they're doing, which
is interesting in what you're describing with this,

[00:31:06] **Dave Coleman:** Yeah, I mean we have a, very high level Python,
API, that if you wanna integrate, maybe you have some existing code you've been
building out something, you can drop us into that. And like you're, overarching
state machine or you're overarching like controlling management. You, can just
like trigger our Python API and we'll, take care of all the, like the robot
manipulation components for you.

That, that, is one way of using us. You can also use our user interface to be
the operational control panel, but we find that a lot of our customers, they
don't want to use our ui and we, totally get it. Like you have a particular kind
of operator or in customer who wants to see things with certain terminology and
they want things simplified.

And we've really developed a, developer platform that's built in the, in mind of
like engineers and roboticists and what they need to see to build applications.
But once the application's pretty much working, you need a different user
interface to like

kind of automation program you have.

And then we totally support that.

[00:32:02] **Audrow Nash:** Yeah, it makes sense with who, so if you're
targeting developers, you get the application up and running, you save a lot of
engineering effort and you handle a lot of the maintenance burden, because
they're just using your things. The team doesn't have to maintain it. The, big
reason with Polymath that I brought it up is they are doing, it's basically
they're helping companies with a lot of the undifferentiated work, and it sounds
like you guys are too, where it takes millions of dollars to set up all this
infrastructure and companies just run out of money.

Instead of, or make it. But it's like subpar because they had deadlines and
short, they took shortcuts and things like this to get it working for one time.
But then in the future it's tech debt. And so you guys are in a position where
you are able to spend more time in it. You're able to get buy-in from several
different companies and then that allows you to have the time and resources to
really build something of quality.

and so then it becomes a lot easier to just go with you guys because you save
them time and money and work on the maintenance yourself. 'cause that is the
business in a sense.

[00:33:17] **Dave Coleman:** we do find, like we, we work with a lot of
corporate RD labs, innovation groups.

[00:33:21] **Audrow Nash:** Mm-Hmm

[00:33:22] **Dave Coleman:** we work with a lot of robotic startups too. all
sorts of organizations really. but with the, some of the robotic startups, we
find that there's, some organizations where they have a degree in robotics and,
they, they really wanna just build it all in-house and more power to you.

But what, we can really help companies with is like that short time to market is
a, big, one of our big value propositions. look, we've done this before. We have
the components. Let us help you assemble it in a unique way that's for your
application. we can't like, solve it just to day one, there's usually some
amount of configuration and let's get these different skills in the right order
and

[00:34:01] **Audrow Nash:** Yeah. Yeah.

[00:34:02] **Dave Coleman:** we, we find that also companies, they, always want
different pe, they need different pieces of hardware. So they might, different
vendors, or some of them build from scratch, their own in-house hardware, and we
support all that. our only requirement is that you have a ROS driver.

if you speak ROS, we can drop in the rest for you. So that's, a big advantage.
We see a lot of, companies that are look like us. They, don't have that hardware
agnostic component to it. and then, yeah, another value of us is like just
managing the risks that, that you were hitting on just now.

[00:34:38] **Audrow Nash:** Yeah, regarding all the like, infrastructure that's
required. And it's fundamentally not differentiating too, especially if you're
doing on a startup and this kind of thing. I would imagine that like the
investors would just prefer you buy something off the shelf so you can move so
much faster.

[00:34:55] **Dave Coleman:** Yeah.

[00:34:56] **Audrow Nash:** tell me about the, you mentioned having something
like 160 capabilities or something like this.

What are those and what's, what's an example of what a capability is like?
depending on how you draw your abstractions, that could be a lot or few,
depending, very few. If, depending on what, where the abstraction is, where like
what, where the line is for whatever you're calling capability.

[00:35:21] **Dave Coleman:** Yeah. I'll just give you some high level categories
of what our, skills are in. So there's, the classic stuff you think of when it
comes to, to MoveIt, and that's motion planning,

[00:35:33] **Audrow Nash:** Yep.

[00:35:34] **Dave Coleman:** Cartesian planning, global free space planning,
being able to, execute a trajectory and, all those.

Kind of things. We, have a lot built around, like not just doing a position
controller, but being able to switch between different kinds of controllers. And
I might be losing people saying that, but there's velocity, there's force
controllers. We can smoothly switch between those depending on what you need.

So that's the classic stuff.

And then a layer above that, you have task planning and, this is a little less
intuitive for a lot of folks, but rather than saying move from A to B, then C,
then D and then you just like hard code, that's exactly where you're gonna be.
We can actually tell the robot like, here's a, pile of boxes and we want them
moved to the other side of the room and we, yeah, we have to give them some
structure to that they need to be stacked like this and that, but then you can
give it to a task planner to break that into all the substeps. And we have
different flavors of that. a lower level version of that is like a, task
constructor for motion planning where it can add in different intermediate
steps.

If you have multiple arms, it can choose which arm to use, things like that. And
then a higher level is more semantic reasoning about, to get to object A, you
gotta move object B off of it, and then going through a puzzle. So we've built
out a lot of functionality there. We don't honestly use task planning as much.

a lot of applications don't need that yet. But it's a thing that some of our
more research, programs, like when we work with nasa, they, want that for like
fully autonomous space operations, for example.

[00:37:07] **Audrow Nash:** Cool.

[00:37:07] **Dave Coleman:** And then that beyond that, there's machine learning
and perception, which is, recognize all the objects in the scene, be able to
reason about, we gotta open this door and here's the handle and here's the
hinge.

And once you know where the door, the handle hinge is, you know how big the door
is, and you can figure out the arc that you need to swing the door to open it.
and then, things like understanding where to properly grasp an object. Like
where's the wide point of it? Where's the narrow point?

How can I configure my arm to, to use that? So that, that kinda leads us in the
grasping. We have a lot of different grasping algorithms. We, do some vacuum
suction, which is the most reliable form of robotic, grasping. But we also
support two finger gripping, and in theory we can support more complex than
that.

there's mobile navigation, so that's whole body planning where we can actually
to reach something. We not only use our arm, but we're gonna actually enroll our
whole body. So the wheels, if we have a torso joint, if we have a lift joint.
Kind of planning all those together. And then lastly, something that a lot of
groups maybe don't think about, is user input.

We do, we have built out a pretty complex set of, we call it supervised
autonomy, but, it's, not just teop. It's let's say that you're, you've deployed
robots with arms into production and it's running, 99% reliable. And that's
actually pretty impressive in this day and age of what robots can do.

But, there's, always some, use cases where something's out of the, way and, not
where you expect it. We do have a lot of built in capabilities to fall back to
a, remote operator so that, we don't dictate how that network is built for the
remoteness part, but we, can easily have a human say, okay, you're confused.

Let me give you a little nudge about how to complete this task. And, that's just
kinda where we are today in deploying automation. And, the goal is to get that
fan out, which is a term for how many robots to humans? You need to get that
really positive. one,

[00:39:06] **Audrow Nash:** fan? What is it? is that an acronym or what's the

[00:39:11] **Dave Coleman:** fan out. I'm not, I don't think it's an acronym.
It's just

[00:39:13] **Audrow Nash:** fan out.

[00:39:14] **Dave Coleman:** for one operator, one like remote robot, human
operator. how many robots can they manage? so this is more advanced than Teop
'cause Teop is usually one-to-one. in some of our customers we've seen that you
have actually two people overviewing a console screen for one robot.

But we wanna get down to where these robots are mostly fully autonomous. And
then once an hour, once a day, a human has to drop in and give it a help. But
we, built out that aspect as well.

[00:39:41] **Audrow Nash:** That's really cool. Yeah, I've seen a lot of
companies reinvent that and then some companies make it like their core
competence in a sense, like plus one robotics, is a good example in my mind of
they, I. Do logistics, but when the robot gets a crazy package, like something I
sent back from my Amazon returns, that's just like incredibly poorly taped
together.

then they handle it by having someone just like it, like, they have, some
operator sitting there and then they get the request, Hey, I don't know what to
do with this. And then they can give it direction to handle. So you have
something like that. I think that's going to be an increasingly big thing for
robotics as a, it just helps with so many things to be able to quickly get a
human in the loop.

How are you, how are customers receiving that? How's that going?

[00:40:37] **Dave Coleman:** Yeah, the irony of that is. No one wants it because
everyone wants a robot that's fully automated. They just want it to be so
reliable, that you don't need a human to drop in. So it's like not something
that you really lead, into of Hey, we can make your robot so good that a human
has to control.

You don't wanna say that. it's like a, the dirty secret though of a lot of
autonomy that's in the market already. So my understanding of self-driving cars
today, Waymo and Cruise, they all have big call centers in the background where
when your car runs into a construction site, there's humans guiding it along and
helping it.

And plus one's a great example. my understanding, those, founders are, great,
but they've been using that less and less. That's always the hope is that you,
go to,

[00:41:28] **Audrow Nash:** or whatever it is, you fan out.

[00:41:30] **Dave Coleman:** Yeah, you, wanna go to market as soon as possible,
so you start getting customers feedback, you prove traction, you get your early
revenue.

It's important for getting the next investments and, then, and playing the whole
VC game. but the, value of this human in the loop is that you can do that really
early and know that there's a, man behind the curtains to use a Wizard of Oz
analogy to help just to massage it along and, you gather data.

And a lot of that can become training data to improve your models, to improve
your software. but it's an important thing that gets overlooked, and that's
something that we've, built in from day one.

[00:42:06] **Audrow Nash:** Ah, hell yeah. Yeah. I think I'm seeing more and
more companies do it, and as you're saying with the data and things like this, I
think it's just a clever approach. I. Because as you reduce the number of humans
you need per robot, that gets better and better. You get better margins for that
kind of thing.

You also learn more about your unknown unknowns for this kind of thing, so you
could fit your problem better. So that's, really cool that you guys have that.
And so I guess you're not providing infrastructure for that necessarily, like on
a network level, but you have the capability for someone to control a robot when
they need.

So I imagine it's like code running says, Hey, flag this condition. Then it goes
out to the network and says, Hey person, come help me with this. And then you
have someone take over, do something, it sends the response back to them and the
robot executes it or controls it for a little bit.

[00:43:04] **Dave Coleman:** yeah. I think you could easily put in whatever
network you want. We'd recommend just an SVN to start with, but, yeah, we, we
have the. We have the U user interface built out. There's all different levels
of recovery. Some of them are like pretty high level and easy. So for example,
imagine looking at a camera feed of a robot's view of the world, and it's stuck
and you're, it's not sure what to do next, and you just use your mouse, you
click on something and our software can automatically then pick that object.

Maybe there was like three options and I didn't know which one to go with. and
that's a lot easier than using a game controller to tele op or using little
joint controls. and we offer that too, but I just wouldn't recommend it as a
fast way of doing anything particularly. And there's other companies that are
really looking at like the, VR approach where you, maybe you put on a headset,
you have wireless hand controllers, and, you, it's a one-to-one tele op.

and we've explored that. We built out versions of that as well. But we're, one,
people get dizzy in those headsets, but we wanna provide something that's
smarter than that. So that's why we don't call it pure teop, but it's, just give
it a little nudge.

[00:44:10] **Audrow Nash:** Totally.

## [00:44:11] Human-Robot Interaction and High-Level Commands

[00:44:11] **Audrow Nash:** Yeah, I think like from plus one, like they just,
like you click and the robot figures out how to execute that. So they'll click
on a package on a specific location and it will go and pick it up there. which
uns gets the robot unstuck in the case. It has a broken box to pick up or
something like that.

So that high level just this is some guidance and I assume like Waymo or some
companies that are doing teop at some point or human assisted driving, I assume
that they probably have them give more high level commands 'cause driving it at
a low level would be pretty error prone, I would imagine

[00:44:49] **Dave Coleman:** and a lot of times all you need is to like, have
the robot say, okay, I'm not fully sure what to do here, and this is like a, the
probability of correctness is low. So I'm gonna present my proposed plan to the
human operator and say, this is the trajectory I want to take. This is what I'm
thinking is right.

And oftentimes you can say, yep, that should work. And you just accept it. You
approve it. But if it doesn't work, then you need to get, get a little more
involved and modify the trajectory or maybe go more into a manual control. But
just having that approval step can be very valuable when the robots lesser.

## [00:45:22] NASA Collaborations and Space Robotics

[00:45:22] **Dave Coleman:** And that's something that we built out a lot for
our work with nasa. I brought them up a couple times, but, they've been a, great
partner in all this. and we're bringing that technology from, very autonomous
space operations, bringing it to terrestrial applications. but because NASA's a
more conservative organization, they feel very strongly that there should be a,
human kind of overseeing it and they want it to be autonomous, but also have
the, a chance to intercept, interrupt,

[00:45:48] **Audrow Nash:** Mm-Hmm

[00:45:49] **Dave Coleman:** go no go kind of thing.

[00:45:51] **Audrow Nash:** What? Yeah. Since you brought it up a few times,
what is the NASA work, what are you guys doing? What kind of problem? How have
you helped them?

[00:45:59] **Dave Coleman:** so MoveIt first ran on the International Space
Station a long time ago, 10 years ago, over that on the robonaut 2 program. and
MoveIt was used for controlling this humanoid, and humanoid. It wasn't balancing
on gravity, so it was more like a four legged crawler through a, low gravity
environment.

[00:46:21] **Audrow Nash:** Yeah, I think of it like a spider kind of thing.
'cause it's like the knees were backwards or something. 'cause that was better
for navigating Uhhuh.

[00:46:30] **Dave Coleman:** It's, really cool. Yeah. Unfortunately the program
was pretty, pretty short lived. I think there was something to do with like
space exchange, their payload, the, size of the door and we couldn't get the
robot in anymore.

[00:46:41] **Audrow Nash:** No way.

[00:46:42] **Dave Coleman:** And yeah, so other space applications is, We're
working with NASA on this, like creating a, permanent lunar presence on the
moon. And this is one of the, big objectives, and it's good staging ground for
that. the big picture Martian colony.

so it's, called like in the NASA parlance like Moon to Mars initiative. And
we've got like Elon saying straight to the, to Mars. But there's a lot of,
problems with that. So NASA's more let's prove it all out on the moon again
before we, we go on. And so we're, helping them with, robots inside pressurized
vehicles on, on the moon or on the future.

Commercial Leo destinations, space stations, as well as robots that would be
driving around on the surface of the moon, with wood arms picking things up,
assembling just general purpose, helping astronauts do their job when the,
especially 'cause the, first, 10 years of the moon program, I.

Is the astronauts will be there for a short period every year to help out, but
then the rest of the year we'll have it be more autonomous. And this is all
published, NASA strategy, but we're, very involved with helping that program.
And, I also will, we'll, bookmark a topic of, we've been working on Space ROS to
enable our technologies, our MoveIt pro and all of that to work on the moon
because for things that go in space, there's a, pretty high level of, quality
and software quality you want because you can't just walk over there and unplug
it.

You can't have a, human just plug in a, like a keyboard into your robot and
start debugging it if it goes down, it's a lot more high stakes. And we've been
hardening MoveIt pro not only for commercial applications but for space
applications. That's what I mean by MoveIt is good for research and then MoveIt
pro is the hardened version.

[00:48:32] **Audrow Nash:** Mm-Hmm,

## [00:48:33] Space ROS and Open Source Initiatives

[00:48:33] **Dave Coleman:** and I don't dunno if you wanna talk about Space ROS
at all, but I'd be love to talk about that.

[00:48:37] **Audrow Nash:** sure. Yeah. I worked on Space ROS, actually when I
was at Open Robotics before we were acquired, but yeah. I'd love to. Tell me
about Space ROS.

[00:48:45] **Dave Coleman:** we're, hoping to continue your work. after Open
Robotics has gone through these transitions that you know more about than I, we
talked to Brian Gerkey and Hey, PickNiks very involved with Space Robotics now
and, with these different na, NASA and Space Force programs.

So we'd love to just help lead this open source initiative. So working with OSRF
and, Geoffrey Biggs. we're currently the chairman of the committee and Space
ROS. We've had a couple releases now. So it's essentially, think of it as like a
special distribution of, ROS 2 humble, or ROS 2 jazzy.

I, I actually forget which one we're on for Space ROS, but it's always gonna be
a little behind. It's not gonna be the cutting edge. It's definitely not. ROS
rolling. For those who know what that means, it's like the latest and
brightness.

[00:49:36] **Audrow Nash:** bleeding edge version?

[00:49:37] **Dave Coleman:** Yeah, nightly. and, so we're gonna go through more
quality checks.

We're gonna be a little more careful about what's included, and it's not done
yet, but the overarching goal is to get it up to, a higher safety standards,
which it's not only useful for space, but it's gonna be great for medical,
healthcare, surgical robots, maybe even automotive, even though there's like
ware doing great work there.

so it's good for the whole ROS community. 'cause we've been really, and this is
really your work and, open robotics work. We don't want to fork it. We want to
just, push as much as possible upstream. Do you wanna say anything about that?

[00:50:16] **Audrow Nash:** no, I mean that, that was a great overview of it.
let's see. Yeah, I was involved on it for a few months. It was really fun,
really cool work. And I was working with Michael Jeronimo who was leading it,
and it was just so fun. but no, a great summary and I really agree with you that
the applications, like it's not just limited to space.

And I think one of the big things was all the certifications that we're trying
to get it ready for. So that might mean testing things and specific ways of
making sure that you're not leaking memory or I don't know, just you're, writing
safe code in a sense. those we're all working towards space certification, but
as you said, it, makes it.

A lot better for medical or possibly driving cars because those certifications
are much easier to get because there's a good bit of overlap between say,
medical devices and space ROS, as I understand, or, space certifications or at
least it's easier to prove to committees that might authorize it or whatever the
certification process may be.

[00:51:27] **Dave Coleman:** Yeah.

Yep. So we did, just, we just won a small NASA grant to fund some of this work.
'cause a lot of it's been unfunded to date, just us doing it as a side volunteer
project. But it's certainly important to our, future strategy. but we, do have a
small amount of funding now.

We, encourage anyone to get in the GitHub repositories. We have, I think
fortnightly meetings, technical meetings, and then every, once a quarter we have
more of like a big picture meeting. And so we got all the big players, all the
big government primes, like the Lockheed Martins of the world.

they're coming to these meetings.

## [00:52:06] Challenges in Space Robotics

[00:52:06] **Dave Coleman:** and yeah, there's exciting momentum, but there's,
it's also difficult, this week we had a, meeting for Space ROS, and it's kind a
dark week because there's been a lot of kind of failed space robotics programs.
and I know we're really changing topics here from terrestrial applications, but,
you know a lot about Viper, I'm sure.

And it just got canceled

[00:52:27] **Audrow Nash:** For sure. I worked on Viper for probably two years
or something like this, so yeah, it's a bummer. the Viper project, they were
gonna put a rover on the moon to go to the dark side and look for ice and water
and this

[00:52:38] **Dave Coleman:** Such a cool project.

[00:52:39] **Audrow Nash:** Such a cool project. But yeah, it got scrapped. I
think you're right, like in the last week or so, which, yeah.

Bummer for sure.

[00:52:48] **Dave Coleman:** And then we've seen that with, there are these
missions from, nasa, Goddard os, Sam one, os Sam two. we've hired some engineers
from there and those also have basically got scraped. It might be in limbo land
right now officially. 'cause Congress is slow on stuff. But, it's looking bad
for space robotics right now.

and a lot of the reports coming out of like NASA committees on this is okay, the
software budgets were overrun and it was too complex. And there just seems to be
this growing evidence. To me at least, that software reuse modularity. a
developer platform, if you will, is really necessary for these programs to be
successful.

So that's what we've been really working on with NASA and what we're excited
about. And I think these lessons are equally applicable to, anyone who's into
terrestrial robotics.

## [00:53:32] The Future of Robotics and Industry Applications

[00:53:32] **Dave Coleman:** Like we just see so many companies who get excited
about applying cutting edge robotics to, bathroom cleaning, hotels, restaurants,
you name it.

And then getting smacked in the face with the reality of, how primitive our
tooling is and how, building everything from scratch is maybe not the best
strategy anymore. we're excited to be part of this, changing initiative.

[00:53:55] **Audrow Nash:** Hell yeah. Yeah. I do think the building things from
scratch, it's like even like when I started programming or when I was still in
school, it's okay, ROS Complex to use. I'm gonna build my own. And then. I did
and we got pretty far. But then what it was is I wanted something like Arvis and
then it's okay, I'm starting to build my own arvis thing.

And then it's okay, this is far too much work. Or then ROS bag two, it's I want
something recording all of the message on, messages I'm sending acROS. And then
at some point the pragmatic part of me wins. And I then learned ROS two and then
thought it was a very good initiative for the community.

but I feel like a lot of companies also do this where they start being purists
and being, ah, we don't need all the overhead. And then they see that there are
reasons why people are using these, complex kind of prickly software. for some
of the ROS two stuff where it's not that easy to set up and you need to be on a
specific operating system and things like this, but there's still a lot of value
there.

[00:55:01] **Dave Coleman:** Yeah. I've always told people that you should use
as much existing software out there to get your, your basic prototype together.
I. There's a lot of options paid and open source. And then after you have that
initial thing going, look at what part is really gonna differentiate you and,
maybe break off and, like really optimize one piece of it, but don't try to bite
off all of it because, only the largest tech companies can afford to do that.

And even those tend to fail. I've seen a lot of big, Toyota and Amazon and
Google initiatives come and go and they had unlimited budget, but bit so much
that, still it didn't quite work. And I'd say that it's a funny thing that
robotics does that I don't see as much in other industries, but maybe I'm just
not in those industries.

[00:55:58] **Audrow Nash:** I think to me, robotics, so I, do a lot of side
projects. and lately for the last like maybe three years or something, a lot of
them have been web related 'cause it's just so damn easy to make web stuff work.

[00:56:14] **Dave Coleman:** Yeah.

[00:56:15] **Audrow Nash:** but my thought is that robotics could become
something like web where we have very good tooling, very established
infrastructure, like good, players in very specific hard problems.

Like in web there's like auth and databases and all sorts of things where it's I
don't want to learn how to do all that myself. Or like the hosting of it and
whatever. But robotics, I think we are like where web was 20 years ago or. 10,
15 years ago, something like that where it's still painful to do things and it's
starting to get good enough that we're seeing companies like Locus Robotics that
have, I don't think Locus has technical founders, or at least they started with
people that are in the industry.

I may be wrong about this, but

[00:57:08] **Dave Coleman:** there's CTO, he's, a pretty big ROS expert. Sean.
Yeah, I'd say he's a technical founder, but they, did, they're very smart,
bringing in the CEO, who's like an industry knowledge expert, and I think that's
the winning formula that you're getting at.

[00:57:22] **Audrow Nash:** Yeah, exactly. Where you have people that are coming
from the industries that they're trying to work in doing these companies, and
that's making it much more pragmatic. But I do think we need, there's a, lot of
like rough edges relative to something as established as web like, and there's
probably A hundred times or more web programmers than roboticists too. And
there's probably a hundred times more money also because of all the big
companies. so that will, move all those edits down, but I think it will change

[00:57:54] **Dave Coleman:** Yeah, because like in the, web world, no, no one
would try to just pull in all these com, sorry, build all these components from
scratch to the level that I still see robot companies trying to do.

[00:58:04] **Audrow Nash:** Totally.

[00:58:05] **Dave Coleman:** and then there seems to be some kind of like belief
that there's really deep value in the IP and the robotics ip, the robotics
algorithms.

and I don't wanna, I'll just say this generically, it's not to insult any of
our, past customer base, but, some of the customers we worked with, we, sent all
these NDAs, we have all these legal agreements and we, look at their code and
it's. This is, they've advertised it as something really valuable and secretive
and we look at it and we're like, oh, that's from textbooks.

That's not something like that. Here. Here's another version of it, like over
here that's very similar. So it's there's I think a, misheld belief that there's
a lot of a value. and really what I think to Locus example, Rick, the CEO, like
it's, more about market knowledge execution of penetrating that market, knowing
what your competitive advantage is.

And maybe that competitive advantage isn't the robotics side so much, but it's
how you package the business model to work with that industry. 'cause there's
still a lot of like resistance to robotics and automation from people outside of
the average people listening to this podcast and robotics, I'd assume.

and I think we forget that as folks who are really in this industry, that
there's such expertise to penetrate. 'cause PickNiks looked at specific
industries that we wanted to maybe tackle. you still hear me?

You hear me now?

Yeah, so I, I got cut off for a second, but I, think the winning model is yeah,
knowing how to package the robotics in a way that works for the business model
and the needs of that specific industry. And, even something as simple as what
to call the buttons in the ui. a lot of people don't understand what the word
Cartesian control means outside of our niche.

So maybe you need, like I hear some industries call it like endpoint control.
It's a really silly thing, but modifying those, nuances can really make or break
how successful your robotics application is.

[01:00:02] **Audrow Nash:** Yeah. Especially depending on who's using it. So if
the people are not roboticists, that makes a lot of sense. which probably most
people are not roboticists. So that probably make a lot of sense. Yeah. I'm
seeing one thing that's very cool to me is that. So I've been podcasting, we
talked about before or before the recording, I think maybe 11 or 12 years now.

Robohub, Sense Think Act. Now this, and I feel like the companies that I'm
interviewing in the last couple years are doing this way better than any time
before. in my experience and I, feel like I was talking to good companies
before, but they are finding a market and finding a good business model.

And it's more about how do you deploy in the market and stay and create value
right away, but then stay valuable and maybe you grow to something even more
valuable. And it's so exciting, like these pragmatic founders that are, starting
companies and the great direction and traction that it seems like they're
getting

[01:01:06] **Dave Coleman:** Yeah. And we say all this in, I think PickNik and
myself we're equally guilty of we focus just on the robotics. from day one,
we've always done that. We don't have an in application that we're not just
targeting like robots that make burritos really well and auto autonomously,

[01:01:23] **Audrow Nash:** Yeah.

[01:01:24] **Dave Coleman:** And, so I'm not like, maybe not taking my own
medicine here, but I think we are in a unique position where we're a really
recognized brand of expertise for robotic arms. We've got really well positioned
in the, ROS ecosystem. and I do think the industry could use players who are
providing the tools and the engines and the runtimes.

And I think we have a, good head start here and we want to keep doing that, but
we really are dependent on our customers and our partners tackling those
applications. And, we want to, we wanna enable them. So I actually think it's a
good segue to talk about, a customer that I mentioned to you earlier before the
call that we just published a, a case study with 'em.

## [01:02:06] Hivebotics Case Study

[01:02:06] **Dave Coleman:** It's on our website. It's top of the list for case
studies, so if you wanna see the video. But Hive Botics, is an example. So their
CEO, Rashab, he's like really focused. He's more of a business person focused on
how do we, bring. Bring like bathroom cleaning robots quickly to market. And so
he's, instead of spending years in software development and working on the
research of it and technical risks, they, chose to work with us.

And, so we're really honored for that. And we've been able to, in a matter of
months, get them a working prototype. We got a video on our website of it,
driving through, a bathroom and cleaning various sinks and toilets and stalls.
And so I wanna, I'm gonna give a shout out to their success.

And I, I hope that, we can continue serving 'em really well. But that's kinda
the model that we're looking at now, is founders who do have this very clear
application and business model who can get those early contracts and pilots with
customers. knowing that there are companies like us who can just de-risk that
whole technical side and, do it really cheaply.

[01:03:08] **Audrow Nash:** Mm-Hmm.

[01:03:09] **Dave Coleman:** It's kinda, a good example of what we're talking
about here.

[01:03:12] **Audrow Nash:** Yeah. You have the expertise. It's similar to the
problems you're already approaching. That's super cool. I wonder, so it sounds
like they, one thing that'd be super cool, and this would be funny as like a,
silly. But potentially good business model, is you do that kind of thing, but
you take equity in the companies that you help for this kind of thing.

So it'd be like, you're like almost like a vc, but you take equity by helping
them solve some of their technical risk. that would be pretty cool, I think. I
don't know.

[01:03:46] **Dave Coleman:** Yeah. Never really considered that. But that's,
it's a good point because we are really like deeply embedded as partners with
our customers.

[01:03:55] **Audrow Nash:** you help them move a lot faster and, you could be
more long-term partners for this kind of thing. Like they could pay you but also
give you equity in a sense. I don't know. I'm just, I don't know why I've been
thinking about like the VC angle. I've been thinking about like in, in some past
interviews because if you have say way more information or you can help them
technically de-risk or something like that, there's not really a reason you
shouldn't take advantage of that and get some of the upside if you help the
company.

[01:04:30] **Dave Coleman:** Yeah.

[01:04:31] **Audrow Nash:** And one company, I'm editing the interview now is
Koop, and they do insurance. And during the, during the interview, it's like
they have all of these metrics on the success or not of the company. It's like
they could use that to be a very powerful VC arm because typical VCs are not
even some, are people in technology.

but it's interesting if. Like you and your company, you are literally de-risking
a problem, the technology for them. And that's one of the most valuable things,
and that's one of the biggest risks that VCs are trying to get around. Like
they, they need to look at the founders and the credentials and things like
this, whereas you guys can just be like, oh yeah, I'll do it.

I'll de-risk it for you. Now you guys figure out the market strategy and we can
help you going forward. We can tell you that RRT is gonna be way better for
planning than some other algorithm or whatever it might be. and show them the
implementation. Just a silly thought. I dunno.

[01:05:32] **Dave Coleman:** yeah, Our current strategy is to come in really
affordable at the start. and so we, we think we've got a, for what we're
providing really low price point, like I'm talking like the cost of, two months
of an engineer. it's what we're charging essentially. and, we can, but to do
what we, can provide you would take probably a year or two.

So it's a huge initial investment, return on investment. And then, as. If, and
as were, us, let's say as, our, customers are successful and they, scale up,
then we're looking for a very small percentage of return on that. it's not
equity, but there is some similarities I'd say.

But, we, want to meet, projects where they're at. So oftentimes in the first
phase of the prototype, the pilot stage budgets are small and you're really
trying to prove to your higher ups or to your investors that, this is a good
thing to invest in. So we're, trying to match that budget profile.

[01:06:31] **Audrow Nash:** So it's a beachhead, basically into the business.
And from there you can do more work for this kind of thing. I wonder just, put
it on your radar as like a consider taking equity, especially in the ones that
you think are super promising. let's see. Okay. Super cool. And,

[01:06:50] **Dave Coleman:** had a thought about, about ROS. if we wanted to
circle back a little bit before moving on. So this is a little about ROS. Yeah.
just a thought from earlier when I was bookmarked in my head is I'm seeing a
trend in our industry as well where, ROS continues, I think to grow maybe, it's
slowed down its growth, but like it's still very prominent in all the robot
companies that I talk to at least.

but what I'm excited about and this is weird to hear it say this, but I think
the scope of ROS is somewhat shrinking and I think that's a good thing. the ROS
that first came to market in like 2010, it was attempting to do a lot of things.
So people would think of it as the navigation and the motion control and arvis,
the visualizer and their simulator.

And there's just it's got everything. And I think that the more proper scope of
ROS, and this is, I. This is a little bit, I dunno a hot take here, but it's,
the middleware, it's the message passing, it's the, standardized, interface so
that all these different actuators, motors, sensors, we want them all to be
talking the same language so that when you buy different components from
different vendors, you can plug 'em all together.

and then what I'm seeing in the industry is you're seeing these companies like
PickNik and like others providing software components that provide those higher
level capabilities or, you can develop yourself. That's always a, perfectly good
answer, but I think that's a good trend for, our industry so that people are
specializing in and, obviously open robotics is they need to focus because
they're, not a huge organization post acquisition.

And, so that's, kinda my take on that. And I, still am a big fan of the me the,
middleware. I'm excited about. they're changing the middleware maybe away from
DDS and,

[01:08:36] **Audrow Nash:** I can't wait.

[01:08:37] **Dave Coleman:** because, that's, there's a lot of good things
happening there.

[01:08:40] **Audrow Nash:** for sure. Yeah. I like your hot take. I agree with
you. I think that it getting smaller is good and the, like I, I agree we're,
giving more to the community and we're seeing high quality maintainers like you
guys that are working on things or Fox Glove and their mcap, which helps with
ROS Bag and things like this.

so I think it's really nice that we can give back some of the parts that we. Or
not maintaining as well, or they were like edgy projects and something in the
community is coming back to replace them better. that to me feels very healthy.
And I also, I would add that in addition to just middleware, it's infrastructure
because we have a lot of stuff that all makes the community connect.

so there's like the build farm and the way of getting all the packages that we
have. There's the, all the testing related things we have, and these as well as
like the documentation and then the discourse and things like this that I think
are a big reason that the community is as big and flourishing as much as it is,
because we've set all that up and it's almost like we get to play mediator now
in some way and just have people use a lot of what we've built, and maintain it
and that feature slowly. But I think consolidating what we actually have as our
core value add is probably very smart and probably a very good sign for the
maturity of the robotics community.

[01:10:18] **Dave Coleman:** I agree. Yep.

[01:10:22] **Audrow Nash:** Oh yeah.

[01:10:22] **Dave Coleman:** Yeah, that, that was, only thought I wanted to
bookmark, and I think you were going on to a new topic.

[01:10:27] **Audrow Nash:** I don't know, I was just talking, but I did wanna
make sure we talked about, mobile manipulation and because you've mentioned it
and it's not what I think of for MoveIt, I think of robotic arms doing stuff,
and mobile manipulation. I know it's been technically possible to do, but I
think you're supporting it more now as like a first part, first party service or
first party part of your application.

So I'd love to hear more about that.

[01:10:55] **Dave Coleman:** Yeah.

## [01:10:57] Mobile Manipulation and Humanoids

[01:10:57] **Dave Coleman:** if, for those who might recall the PR two robot,
that was the initial flagship robot at Willow Garage, the company that started
ROS effectively, and so move, it was actually developed for the PR two. It had
two arms and it had wheels. And I think people often forget that. But from the
very beginning, move's always had some level of concept of a holonomic base,
which is a robot base that can move in all directions.

And I think that's been kinda lost. It's, never fully developed, but it's,
always been in MoveIt, but we're really making that a first class focus. So
we've, done some open source, contributions back to MoveIt, to support that. And
then we're also building out a lot more MoveIt Pro, the, that is going to, it's
already out there really allow for doing advanced, planning with wheels and I,
and one, one reason why we think this is a hot topic right now is humanoids are
huge.

They just got funded so much and there's a lot of other folks who've been in the
industry like myself who are a little more skeptical of the, of, the full, craze
of it. I think it's a bubble personally. What do you think?

[01:12:05] **Audrow Nash:** I think it's like autonomous cars. I'm a lot of the
same. Types of things seem to be occurring with, autonomous vehicles, or with
humanoids as a human, autonomous cars. It's like I was, feeling like I'm
reliving the same phenomenon when there was all the craze and then it's like,
why is this, oh, like the dynamics, the hype is pretty similar.

There are several things that are different, but I think that there, so for
example, an autonomous car might be traveling at a speed where it's unsafe to
have a glitch, and then you really need super safe systems and that's very
expensive. And a at a humanoid can just like pause and freeze most likely in
most tasks.

so there are slightly different dynamics, but I think it'll be a little bit like
autonomous cars.

[01:12:58] **Dave Coleman:** and by that, I, what I'm hearing you say is like a,
long tail investment and we're gonna be, it can go through a couple waves of
it's almost here and then it's not, we're gonna disappointed.

[01:13:10] **Audrow Nash:** Yeah. and also I talked, with, let's see, I talked
with an investor at F Prime. And they, what he was saying is that from his
perspective, investing in them doesn't really make any sense because there is no
clear payoff date when the technology's ready for this kind of thing, and
there's no clear market.

So it's a lot like I, autonomous cars had like the okay, robo taxi or whatever
it might be, but I think. Humanoids. There's some use cases, but they're
probably small markets like Melanie Wise, from Agility Robotics convinced me
that they're good for her use case and they were doing Amazon tote delivery and
things like this.

and so there are some advantages to lags in that case, but I think that the,
it's narrow markets that'll be useful. It's not the general thing, at least for
the next several years, I think five or 10

[01:14:16] **Dave Coleman:** I have a contrarian view of this. one example I
like to give is, most so humanoid would be more expensive, and of course we're
seeing prices drop from China and so forth, but I think they're inherently gonna
be more expensive hardware than like wheeled robot

[01:14:30] **Audrow Nash:** Yeah,

[01:14:32] **Dave Coleman:** and

[01:14:33] **Audrow Nash:** are already super expensive.

[01:14:35] **Dave Coleman:** Correct. But I just, an observation I have is that
most applications that can afford a, a humanoid robot are gonna be already
handicap accessible.

I don't think an average consumer can afford a humanoid in their house and
houses where you tend to have like multi-levels and steps and staircases. But
with handicap laws, we have elevators, we have pretty flat surfaces, so I,

[01:15:01] **Audrow Nash:** the

[01:15:01] **Dave Coleman:** have a hard time.

[01:15:02] **Audrow Nash:** that's not necessarily true elsewhere, but the US is
the biggest market and I think

[01:15:06] **Dave Coleman:** It's true.

[01:15:07] **Audrow Nash:** or a huge market and very consumption like driven,
whereas I don't know, China for example, is not as much of a consumption
economy, these kinds of things.

[01:15:17] **Dave Coleman:** That's true. That's a good point. And that's a very
US viewpoint of mine, like when I go to Europe, but things are way

[01:15:23] **Audrow Nash:** different. Not handicap accessible generally.

[01:15:25] **Dave Coleman:** And that's just for historical reasons, right? The
buildings are so old. okay, that, that's one view. But anyway, I, just think
that the mobile manipulation's a little bit, it's, certainly not in the hype
right now, and that might be a signal that it's a mature technology.

not that like we, we don't see a, lot of. Like applications out deployed yet for
it. But I just think that's gonna be ready much sooner than humanoids. So that's
what we're focusing on. And the people have been working on this for a long
time. the, toilet cleaning Hi Botics demonstration I just talked about.

That's

[01:16:03] **Audrow Nash:** out the video.

[01:16:04] **Dave Coleman:** that's all mobile manipulation. We've got a couple
others. NASA's really into it right now with us. and a few more that we'll be
announcing soon. I just wanted to get that message out is that I think there's
still a lot of room for wheels that we're undervaluing.

[01:16:20] **Audrow Nash:** Oh, totally.

[01:16:21] **Dave Coleman:** kind my take.

[01:16:21] **Audrow Nash:** I completely agree. I think a lot of the best
companies that I've been talking to are companies that are just doing robots
with wheels and having them like do some task, whether it be mowing or just
driving around, sensing something, whatever it is. or some, simple, I don't
know, some simple tasks that kind of comes with the vehicle. I think that my, my
thought on it is that manipulation and mobile manipulation, particularly
exciting, I suppose is, probably where just navigation was maybe like five or
eight or 10 years ago. And so I think probably the next wave of robotic startups
that we're gonna start seeing, Chef Robotics is a great example of a company
that's doing manipulation and they're, it seems like they're killing it.

my last interview was with them. The last one that was published before this
recording. and they

[01:17:24] **Dave Coleman:** them well. I'm an advisor to Rajat.

[01:17:26] **Audrow Nash:** yeah, Rajat is awesome. but they're killing it. Like
they're a company that I really would bet on and they are probably the start of
a bunch of promising companies around manipulation, in my opinion.

And we're gonna see more and more of them, most likely in the next 10 years say,
would be my

[01:17:48] **Dave Coleman:** Yeah, I agree. I'm, really excited about all the,
applications that I, think are being under, considered for robot arms and I see
it a lot because we, talk to these companies at least in like kind of
preliminary discovery calls on should we collaborate. There's just, there's so
many out there that are.

Are emerging that maybe haven't come to market. But yeah, chef had a, that big
release, I think last week, before big announcement. So I've been following 'em
for a couple years. I'm, glad they're finally outta stealth. it's amazing what
they've done with, manipulation and, it looks like a standard hardcoded
manufacturing problem, but it's not, like the, different styles of scooping and
the variable ness level of the different bins and the different, like
viscosities and like material handling of different kinds of food.

There's a lot of sensing happening there. There's a lot of dynamicism. And so I
would call that a, unstructured or a semi-structured problem. And there is some
structure in that, where the bins are and like roughly how deep the bin is. And
there, there's a lot of things you do know, but it's, a really impressive
example of what can be done in this next wave of manipulation.

[01:18:59] **Audrow Nash:** totally. So I think we're gonna see more and more of
that. And I still do not think we're out of applications for mobile robots in
general. and then some mobile manipulators that's gonna open up a whole nother,
whole nother set of robots, robot applications. So exciting times I think, ahead
of us.

## [01:19:20] Challenges and Opportunities in Mobile Manipulation

[01:19:20] **Audrow Nash:** Let's see, what do you, what are, so in my thought,
man, mobile robots, that's I don't know, say that in the last 10 years that's
really been becoming a thing, especially, and you're seeing like outdoor mobile
robots and things like this, like tons of applications there. Now we're thinking
that mobile manipulation is gonna be such a great opportunity.

What are some of the challenges of why it hasn't been in more companies?

[01:19:51] **Dave Coleman:** great question.

[01:19:53] **Audrow Nash:** what, yeah. and, then also what has been recently
solved and then what ones are looking like they'll be solved soon. And like how
do you look at the space, 'cause you have a much better idea of this than I do.

[01:20:10] **Dave Coleman:** I, kind of wanna just give more background for a
second and say there's like kind of two categories of mobile manipulation that
we consider, and we put this on our website recently. There's a page on this,
but one category is whole body planning, and that's when you're moving your
base, your wheels and your arm at the same time.

And that can result in a faster cycle time. So the robot's actually, it's, this
is what we do as humans. We might walk by, we're walking outta the door to get
to our car of our house, and you grab the keys on the coffee table and you don't
even stop walking. You just swipe it. And that's where we wanna get to with,
robots.

And we're working on that. We, have some examples of that working. And then
there's the, more traditional way of you consider the navigation of your base as
a separate step before you move your arms. So classically you would fold up your
arm into a stove position, let's say, and then you drive acROS the room, you
stop driving, and then you unfurl your arms and you grab something that's, kinda
the classic way.

So we call that like navigation plus manipulation, kind of two separate steps.
And the reason why I brought that up is because, when you stop and then re like
you scan your environment, you use your cameras to understand things. That is
easier because you have to recalibrate basically.

You don't know exactly where you stop. The wheels have a lot of, skid and, slip,
and there's just you're not exactly sure where you ended up. So you have to have
a higher level of proprioception or like self-awareness of where the robot is in
a room with respect to a table or to an object you wanna manipulate with.

And so all that combines into a, more complicated AI and algorithmic problem, of
understanding where you are. So that's part of it. It's just it's, harder,
especially if you're gonna do it dynamically where you're driving and grabbing
at the

[01:21:56] **Audrow Nash:** that's hard For sure.

[01:21:58] **Dave Coleman:** Yeah. And then the other side of it, I would say
from a business perspective, it's just it's a higher, it's more expensive robot.

And the more expensive your robot is, the harder it's to make the business case
work. So we talk to companies all the time who they're like an innovation group.
They're doing some analysis and we're working with them and they come back from
their executives and after they do the. The cost benefit analysis, the ROI, it's
doesn't quite work.

the robot's too expensive and the, and so forth. And so that's still what we're
battling. So you said earlier that the bases, the AMRs, the AGVs, that they're
pricey. That does continue to be a, thing that suppresses the application,
whereas like a $30,000 robot arm, maybe it's 20, maybe it's less, that's a lot
easier to drop in as it compared to I don't know, an $80,000 mobile manipulator
or a hundred thousand dollars system. So that's, another version of it. So
there, the sum it up, there's like the, cost of the robot goes up and then the
complexity of the software and the reliability goes down.

[01:22:55] **Audrow Nash:** Definitely. Yeah. And you might need more expensive
hardware to do that. More challenging action, so then the cost goes up even
further. Yeah. I think mobile basis, that, that case you were mentioning where
you just drive up to something and then manipulate it from like a BA mobile
Mobility plus, manipulation.

There's a lot of applications there still too, and that's probably a bit easier,
but, and also you can just have an arm, but I suppose it's probably a bit easier
if it is mobile for it to move to whatever the problem is. but one thing that I
was talking about with Machina Labs. what they were doing is, or we were talking
about robotic arms and one of the things that came up was a robotic arm is
probably, you were mentioning that they're cheaper, but it's like an interesting
way to do it that makes me think they'll be more valuable than humanoids in many
applications is it's the cheapest, most efficient way to move something in
space.

whereas if you have the whole rest of the robot, you have a bunch of joints that
aren't doing things, or maybe you're actively balancing and it's, or you could
just have a six foot robotic arm that is like motor link, for the full size of
the arm and then it can just move in the whole workspace.

And it's, a much more optimal form factor for doing a lot of tasks. And I can
imagine that this is probably true, especially in the US as you're mentioning,
where there's very good handicap, accessibility in most public buildings, which
is probably gonna be the place you'll see more robots sooner because they have
more money versus an individual in a home with stairs.

[01:24:47] **Dave Coleman:** Yeah. Yeah. Yeah. And there's, also, we, have a
number of customers using just gantries, a linear rail. That's another way of
increasing your workspace a lot. You can hang 'em from a ceiling and make it
still very accessible to humans. so that, that's another way of, we add another
degree of freedom to a robot arm.

but I personally prefer the, wheeled version. It's a lot less impact on your
physical building, having to bolt a rail to it.

[01:25:13] **Audrow Nash:** Yeah. Ceilings are very exciting though for robotic
applications. Like I'm seeing a lot, there's a few very good use cases and they
seem to fit really good, like security. but let's see. I wanted to like, so
starting to wrap up, where do you see PickNik?

## [01:25:32] PickNik's Vision and MoveIt Pro

[01:25:32] **Audrow Nash:** what do you think for the next, five years?

Where, do you think you guys are headed?

[01:25:36] **Dave Coleman:** Yeah. love that question. we're all in on this
MoveIt Pro platform. I, started this podcast with, and. pretty much going
forward, all of our projects and all of our engagements with the customer, they
all are building on top of MoveIt Pro. And right now I mentioned that we do some
services.

So some of our customers we're really working heavily with them to take the
MoveIt Pro platform and apply it to their application. we call those like
turnkey solutions. we do a lot of that right now. but where we want to go is
making this as self-service as possible. and, there's still more work to do
there, honestly.

we are a, a growing company. but we, wanna get to this point to where it's like,
a gaming engine where you just download it off the internet, maybe watch a few
video tutorials, and just really equipping, the next wave of roboticists to, be
able to do a lot more than they can do now.

in a very reliable way that has a clear path to like deployment and a production
system, even a flight system for, space applications. So that's, one dimension
of where we're going. We, wanna just find more industries that aren't really
being served by robotics right now outside of manufacturing, and really change
their mindset.

So we, we do a lot of these like solution studies as, a service that we have
where we go into like large companies and enterprises and we really sit down
with them over a series of meetings. We'll fly out sometimes and talk to them
about work where they wanna go with automation. And they have these preconceived
notions of the limitations of PLCs and industrial robot arms.

And we're like, no, we can do way more than that. And they get really excited.
And we really emphasize that we're not here to just do it for you, but this is a
collaborative thing. So we augment their teams. They, have their internal
automation team. We, give them the tools to like own it themselves.

We just kinda give 'em a, early push saying, all right, here's like a, prototype
and simulation and then let them run with it. And so that's, kinda where we're
going of just like rethinking what traditionally we were limited to, like an
area that we're excited about its assembly. and that's, again, a little more
manufacturing focused, but there's a lot of hard assembly problems that we think
we have the building blocks to solve now that weren't previously possible.

[01:27:53] **Audrow Nash:** Oh, that's awesome. Yeah. Assembly is an awesome
area. Okay.

## [01:27:58] Conclusion and Future Prospects

[01:27:58] **Dave Coleman:** And then I guess the last thing I wanna say is we
wanna have robots building moon bases. And that robot's not launched yet, but
we're working hard on it. I can't wait to be on a podcast in the future talking
about how our, our robots have built a, human habitat up there.

[01:28:12] **Audrow Nash:** That's awesome. Hell yeah. Yeah. I can't wait for
that too. Alright, thank you Dave. This was a blast.

[01:28:19] **Dave Coleman:** Yeah. Thank you Audrow. This is, an honor to be
here again and, thanks for all the great questions.

[01:28:25] **Audrow Nash:** All right. Bye everyone.

[01:28:28] **Dave Coleman:** See you.

[01:28:28] **Audrow Nash:** So we've journeyed through the world of robotics
with Dave Coleman from PickNik Robotics, and I hope you're as amazed as I am by
the versatility and potential of robotic arms. We've touched on how they're not
just for assembly lines or manufacturing anymore.

They're becoming integral in dynamic and unstructured environments like farms,
hospitals, and even space.

Now I leave you with a question. Where do you think robotics could make its next
big leap? Could it be in home automation, disaster response, or maybe just in
art and entertainment?

Thanks for listening, and until next time, bye.
