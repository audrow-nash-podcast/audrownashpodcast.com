## [00:00:00] Start

[00:00:00] **Audrow Nash:** Hi, everyone, Audrow here, In this episode, I share
with you several interviews that I recorded at ROSCon in 2024, in Denmark. For
those of you who don't know, ROS is a global robotics conference hosted by Open
Robotics that brings together a lot of the robot operating system or ROS
community. It's super fun and a great way to meet a bunch of the people building
the future. The first interview is with Marcus Scheunemann, who is the head of
autonomy at Dexory. Dexory is based in the UK and is one of the most promising
robotics startups I've talked to in a while. They just had their series B and
are scaling rapidly. The most interesting part to me is that they put a huge
amount of effort into their testing infrastructure, and that seems to be one of
the reasons they're able to scale so fast. The second interview is with
Christine Fraser, who's the CEO and founder of Asimovo. Asimovo is making it
easier for teams to make robots by making it easier to have repeatable developer
setups. They build everything on Kubernetes, which gives them a lot of
advantages, but I think we don't often get in robotics. You may want to use it
yourself. Finally, the third interview is with Angelo Corsaro, who is the CEO
and CTO of ZettaScale Technologies, and it's about Zenoh. If you were at Rasgon,
you'll know that Zenoh was the big topic for the conference. If you don't know
ROS 2 uses Data Distribution Service or DDS as its middleware. But DDS wasn't
designed for robot applications. And there are some rough edges, like there may
be a lot of initial configuration to get it working, and it doesn't scale great
for multi-robot systems. Zenoh works to address the rough edges of DDS, and will
be the default middleware for a future ROS 2 release. You can already use it if
you want to build from source. This was really exciting, and it was great to
hear about Zenoh firsthand from Angelo. I also recorded another three interviews
that couldn't fit into this episode, so they'll be published on X and YouTube in
the next weeks. Grab a snack, get comfortable, and I hope you enjoy. Alright,
would you introduce yourself?

## [00:02:12] Introduction to Dexory

[00:02:12] **Marcus Scheunemann:** Yes. Of course. I'm Marcus Cinnamon, and I'm
the head of autonomy in Dexory. And yeah there since three years. We are in the
logistics space and building this kind of robot since 2 years now. So this guy
is actually a year old. we kind of released it when it was, it's, the New
Orleans, New Orleans ROSCon. And yeah, that's what it is.

[00:02:33] **Audrow Nash:** So tell me a bit about the company. How large are
you guys? What stage of funding are you at? Like, all the details.

[00:02:40] **Marcus Scheunemann:** What's the size? Like, two years ago, we
didn't had a robot, and we had an idea we wanted to go into the logistics space.
We wanted to do revolutionize. Disrupt how you say it. There's the logistics
sector and the inventory management. So no robot. Two years ago. Last year,
March 2023. In March, we had our first deployment. So, well, there's a first
robot. We had one robot. We were 20 people. Something like this. Now, this time
around, we are 200 people. Yes.

[00:03:12] **Audrow Nash:** That’s is so exciting. More than.

[00:03:14] **Marcus Scheunemann:** 90 robots. Yeah. Building three robots per
week of this size and and deployed in three continents. Eight countries. So,
yeah, it's been a ride.

## [00:03:24] How Dexory Landed Series B

[00:03:24] **Audrow Nash:** And you just got your series B funding, if I
understand correctly. That's so exciting because that's a very hard one for
robotics companies I hear because you start you have to be coming into the
scaling phase for them, for investors to want to do a series B And you are
there, you're starting to scale and you've come very quick. Two years, you say
from no robots to robot. Yeah. No, I mean.

[00:03:47] **Marcus Scheunemann:** It's a it's a constant fight that challenges
everybody who went to the scale up knows that. Right. But that's lots of fun
starts because I loved working on robots. I loved working on prototypes. Yeah, I
know actually the whole vision that all they said. And how do we have to design
code and how do we have test the robot to bring it to scale and production izing
it? Now I can really unfolded and actually make it happen. So for me personally,
it's a challenge. I love it, but it is. But it is. Right. And you are absolutely
correct. Serious B is hard because currently investors are, cautious, let's put
it that way. They want to see some multipliers. They want to see some revenue.
Yes. And creating revenue fast is a challenge. So you have to get out with the
robots very, very early, create revenue and then multiply.

[00:04:30] **Audrow Nash:** Definitely. And because the create revenue fast is
kind of the key part to me because many companies, if they are creating revenue,
but slowly it might not make sense as a venture capital company because it's not
going to get the returns they want on a timeline they want. And it's exciting
that you guys are so quickly creating value. So like so much that you're
scaling, it's unbelievable to go to so many robots so quickly.

[00:04:56] **Marcus Scheunemann:** And I thank you for that. I mean, it's really
appreciate it actually get a little bit goosebumps there then then thinking
about. So sometimes we look at our venture, our journey and it's still a bit
unreal. Yeah. But I tell you two things. They have like, the pace is fast,
absolutely essential. So we need to be fast in the space because, yes, we found
a solution to a problem that exists, but I, I must say someone else is also
working on it. So the pace is essential. So we need the money, we need the
venture capital and we have to create obviously there's, there's this traction
then. Yeah, they needs the revenue. And the second part is and that's probably
interesting for the listeners, I was very skeptical to do that, to be fair. So I
learned a lot, from my founder.

[00:05:39] **Audrow Nash:** The scale quickly.

[00:05:40] **Marcus Scheunemann:** Want to move to the customer fast, let's put
it that way. So there's a robot you have and you have a vision. How accurate and
how nice it should do everything. So we didn't compromise on safety. For matter
of fact, we always tested the safety inside. Oh that's fine. But I thought like,
man, we can do a bit more on the performance side. But I learned then from, from
from my, from my founders. They were like, no, let's push it out to a customer
and learn more. And I like to learning more about it. But I was also like, is it
not? There is another risk, right? But as long as you keep it safe, you want to
be as fast as possible. It's a customer. It's a learning we created, made a
double as a pace.

[00:06:16] **Audrow Nash:** I wasn't saying why bet. Yeah, yeah. Because if
you're not, you're like you're iterating, you're learning lessons. You're
actually figuring out what the customer wants and how to charge them, and what
kind of things are sticking points for your technology that you have to focus on
exactly. That they're getting out there early makes a lot of sense, and you
have.

[00:06:33] **Marcus Scheunemann:** Assumptions that are wrong. I only as an
engineer, you see maybe the problem a little bit different then. Then your
customer sees the problem. So you get the learning in and you adapt and you work
on the right stuff early on. So that's that's the important part. And I think,
yeah, it might sound arrogant, but I think this one, we actually did very, very
well. That's why we, so fast.

## [00:06:52] The Problem and the Robot’s Solution

[00:06:52] **Audrow Nash:** Companies do this this year. I feel like getting to
series B is a huge milestone for robotics companies, and most fail before it.
Yes. I'm so, like a little arrogant perf. Okay, well, you deserve it. That that
really kind of it. Yeah. So okay. So the company it sounds very promising what
you guys are doing. Tell me a bit about the problem you're solving and what you,
robot like the approach that your robot is taking.

[00:07:18] **Marcus Scheunemann:** Okay, so the problem space is, loss
inventory. Pretty much. So, like, the customer wants to track, ideally..

[00:07:26] **Audrow Nash:** How large of a problem is this? Because I've heard
that it's like half of inventory or something goes missing or something like
crazy numbers. Yeah. How significant of a problem is lost inventory. Well.

[00:07:37] **Marcus Scheunemann:** I'm not a sales person here. Right. So I, I
don't know exactly what we are saying normally, but when I speak to the customer
in the floor space, there's like they've depending on the customer if they have
service max or depending on one value of an item. Right. Like one pallet can be
millions worth if you just place it into the wrong aisle in the warehouse that
is 1000 100,000mi², square meter big.

[00:08:04] **Audrow Nash:** It's good for that line forever.

[00:08:05] **Marcus Scheunemann:** It's it's yours forever. Yeah. So I was at
the customer side that he found the box, which was ten years old because that
doubt our our results, they were like, no, that can't be the case. This is, this
is this can't exist anymore. But we found it and they're like, wow, that's all.
So we, so it just gets lost. There are two ways, you know, to to bring value.
It's either high good items that are getting lost and, but it's just like
they're not there on time anymore or just in time in general. Right? If you have
to, if you have to stock a trek, truck, which is going to the, to the facility
for production, and you don't find everything just in time, then you have a
problem. You have a lot of costs. So to bear for, for the person you you don't
deliver the right goods too. So these are the two main points now.

[00:08:51] **Audrow Nash:** Okay. And so to manage inventory your robot has this
large telescoping set of sensors. Yeah. So it can scan all the aisles that have
stacks and stacks and stacks of items. Yeah. Right on pallets okay. So that's a
general approach. Tell me a little bit about the robot okay.

[00:09:09] **Marcus Scheunemann:** Yeah. Exactly. So we have this we have this
tower. We wanted to go this a tower to be fast. Right. So what we can create.
And here again, we learned going early to the customer. So our first customers
had smaller warehouses. I'm talking like 20,000, square.

[00:09:26] **Audrow Nash:** And it just seems enormous.

[00:09:27] **Marcus Scheunemann:** Yeah, yeah. And now I have a result. It is
enormous. I mean, like, wow, how can it sets? Oh, yeah. But nowadays it's ten
times bigger where we are going. Wow. And, we, we anticipated large of ours. We
just we are not sure, but this one is like, you have a lot of seats. We can be
service a tower going like this, a full scanning standing face, the long erect,
there's one half a meter per second. You can scan up to 15,000 locations per
hour, which means, like most warehouses have like 100 or 200,000. So we manage,
in less than a day to scan, which is the largest warehouses, which is, which is
creates exactly the value we are talking about. Yeah. It's a real time almost of
what what we consider in warehouses, real time, digital twin of their assets. It
makes them much more productive. So that's why we went for the frequency there.

[00:10:20] **Audrow Nash:** For the speed and everything like this.

[00:10:22] **Marcus Scheunemann:** Also speed. But there's also an element. And
that's why it kind of emerged of another thing as well. So we came from retail.
We had a really cute my favorite mini robot.

[00:10:32] **Audrow Nash:** So like we heard about store doors or something like
that, except you go.

[00:10:35] **Marcus Scheunemann:** To the store electric stores and the and
checking, stock and inventory, pretty much all the store. There are a few, a few
companies doing that. Yeah. And, this robot had this similar scanning face as
you see there. But you must imagine that this robot kind of is one of the
sections you see in the store. Yeah. So this robot here, this example, has six
sections and you can imagine the kind of six limbs. And so we could use old
business logic of our robot and just reuse it for this robot scale it up to six.
And that made us incredibly fast in the beginning. So this knowledge, you could
just scale up this. Oh, yeah.

## [00:11:10] The Software Behind Dexory

[00:11:10] **Audrow Nash:** And are you using, Ros, the robot operating system?

[00:11:13] **Marcus Scheunemann:** Yeah, yeah, yeah, it's a sponsor, of course.
And, we use a lot of open source software. We contribute back to, to, to us. So,
like, it's very important for us to, to have some knowledge of the community to
move fast, see where they are going and then get back. So what we are using is
Ros two iron currently. And so cool. We want to switch like already yesterday.
But sometimes there's crunch time. So yeah. Yeah obviously because the end of
end of support coming via and and the always on the, on the latest release and
yeah we will actually talk tomorrow also about that why why this is important
for us.

[00:11:50] **Audrow Nash:** Oh yeah I like that because it seems like a lot of
companies, they will be like many companies are still on Ros one. Yeah. And like
some the Ros boss for humble version but it's it's like so a lot of companies
they'll pick one and they'll stay on it versus keep upgrading. And I guess it's
kind of like you have a little bit of pain every time you're upgrading to the
new distribution. But then, you over time you're eating that pain slowly as
opposed to having it, all at once when you switch from Ros one to Ros two. Yeah.
Or something like this, you know that you guys are doing that.

[00:12:27] **Marcus Scheunemann:** No. That's perfect. I mean, there's a there's
a motivation element you have to have like so your company must embrace robotics
in their core. Yeah. And when they do that and you know, you can give them
easily the idea of maintainability and even more feature ready is is is our
central bit. So we have to update. So we have to give the customer the best
stuff that is there because they may see it somewhere else. We have robotics as
a service. That's an initial idea okay. We we we are not selling the robot. We
are just putting the robot there and we are selling the customer data. And, to
be always on the on the forefront of the technology, we are on the forefront and
with updating which was to. But I bet I give you that like as a company is one
was one is the switch. The switch is as hard. Yes. And I think one of the
biggest problems is that you need to invest a lot of time into the right testing
infrastructure to understand when you do the switch, that you can quantitatively
say that you don't break anything your customer said before. And this is
horribly expensive. And and we are doing this. So like we are investing a lot in
the I never call it testing when I talk to anybody, I call it like,
maintainability, insurance that you can it's easier to sell internally, because
that's, that's that's a money that's.

[00:13:43] **Audrow Nash:** Driven wants to pay for testing.

[00:13:45] **Marcus Scheunemann:** It's not literally not tested.

[00:13:47] **Audrow Nash:** And so maintainability or something like that.

[00:13:49] **Marcus Scheunemann:** And future has been it's already creating
more features easily. Time to market. Yeah. Reducing any time to market for each
feature. This is my yeah this is how.

## [00:13:58] Advocating for More Testing When Management Prioritizes New Features

[00:13:58] **Audrow Nash:** I communicate it I love it I think that's a really
smart approach. So I with that what advice do you have for someone who wants
more testing at their organization and this kind of thing? I changing the words
a little bit. Maintainability seems like a good one, but like imagine someone in
a robotics company where they want to increase the testing. But it's harder to
sell management on it because they want new features or something like this.
Like how does how would you frame it or what are your thoughts on making that
more likely to happen?

[00:14:29] **Marcus Scheunemann:** It is it's the time to market. This is still
one of the key qubits, because if you if you can ensure that a new feature is
not breaking the old stuff it with customers, and especially if you update your
whole fleet, what we are doing as a robot, as a service company, then you to
decrease as time you need to testing resources. So and that is that is kind of
the hinder the metric I'm using mainly to, to communicate it. Other advise him I
mean it's hard. So like I think the biggest challenge every robotics person in a
company is facing is that we are still in the very early ages of robotics very
much. And the complexity that, that is that it's difference in software, like
handling, whole electromechanical system with software, it's usually not that
central in, in companies. And you have to make somehow sure that this is a
central part where you can drive decisions.

[00:15:24] **Audrow Nash:** I don't fully understand. What do you mean the
electromechanical like actually testing on a physical robot? Is that what you
mean, or what do you mean, that's for sure.

[00:15:31] **Marcus Scheunemann:** There's also. No, no, I'm leaving the testing
part here. It's an all about like embracing that robotics is hard a things. That
is rarely the case. So,

[00:15:39] **Audrow Nash:** What do they do? They try to abstract it and stay
away from the hardware. Or what did people do now?

[00:15:45] **Marcus Scheunemann:** Yeah. No. So it's also I would try to get
this, when you have a software driven approach, you are not tackling the
problems at a core. So like, when you say testing in software, I read, if you
can automate this, you create.

[00:16:04] **Audrow Nash:** You you write it in simulation. Exactly.

[00:16:06] **Marcus Scheunemann:** You SDF specific processes you go through
like you have a QA, maybe, and they're just do like, oh, I use numbers from 0
to 100. And then I check it. Right.

[00:16:16] **Audrow Nash:** Like normally the it's more for testing.

[00:16:17] **Marcus Scheunemann:** Executes it with more complicated. But in the
end it just says like, oh, I take crazy numbers and then let's see what's
happening. This robotics is crazy, right? So there can be say I environmental
factors like so your sensor all the time gets a bit untidy for some reason or
like needs cleaning and then the error. So the magnitude of the error changes.
So you have to take all these bits into account and create constant learnings
and monitoring to be to be adaptable and to create time for that. People have to
embrace it. This is complex way, and I think a lot of the methods done for
companies now are very software focused. So a lot of templates we are using,
it's like, oh, we do it in software this way. It should be done in robotics this
way. And we kind of have to reinvent the wheel. Yes. And there needs to be
something different. And so the advice is like for, for companies, I would say
you have to embrace the core complexity. So you have to listen to your robotics
people because they usually do know where the pain points are. And if you just
not if you ignore that and think like, well, just test it with some numbers,
that's not how it works.

## [00:17:18] Where Dexory Is Heading in the Next 2 to 5 Years

[00:17:18] **Audrow Nash:** Okay. Where do you guys think you're headed in the
next, say, 2 to 5 years? I know you're scaling like crazy, but what do you think
projecting out 2 to 5 years?

[00:17:29] **Marcus Scheunemann:** Yeah. So, yeah. So pace is fast, of utmost
importance. To, to to create the right revenue, to get more funding, etc.. So,
currently we have five times the robots in the last year. Right.

[00:17:46] **Audrow Nash:** And while.

[00:17:47] **Marcus Scheunemann:** It is, it is and you have the right
infrastructure in place to, to scale this further. So pretty much personally I
think sky's the limit. I never thought about anything longer than a month ago
with months, the months ahead. Yes, exactly. Because that's the nature of the
scale up. Yeah, yeah, yeah. I guess our next rescan, I would assume we have a
thousand robots out.

[00:18:07] **Audrow Nash:** Wow. Yeah. I mean that's a pay one year. Yeah. Yeah.
Because you five times in the last year. So another five times. That's crazy.

[00:18:17] **Marcus Scheunemann:** That's very ambitious to be fair. But yeah we
have already we have already 100 out we want to produce six, six a week. Yeah.
Let's see.

[00:18:27] **Audrow Nash:** Okay. Yeah. The manufacturing might be the
difficulty.

[00:18:30] **Marcus Scheunemann:** Manufacturing is exactly like there's always
a new challenge for you, where you scaling, where you have to further optimize.

[00:18:36] **Audrow Nash:** Because you keep hitting bottlenecks. Basically, you
keep moving from bottleneck to bottleneck.

[00:18:40] **Marcus Scheunemann:** And you learn exactly. It's the same. It's
the same point again. Right? So you learn while you are doing it. So we don't
have, we are not there for 4 or 5 years yet. You don't have the full picture of
maintainability and reliability of, of of a decade. You have to save it for two
years, pretty much. So there's still a lot to learn. So yes, we probably have,
yeah. That's that's correct. Me there. Maybe maybe it's a 600. Well it's built
or something.

[00:19:04] **Audrow Nash:** And still it's so exciting. It's a lot of robots. It
is. And and so quickly too.

[00:19:11] **Marcus Scheunemann:** Yeah. Thank you for that. I think so too.
It's that right. It's that's that's a roller coaster to be fair. It's fast.

[00:19:16] **Audrow Nash:** Oh yeah. Well great talking with you.

[00:19:18] **Marcus Scheunemann:** Thank you so much and have a great one. Enjoy
the conference.

## [00:19:22] Introduction to Asimovo

[00:19:22] **Audrow Nash:** Yes, definitely. Here's my conversation with
Christine Fraser from Asimovo. Would you introduce yourself?

[00:19:29] **Christine Fraser:** I'm Christine Fraser, I'm the CEO and founder
of Asimovo And Asimovo is RoboDevOps platform. So it's a development platform
for developing and testing robots

[00:19:44] **Audrow Nash:** Hell yeah , so tell me a bit about like, what do you
guys offer I suppose with your developer platform.

[00:19:51] **Christine Fraser:** So here basically what we find was that if
you're developing complex robotics behaviors, are working on complex robotics
tasks, normally you're not working alone, you're working as a team or, most
autonomous behaviors. And I wanting to kind of also collaborate, for example,
with machine learning experts or data scientists or AI tools or even test
engineers. So what you want is to be working on all the development and robotic
tasks, but doing it within a team. And what we found was that the tools weren't
really compatible with doing that easily. And also as you do more and more
simulation for building complex behaviors, you need more compute power and your
laptop runs out at some point.

[00:20:36] **Audrow Nash:** Yeah, very much.

[00:20:37] **Christine Fraser:** These were the two big things that we
identified early on. If it needs to be a lot more collaboration, less developing
only in silos. And you need to basically to connect whatever compute you want.
And that's kind of where we start. And so we developed, the biggest sandbox we
can create where you can have a digital source of truth for your whole project.
Everyone can work on that and populated with the same assets and that you're all
developing. And then you can choose to work in your integrated development
environment, either on your local machines or in the cloud, or we can connect to
on prem servers or super compute as need it.

## [00:21:17] Creating Solutions for Every Need

[00:21:17] **Audrow Nash:** Wow! Okay, so that seems like quite a lot that you
guys are doing like many different permutations. And permutations of things that
you may be doing for customers has that you've kind of iterated to all that,
whereas some people want on prem devices, some people. So how does that like
tell me a bit more about that whole journey of getting to all these different
solutions, and then also how you have a common part with all that, because it
sounds a little bit like you could be spreading yourself then supporting all
these different things. But tell me about that.

[00:21:50] **Christine Fraser:** It took us quite a long time to build our
everybody. Let me put it up. And this wasn't my quick app that you just create.
Yeah. So we're talking about serious infrastructure that we're building. So we,
use Kubernetes so we can connect that to any computer while we, use a lot of
containerized isolation. But often in a project, you're, you're looking at
something that's very compact. So you're talking about like the total toolkit
can quite often be between 10 and 20GB. So and then you're collecting robotic
data that's large files that are, that aren't used and easy to upload into
Google Drive or whatever. So what we find is that actually the tools that you
need for robotics are professional level tools, and they don't really exist. So
rather than reinvent the wheel or develop lots of complex behaviors, we've
focused on developing the tool kit needed to do the job. And how can we
professionalize robotics development. And if you can enable teams to work
together, then projects can be run faster and projects are products are robots
that are developed by multidisciplinary teams will be stronger as a result,
rather than developed by one PhD person working only on their machine and a
little silo trying to connect that all to more of a digital source of truth that
many can collaborate on will give it a higher chance of success, and also a
higher chance of surviving way beyond the development stage.

[00:23:17] **Audrow Nash:** Definitely, yeah. Because especially if you can get
people working on a system together, it's like you don't have as much difficulty
and setup if you don't have much difficulty setting up testing, like everyone
doesn't have their own Docker file or a different approach to get the whole
system set up. So I can develop and you just manage it for them and for that
they.

[00:23:36] **Christine Fraser:** Didn't take all of that way. But what you find
is that lots of robotics engineers say, well, I've got it set up exactly as I
want it. I've got this driver and that driver and this driver, and this is
exactly what I want. So you can still work like that. You can still have all of
that. Okay. But we enable you then to have ten other people also working on
exactly the same set up that you've got. Yeah.

## [00:23:56] Supporting Diverse Workflows Across Platforms

[00:23:56] **Audrow Nash:** So how what was the abstraction you made for that or
like how how do you enable that kind of workflow. Because that seems like very
different things. So like I have a Docker container. I'm like forwarding my I
don't know why X11 or whatever it is. Things I can do visualization. How do you
how do you support diverse workflows where you have it on the device and you
have it in the cloud and on the browser or however it works?

[00:24:21] **Christine Fraser:** Yeah. So we we kind of see the projects of
okay, so the number one, what are the tools. Am I using. Then what am I actually
developing. So what's our asset we're actually creating. And then what do I want
to do with it okay. So first of all the toolkit but it's all just files. It's
all just you know so yes. So off off the shelf we've got is it different
possible versions and roles. Distributions. You got things like slam and
navigation and standard. So all the things that each 8% of all ROS projects
probably use the same basic 80%. Yeah. And then anything which is more specific,
you can either add it to your base image if you want everyone to have it, or
those are just simple, easy modules that can be added. So we then turn them into
components which are like assets. So in the same way your test environment can
be an asset or your URDF can be an asset. Little drivers and components can also
be individual assets. So then you can say, okay, whenever I'm setting up the
project this is my toolkit. And then I'm populating it with all of these assets
which has capabilities and things to work on. Okay. And that's all set up in an
easy mix and match way because we see the future of kind of the software side of
robotics being more mix and match. And so if you encourage people to set up that
way, it's also easy for people to understand why this is in the project or not.
And it's you're bringing it in because you want it to do a certain
functionality, or you want your robot to have a certain.

[00:25:58] **Audrow Nash:** Yeah it’s purposeful.

[00:25:59] **Christine Fraser:** Very purposeful. And then it's also easier for
them to when you're setting up the next project to the next project to the next
project, people understand why things are there. It's not just hidden in one big
file.

[00:26:08] **Audrow Nash:** Yeah. For sure.

[00:26:10] **Christine Fraser:** One person with a PhD brain, and all of a
sudden it becomes something that's more accessible and people understand what
the different things can do and then why different projects are set up in
different ways. So it's also about skill dissemination. And then everyone can
learn together. And then as you're publishing your project. So for example we
have an open source project, one of the ones which might be showing in the
background. And it was three different ways of doing navigation, all built on
top of ROS Oh, so it was to the field navigation up and down the arrows,
navigation and precision docking, navigation.

[00:26:46] **Angelo Corsaro:** Cool.

[00:26:47] **Christine Fraser:** That started off as one big file, and we split
it all up so that the test environment was separate from the rover robot, which
was separate, which was then all these different navigation packages as all
published in a way that people can go and demo it and trial it and then say,
well, I don't need all the other stuff, but I do need precision docking. So I'm
going to take that part and I'm going to put it into my next project. And we've
also got two other research projects saying actually, that test environment is
super useful because it's got a field and it's got this. So we're just going to
take that tension environment and use it as an input to our next budget.

[00:27:22] **Audrow Nash:** Yeah, so much more composable robotics projects.
Yeah, that's very cool. Are you leaning on Kubernetes very heavily for this
because so it's like you pop up one Kubernetes I don't know what they're called
like instance or.

[00:27:33] **Christine Fraser:** Yeah, that's an instance again. And and so.

[00:27:36] **Audrow Nash:** For for navigation.

[00:27:37] **Christine Fraser:** Yeah, and we used authorization and we use them
and Kubernetes. But what Kubernetes allows us to do is be cloud agnostic or
compute agnostic actually. So we use the same way as if we wanted to switch from
Amazon to Azure. For example, we could also switch from Amazon to your local
machine.

[00:27:57] **Audrow Nash:** Yes. Oh that's how you do it with all this. So you
spin up a cluster.

[00:28:01] **Christine Fraser:** We've been deployed there. And then you decide,
where do I want to run that last year. So that integrated development
environment and then what compute power do I want to create on time. And your
own laptop is one of the options. It's just a drop down. Yeah. My laptop or I
want to go to on prem servers if we've connected it or I want to go to.

[00:28:20] **Audrow Nash:** Oh clever. Yeah. Okay. I think when we were is this
a relatively new switch to switch to Kubernetes or like.

[00:28:27] **Christine Fraser:** No, no, it was always it was always there. But
I think the biggest learning we got from ROSCon last year, okay, was being able
to work locally was a must be must. Yeah. So if you force people to only use the
cloud.

[00:28:41] **Audrow Nash:** They don't want it.

[00:28:42] **Christine Fraser:** They don't want it for two reasons, two very
clear reasons. Number one, it's extremely expensive. Why when most of the things
are over I don't know. Yeah a lot of compute costs are unnecessary. And number
two my toolkit doesn't work. I can't use ARVs. Yeah, and my gazebo. I've only
got a gazebo viewer. I don't have my full gazebo. And and they all work
brilliantly on my local machine. I want my local machine. So this ability to
empower the local, but connect to the cloud for both collaboration and compute.
Is the magic circle that we've seen as being the must have functionality for
robotics adoption.

## [00:29:23] How Clusters Run Across Platforms

[00:29:23] **Audrow Nash:** Yes. Okay. I like that quite a lot. And then so.
That seems very cool. So what. I guess you have clusters running. Clusters have
all of the different parts, you might add. You might have not two you have
normal ROS You might add gazebo in. And then from this cluster you can run it on
your local machine. Can you also run some of it on your local machine and some
of it in the cloud, like if I.

[00:29:56] **Christine Fraser:** Am yes or no like that you you spin up.

[00:30:00] **Audrow Nash:** Yeah.

[00:30:01] **Christine Fraser:** But I can basically work on it in the morning
and at 10:00 I'm safe.

[00:30:05] **Angelo Corsaro:** Yeah.

[00:30:06] **Christine Fraser:** Close reopen.

[00:30:08] **Audrow Nash:** Oh yeah. Because the cloud, the cluster is still
running for the rest and then reopen.

[00:30:12] **Christine Fraser:** But connect it then to the compute to then run
the simulation cycles. For example. So, so the, the repository is always in the
cloud. Then I'm taking that and saying okay, this is what I'm working on now.
Yeah. And when you close your simulation, as I said, you want to make changes
and save to your project. And then I go back in and open it again and then I can
continue.

[00:30:38] **Audrow Nash:** So with this, if I, as I'm a developer working on
this, I have my project in there. How do I relate my, like, development state
to, like, my GitHub or my git project that I'm working on? It seems like it's
two separate version things, because the cluster can have one version and the
repository can have one version, or they coupled where the.

[00:31:01] **Christine Fraser:** Trees are coupled.

[00:31:02] **Audrow Nash:** Okay okay. So you're git config file. Let's set up
okay.

[00:31:05] **Christine Fraser:** So your your git repository is connected to
your Somerville project repository. Yep. So I wouldn't get you to save your code
to Somerville and then but to get. No I would dare you to save your code. But to
get.

[00:31:19] **Audrow Nash:** And then and then Somerville and.

[00:31:20] **Christine Fraser:** Then it will say, oh, there's a, there's a
latest version that's been uploaded to the git repository. Do you want to do
that? Which is fine for code. But if I make a change to my gazebo simulation
environment, that's not and it will that is and I Somerville or I've collected a
big gross bag of data from the real robot and I've uploaded it into the project
that's also part of your Asimov repository. Yeah.

[00:31:44] **Audrow Nash:** You have like physical assets or you had some names
for things. Yeah. So yeah, you have your ROS bag, you upload that to the
project. Everyone can have access to that.

[00:31:53] **Christine Fraser:** Everyone's got access to it. So you and I do.

[00:31:55] **Audrow Nash:** Quite a lot of things.

[00:31:56] **Christine Fraser:** Yeah. So you might not not be the one who wants
to. You might then bring in a test engineer or you might bring in a data
scientist, or you might, who then is then taking what you're creating in
simulation and working on it and giving you feedback, for example. And you're
going to also do exactly the same way working between your simulation or
simulated data.

[00:32:16] **Angelo Corsaro:** Yeah.

[00:32:17] **Christine Fraser:** And then running the same on your hardware and
creating physical data. Yeah. And this also can be switch back and forth. So
there's also that came up. So that's.

[00:32:28] **Audrow Nash:** Very cool. Yeah. You have a lot of flexibility
because you're built on Kubernetes. Yeah. Okay. With all of this so do you have.
So if I, if I have my git repository and I have my robotics project and that.
Well, do you have good support for like GitHub actions for this kind of thing
where it's like I spin up an environment somehow and I don't know, maybe you
have the action trigger or something in your, in some cluster somewhere. That or
if how does it work?

[00:32:55] **Christine Fraser:** It's not all fully in there yet. There's not
all this all fully in that bucket. The basics that are in there. But, it's got a
lot of nice side features that we don't have fully integrated. But your robot
repository is updated. Then that update focus will will follow through into that
Somerville update.

[00:33:16] **Audrow Nash:** Do you mean at all? Eventually you'll have it
because everything well, like when Asimovo eventually has that feature, you.

[00:33:23] **Christine Fraser:** Know, so so it coordinates it at rep level.
Yeah. No, but sometimes you'll want to do something yourself. And not all of
those would be immediately available in at Somerville, depending on how you've
built it and how you're working on it. But most people actually doing the
development in the platform, it's just then where do you save it back to?

[00:33:44] **Audrow Nash:** Yeah, yeah, it's on.

[00:33:46] **Christine Fraser:** And you do that already with git. You've got a
code based repository and you're kind of branching it. Yeah, I'm working on it
and then merging it back. Yeah.

[00:33:54] **Audrow Nash:** Your remote is a separate thing from your where.

[00:33:56] **Christine Fraser:** You're working off the same principle. So
because all of that is best practice. Annoying. Yeah. But around also simulation
environments or cool and results or.

## [00:34:07] Company Progress and Adoption

[00:34:07] **Audrow Nash:** Yes. So where where do you think you guys are. Like
where are you headed in the next few years? And like I guess actually before
that, how are how are you doing as a company? How is adoption. Yeah. How is
funding all these things.

[00:34:23] **Christine Fraser:** So like our early evangelist group is not what
we thought it was going to be like. I was it. So our early evangelist group is
actually academia. Okay. So anyone who teaches robotics says, I don't need all
your fancy simulation runners because I just want to teach 50 students and have
them set up really, really easily so I can take exactly what you've already
built, set up my course, have ten students, 50 students, high funded students.
Access it and work off it immediately. Perfect. I can do my large research
projects which involve SMEs and companies and, and my researchers, and we can
all work off, a large complex project and we can all now access version.

[00:35:14] **Audrow Nash:** Yeah. So I have the latest version.

[00:35:15] **Christine Fraser:** So for both research and also then publishing
of that research also then increases the impact. So there's quite a lot of
pauses And there like you don't need to keep building anything else. What.
You've got enough for us. So that's really nice. The second emerging group,
which is also not where we thought we would start, is hardware companies. Let's
say I, I have a robot. Hardware is hard. I'm really good at my robot, but I
don't want to develop my 100 use cases for it. Okay. Well, I want to do is
showcase it in a way that is easy for other people to try it before they buy it.
It's easy for them to understand what my hardware is good at.

[00:36:02] **Audrow Nash:** They get a simulation basically for free.

[00:36:04] **Christine Fraser:** And it's also a digital like, no, all of the
people who buy it want to then build do a digital build to then apply it to
something. Yeah, they can then have a whole digital part of their product, that
service they can use it to for sales demos. They can send somebody a remote
control. We can try it. That's it. By just logging into our platform. Yeah. And
so that's another really interesting group. Really nice. And then another
interesting group are people with problems. So they're like everyone. So this is
people who aren't even robotics companies. I'm talking not robotics companies.
Yeah. So these are more interesting. So this is for example, apple tree farmers
in the Netherlands, 150 of them. Oh, they've got a digital twin of the apple pre
and post pruning. If they could showcase that to all of the robotics, SMEs and
academic people out there who are looking for interesting problems to solve.

[00:37:01] **Audrow Nash:** Oh, that's so cool.

[00:37:02] **Christine Fraser:** And then I've got Boskalis, a multibillion
dollar dredging company that just want a really good underwater simulator. And
we can connect them with the top five universities within Europe. So these are
also really interesting. And so ultimately we will become we are a solution for
a company. We're solving a company's problem. We are a way that a company can
get a robot to market fast, because they can get ten people working on it in a
very efficient way. They can get. And people working on complex behaviors.

[00:37:36] **Audrow Nash:** You have an environment you can distribute, however,
and wherever.

[00:37:39] **Christine Fraser:** Hardware companies don't have to develop all
the software skills. So then you also can begin to create a bit of a, if, well,
a digital supply chains are the apps behind. Buying the robot is very cool. So
people who can be really good at one thing but don't want to provide a whole
solution. They can showcase examples of their functionality and then people can
come in and give them consultancy work to, to do the next best thing.

[00:38:14] **Audrow Nash:** Yeah.

[00:38:15] **Christine Fraser:** Yeah. So but, but this kind of ecosystem play
or the beginnings of a kind of development marketplace is becoming really
interesting. But it's early days and it's one of those takes time to set up. It
takes time.

[00:38:29] **Audrow Nash:** Figure out the business model around it. Yeah. How
are you in terms of funding? Like what? What round of funding? I assume you have
investors.

[00:38:38] **Christine Fraser:** So we're a spin out of, kind of private
research organization. So we have a kind of convertible loan agreement with
them, for, up to, seed funding stage. So there's kind of all of last year we got
started, and this year, basically, with just getting enough market traction with
initial customers now. So our SAS platform went live last month. We've signed
up, the Dutch universities can buy it through a central purchasing location,
which was a big, hurdle. And because I know all their students could just do a
single sign on.

[00:39:19] **Audrow Nash:** Super easy.

[00:39:20] **Christine Fraser:** So then it's easy.

[00:39:21] **Audrow Nash:** That's great.

[00:39:21] **Christine Fraser:** So then the first universities are using it,
and we are, part of at least 4 or 5 research projects with various partners
already. Yeah. On our first couple of commercial customers and all of that is
happening this quarter.

[00:39:34] **Audrow Nash:** That's exciting!

[00:39:35] **Christine Fraser:** Then opening a seed round once that market
traction is tangible. And our. Yeah.

[00:39:40] **Audrow Nash:** Cool. Where are you guys based out of? The
Netherlands. Okay. Makes sense to the Netherlands examples. Yeah. Oh, yeah.

[00:39:48] **Christine Fraser:** Although my accent is not Dutch, so that always
confusing. Where are you from? I'm from Scotland.

[00:39:52] **Audrow Nash:** Scotland? How did you end up in the Netherlands to
start this company?

[00:39:56] **Christine Fraser:** A tall, attractive man.

[00:39:57] **Audrow Nash:** Hahaha yeah, that's so funny.

[00:40:01] **Christine Fraser:** Mean that was. I've been living there for nine
years. Netherlands.

## [00:40:04] One Year Projections and Goals

[00:40:04] **Audrow Nash:** Oh yeah. What do you think? For the like? Where do
you hope to be in a year from now and for?

[00:40:10] **Christine Fraser:** For us, what we are doing with the seed round,
as we will be asking for basic my funding for a year and a half to two years
with a view that that will take us from what I consider now to be our MVP. It's
more than that for some of the customer base. But yeah, in.

[00:40:27] **Audrow Nash:** My my demo there, like we have enough.

[00:40:29] **Christine Fraser:** It's an MVP towards more of a company based
solution now. And I believe we need a year and a half to two years to fully
understand the sales cycle, the buying cycle, which is long, and the stickiness
in academia moving the second. No, no, just oh, and even within a company, you
try it, you get individuals to do it, but then you move into a kind of setting
up one project. Yeah. And then that proves itself. And then you do more or you
might start with a research project, which then turns into, okay, we want to
listen, but once people are in, they're in.

[00:41:01] **Audrow Nash:** Yeah. Kind of like, yeah.

[00:41:04] **Christine Fraser:** It's helped so much. Does that cycle. And
robotics is one of these things which is moving super fast but super slow.

[00:41:10] **Audrow Nash:** I know she's a good way to put it, but super slow.
Yeah. Very much.

[00:41:14] **Christine Fraser:** And especially the mobile robotics or
autonomous behaviors. It's hard. It's hard. It's hard, it's hard. So those
robots don't don't produce themselves overnight in five minutes. So these
companies are all struggling financially or to make money know. So we can help
because we can make it more effective, more efficient, a lot less. We work a lot
less time, but they also need to be able to buy into in their decision making
process. So yeah, so like for us, we would like to become the beginning of of a
real marketplace where academic makes industry. Yeah. And specifically SMEs
finding really nice niche. Let's assume, small and medium sized enterprises.
Sorry. It's, it's like European,

[00:42:00] **Audrow Nash:** I don't know, acronym. Anyway. Yeah. Okay.

[00:42:03] **Christine Fraser:** But also because most of those are presently.
So anything under 500 people. Yeah. Which is basically almost all of them mobile
robotics companies. Right. Well, today and then we can grow with them as they
grow. And what I would love is for an ecosystem where there's 100 really
successful companies all collaborating and working on different pieces rather
than industrial robotics, which really have got ten Giants.

[00:42:28] **Audrow Nash:** Yeah.

[00:42:29] **Christine Fraser:** There's really ten giants which own that space.

[00:42:32] **Angelo Corsaro:** Yeah.

[00:42:33] **Christine Fraser:** And I would really like autonomous behavior
building and the kind of tier two and tier three mobile robotics applications
have got a bigger potential for impact in society. I bet to get to market
faster.

[00:42:45] **Audrow Nash:** Yes.

[00:42:45] **Christine Fraser:** And that's a big part of our kind of vision is
to enable the tier two and tier three more applications. But people can't afford
to put 5 million into the development. Yeah for sure. Get it to market. So if we
can find a way that they can all get to market much. Yeah. And then they all
grow, then that is a whole benefit. Yeah.

[00:43:05] **Audrow Nash:** Okay. Hell yeah. Yeah. So where can people go to
learn more?

## [00:43:09] Where To Learn More

[00:43:09] **Christine Fraser:** If you go to our website, Asimovo.com, you can
sign or you can just we've got case studies on there. We've also got develop our
case studies, which is more code based. Or you can jump into the platform and
set yourself up with a free account and all of these ones which are showing in
the background. You can basically get most of those for for free on the
platform, jump in there, demo it so all the documentation and run your own. It
takes a couple of minutes for it to be spun up on the hardware. Yeah.
Kubernetes. Yeah. But once you're you're in there you can then play with it. And
anything you like you can copy. And that can be as an individual asset or as a
whole project. Cool. So, follow us on LinkedIn to keep up to date with who we're
hiring and what we're doing. Sign up for our newsletter. Also, all the things
and all of those kind of things, but there's a lot on the website. But for this
type of project, with this type of customer, try it for yourself. But if you're
a company, or even an individual who wants to know more, we've got webinars
which take you through more of a click but buy click and teaches you.

[00:44:13] **Audrow Nash:** Yeah.

[00:44:14] **Christine Fraser:** And we also have got more specific, onboarding
for companies because there's certain functionality you don't see as an
individual. Yeah, as an institute or as a company. And you need a kind of demo
for.

[00:44:29] **Audrow Nash:** Right. Hell yeah. Thank you very much.

[00:44:31] **Christine Fraser:** Thank you.

## [00:44:32] Introduction to ZettaScale

[00:44:32] **Audrow Nash:** And our last interview, my conversation with Angelo
Corsaro from ZettaScale Technologies. Hi would do you introduce yourself?

[00:44:40] **Angelo Corsaro:** Sure. Hello. So I'm Angelo Angelo Corsaro
ZettaScale CEO and CTO and, you know enjoying as usual the ROS conference.

[00:44:48] **Audrow Nash:** Hell yeah. So tell me what you guys make at
ZettaScale.

[00:44:52] **Angelo Corsaro:** So at ZettaScale, I mean, we differentiate
ourselves. Protocol experts. So we started working. Actually, I was one of the
first one that started DDS standardization back in the days. Right. And then
around 2015, I decided actually to leave the DDS working group, resign as a
co-chair. I started working on a new protocol Zenoh. The question might be why
did I decide to do that? So first there were multiple reasons. Okay. So and
those were based on the experience that we had on, smart cities. Okay. And to
some application in aerospace and defense that were showing two things on one
side, some of the limitations of DDS in getting outside of the, let's say, sweet
spot, the kind of system for which had been designed, I’ll get there in a
moment. And on the other side, the fact that while, you know, traditionally,
there were people working on embedded system, which weren't always connected,
and then people working on what they would call edge system, which were
connected but closed. Okay. And then, you know, there was the cloud, but all of
these were loosely connected, connected, and we were transitioning to a world in
which system, more and more were spanning from a microcontroller up to a data
center. Think about the robot today. Yeah, right. I mean, in a robot, even like
the one that lives somewhere over there, you have microcontroller, we have
general purpose processor, but then this data has to flow into it. And there was
no protocol. A couple of great. Okay. That was creating lots of, you know,
struggling over customer frustration. For me it was not.

[00:46:32] **Audrow Nash:** Like it doesn't fit.

[00:46:34] **Angelo Corsaro:** It was ugly. I mean you had to integrate multiple
things and even esthetically right. Easily beautiful and sensor esthetics for me
it's quite important. Yeah. And I think in tactical matters something has to be
as simple as possible. Definitely. Absolutely beautiful. Elegant.

[00:46:51] **Audrow Nash:** For sure. Yeah. And if it's simple to you can have a
simple understanding of it and then you can do a lot with it. If you have a lot
of complexity, you get bogged down in the complexity.

[00:47:00] **Angelo Corsaro:** And again, you know, it's very hard to do things
that are simple because it assumes that you have deeply understood the problem.
Okay. So it's much easier to come up with solutions that are very complicated.

[00:47:11] **Audrow Nash:** Oh yes. Yeah. Super spiky. Lots of things.

[00:47:15] **Angelo Corsaro:** That's sometimes that's an indication that you
have not really distilled the problem. Yeah. And you have no real really
captured the key of the problem. And so getting back to to the reason that
pushed us to do that. So I wanted really a protocol that could work. And I went
and there was another problem.

[00:47:33] **Audrow Nash:** An end to end like microcontroller to data center.

[00:47:36] **Angelo Corsaro:** Yes. And the other problem was this. So in order
to do this right, there were several challenges because it means you need to be
able to work on a low power network, which are very constraints.

[00:47:46] **Audrow Nash:** Microcontrollers.

[00:47:47] **Angelo Corsaro:** Okay. Right. On microcontroller two that are
constraints in computing and CPU. But then low power networks are constrained in
bandwidth. You need to run efficiently over the internet, right? You need to be
secure.

[00:47:59] **Audrow Nash:** Okay. Yeah. So it's it's a huge spectrum.

[00:48:03] **Angelo Corsaro:** It's not easy because, you know, there is
something very simple. Okay. Which sequence number resolution do we use most
people don't even think about sequence number. Right.

[00:48:13] **Audrow Nash:** Those for you indexing basically.

[00:48:16] **Angelo Corsaro:** Right. Essentially decides how many messages you
can have in flight, while not being able to detect a rollover. So if you're
running on a constrained system, you want this number to be fairly small. Yeah,
because that limits the wide overhead. If you're running, let's say over a
satellite link, you want to have lots of parking on fly. So you want to have a
fairly big resolution for sequence number. Yeah. Typical protocol. And the fixed
resolution that didn't work for us. So that's something that you can configure
in trouble. Every session can use a different sequence. Now for instance okay.
There are lots of protocol engineering that we did as such to make sure that we
could read efficiently, communicate end to end. Yeah, that's one point. But that
wasn't enough. The other point is, as we have this kind of systems and
especially you think about robots, and as soon as we start adding things that
are battery powered, there's a question of where do we store the data? Because
pushing the data to the cloud requires connectivity, requires better
communication, consumes not so bad. Wouldn't it be great if we could keep data
stored locally or as close as possible, and in query from anywhere, without
knowing where the data is stored? That's the other problem. That's solved, okay?
And that's like, you know, usually people discovered zero and that's you. I say
the tip of the iceberg is, oh, super cool. The a pub sub that can span and twin.
And then they, they discover the rest of Xeno which is the query. So the query,
the distributed query. And that's where the real power, you know comes in. The
realization comes wow okay. Yeah.

[00:49:51] **Audrow Nash:** What's I haven't yet discover that I guess. All
right. So the distributed query tell me how to do that.

## [00:49:56] How Distributed Queries Work

[00:49:56] **Angelo Corsaro:** Right. So the concept it's actually fairly
trivial, but the implications are quite interesting. So we have this concept of
equitable. What is equitable. It's an oracle that it's around the network. And
it simply tells that it provides data for, you know, a given data center or a
key expression. So you copy it. Okay. Nicky, expression is a way of representing
a data set. And then, how does it provide data? We shouldn't care. But then
we'll get that. And so then there is this get operations end, which is how you
actually submit a query. When you do I get you provide a selector. We call it in
this selector. You specify the data set in some predicates. And at that point
right, imagine us the data set that you're specifying. It's really, you know,
logic like a mathematical set.

[00:50:47] **Audrow Nash:** Yeah.

[00:50:48] **Angelo Corsaro:** And in the case what zero does.

[00:50:50] **Audrow Nash:** It narrow it down.

[00:50:51] **Angelo Corsaro:** It looks at the set you're looking for. It does a
set cover. Yeah. With respect to the, the variable that are on the network and
then decides what is the optimal set of query boat to which we need to run the
query in order to get your data in. The consequence is that you don't need to
know where the data is. Yeah. Depending on where you are on the network, we
might rule that maybe pretty magical. Yeah. Two different credible. Yeah. So
that supports natively mobility load balancing and fault tolerance without you
even thinking about it.

[00:51:20] **Audrow Nash:** Amazing.

[00:51:21] **Angelo Corsaro:** And then if you think about a database right. The
combination of a subscribe in an equitable is the reading and writing side of
database. And that's how we integrate databases and like, you know, Amazon S3 or
Rox DB or in flexible or whatever. And a computation is just equitable. And now
if you think again for a moment, you know, map reduce okay, what is MapReduce.
You want to get a computation trigger on multiple node and then you want to
consolidate the result. Yeah. But that you can achieve that with credible
because you can have multiple queryable essentially responding the same query,
operating a different subset of the data. And then when the query score is
computed, we consolidate the data back order. Oh. So all of a sudden in one
protocol, yes, you can deal with that. Then most pubsub that addressed so
storages in computation in a completely transparent manner. So you do not need
to know where the data is, where the computation is. Yeah. End up by as a
byproduct to member routing algorithm where you depending on where you are on
the network, you're always going to pick the optimal place either to get the
data or to trigger the computation.

[00:52:39] **Audrow Nash:** Yeah, that's so cool. Thinking of it like a
distributed database is a very cool way. it has all the computation and it roots
it all.

[00:52:50] **Angelo Corsaro:** Correct. And we also have alignment. So imagine
that the network gets partitioned. Yeah. If you have different storage then
whenever the network heals the storage are realigned automatically. So we have a
pretty cool idea. And so that's the bottom of the iceberg that usually people
discover that later once they realize the full power. It is it.

## [00:53:07] Breaking Down Routing and Synchronization

[00:53:07] **Audrow Nash:** Wow. Yeah yeah yeah, I see it I see it okay. With
this. How does it work? Like, I know, I know, it's it sounds like it's very
complex. You have this very amazing networking protocol.

[00:53:20] **Angelo Corsaro:** Yeah. Go ahead. How does it.

[00:53:22] **Audrow Nash:** Like at a high level. How can I understand what's
going on that leads to this, really nice routing behavior and synchronization.

[00:53:31] **Angelo Corsaro:** I mean, the underlying protocol is actually quite
simple. And I think what allowed us to make it so simple is that we really
narrow to the key primitives. Okay. And in the end to what we do. Right? We just
route key especially on the network. Right. So and there are some technical,
let's say complexities on how to make this efficient, but that, you know, the
key concept are actually pretty straightforward, right?

[00:54:03] **Audrow Nash:** So when you say key expression, what does that mean
exactly?

[00:54:07] **Angelo Corsaro:** Imagine a ROS topic. Right. That's the basic form
of the key expression. Yeah. Now imagine that. Right. I have multiple robots I
could say. But one there's less but one's less same developed. Yeah. So that's a
key expression for us. It's a full key. There are no wildcards that represent
just one data item okay. If I have multiple robots I could say but star slash cm
devo. So imagine that now.

[00:54:33] **Audrow Nash:** Also you can have wildcard car any queries. And so.

[00:54:35] **Angelo Corsaro:** Whenever you.

[00:54:36] **Audrow Nash:** Have one and you could probably do some filtering
con. Right. So. Oh that's super super cool. Okay.

[00:54:40] **Angelo Corsaro:** So because this issue when I talk about key
expression you realize because of wildcard, all of a sudden you're representing
a set of keys as opposed to a single key. Yeah. And you can do that on
subscription. Right. Because maybe I want to receive there's some table from
multiple.

[00:54:54] **Audrow Nash:** Robo that's so powerful. Yeah.

[00:54:55] **Angelo Corsaro:** And in query because imagine right. I want to
know the state of all my fate of robots. Yeah. You could do get. But isn't it
get less robot star slash battery level. That would trigger a distributed query.
Yeah. And get the data to you. Now, what is that data? Well, it.

[00:55:17] **Audrow Nash:** Could be in a bunch of nodes.

[00:55:18] **Angelo Corsaro:** Might be on your robots. Yeah. Might be stored in
a cloud. And you are closer to the cloud because imagine I'm by the robots and I
do the query maybe the fastest way to resolve it is straight on the robot. If
you are, you know, in California and the robot is here and the data is also
stored on a storage, you know, on the Google Cloud. Yeah. The closest storage
will be on the Google Cloud.

[00:55:38] **Audrow Nash:** Yeah.

[00:55:39] **Angelo Corsaro:** Do you need to care? No. And that's great because
you don't care whether they suck at Google to get the data, don't you.

[00:55:45] **Audrow Nash:** Yeah, I guess I don't fully understand how it's
working from there. So that seems wonderful. Yeah. And so you get to not care
about where the servers. Yeah. Okay. So continuing I guess, with the explanation
of how it's working, like, I guess conceptually, what we're okay.

[00:56:05] **Angelo Corsaro:** So conceptually with respect to how we figure out
where about to do exactly that. Okay. So essentially in a Zenoh system, you have
to think that, we reconstruct a graph. Okay. And over this graph, imagine that
we have annotations like, like going.

[00:56:27] **Audrow Nash:** Everywhere meta data at each node.

[00:56:29] **Angelo Corsaro:** So let's make an analogy with when you're driving
okay. So when you're driving in this, one of the the ways in which we make this
query very efficient okay. Yeah.

[00:56:37] **Audrow Nash:** This is exactly what I want to try it on.

[00:56:39] **Angelo Corsaro:** So suppose that you are going from San Francisco
to Santa Monica. Okay. So where do you look as a first indication, you look like
L.A. potentially. Right. Yeah. So right. And one pretty close. And then once you
get to L.A., you look the road to get towards Santa Monica. Yep. And the way to
make this efficient. Right. You don't get all the detail to in your mind right
of that. Yeah. You refine it to the closest you get to your destination. This is
exactly how Zenoh works. Okay. So imagine that now you have a graph that
represents Zenoh nodes. Those could be infrastructural node like routers or
application. Yeah. And would you construct a graph in which, like in the analogy
that I made with the, you know, road indication where the generalization of this
coding information. So like in the case of the, of the, you know, both a star
cmdvl or both, if you want to get the the battery status of a specific robot
okay. Then every hope we will know how to route your request. And this gets
refined. And the closer we get to the target, the more detail information we
have on how to route it. I know this still sounds vague, but that's really how
it works.

[00:57:53] **Audrow Nash:** That's what you're doing and.

[00:57:54] **Angelo Corsaro:** This is how we manage to really consolidate
discovery. You know, every people often say, oh, we're from DDS discovery. If we
make an analogy in DDS you have everyone has to know everything about everyone
else. Yes. And then just kind of escape. No. Right. In Zenoh, the point is that,
you don't need to know anything about everyone else. Maybe you just need to know
that if you need anything from both one, that's that way. And but two is that
way. That's the intuition. Yeah. And and then in terms of mathematics, because
there is some mathematics because it's all set theory. It's set theory. Set
theory, generalization. There are also some arguing that we use in terms of
equivalence between regular. So there is some complex math behind. We are then
the result for the user it's easy.

[00:58:45] **Audrow Nash:** Yeah. So cool. Yeah. That you just you have a is it
like it's almost heuristic based. Go that way. First you're going to go to LA
first and then you go to Santa Monica.

[00:58:55] **Angelo Corsaro:** So you could use a resource. But in our case it's
not touristic is generalizing. I mean so in a way you can think about it as
every time, the more you get further away from, from the source of information,
right, the more you have a generic description of the data set that the reason
behind it. Yeah. Okay. And you also get it a little. Yeah. Once in your
application that way. Right. And if I, if all the information, the detail
information about one application gets to me, I get overwhelmed with data. If I
generalize this information light and I get it distilled. Birchfield. Yeah,
right. I know this sounds absurd, but literally this is what we do. Okay. So
cool. And that's the secret of the probability.

[00:59:39] **Audrow Nash:** Yeah. And that's why it's esthetically pleasing,
because you have this general approach that lets you get these very powerful
results, and it handles a lot of the, like, tricky cases where I can synchronize
your data and things like elegant.

[00:59:51] **Angelo Corsaro:** And the user doesn't need to think, right.

[00:59:53] **Audrow Nash:** You know, a simple interface.

[00:59:54] **Angelo Corsaro:** Super simple abstraction, and something else that
sometimes is missed. Right. So we've been talking about, you know, both one seem
developed that so usually across topic as are called. Yeah. And they are mapping
to what we call Z resources. So that also three. And then you also hear I was
telling well we have you know just a handful of byte of wide overhead. So how
does the tool work? Because if you are using string only that string is more
than a few bits. And there is no the data. So in Zenoh there is an automatic
mapping of key to small integers. Yeah. This is an automatically and it's unique
within a session. So if you and me are communicating I will come up with a
mapping that maybe I will be using only with you or maybe with everyone else. It
depends on concurrency, right. Because maybe we map the same key to different
ID, which is perfectly legal. And as long as I know that it's your mapping
field. Yeah. And that's nice because you get the word efficiency and you get the
user experience. Yeah. Because, you know, there were other technologies in which
you could map integer to keys, but then you had to as a user to keep dynamic
with your, which is not scalable, you know, large scale distributed.

[01:01:06] **Audrow Nash:** So lots of errors.

[01:01:08] **Angelo Corsaro:** Exactly. So once again usability right. User
friendliness. But then the magic behind to make it efficient. And then that's
taking you know that ZetaScale approach.

## [01:01:17] Solving DDS Challenges and ROS 2 Impact

[01:01:17] **Audrow Nash:** Super cool. Yeah. What problems explicitly is this
solving from DDS, because and then also how like we're very excited about this
as a ROS 2 community. I would love to hear a bit more about that too.

[01:01:33] **Angelo Corsaro:** Yeah. So I think there are a few probably a
couple of problems. First of all, as of today in ROS there is not a single
solution to go from the microcontroller up to the data center.

[01:01:45] **Audrow Nash:** Very real.

[01:01:45] **Angelo Corsaro:** Why? Because we have to use a protocol on the
microcontroller, which actually is not DDS because Excel C is another protocol,
is a client server. Probably. Then you have DDS inside the robot and DDS cannot
cross the internet. So you have to use something else. And that's why you know
there is the Amputee Bridge. So that's already nice because we will have one
protocol all you I use end to end and that's correct okay. So that's one
problem. I think it's very important in terms of performance streamlining
monitoring your system. All right.

[01:02:16] **Audrow Nash:** Yes, definitely.

[01:02:21] **Angelo Corsaro:** Yes. What I call the digital Frankenstein.

[01:02:24] **Audrow Nash:** Yeah. If it's like sitting together, these are all
Frankenstein. Yeah. Right. Yeah. Good way of putting it. Yeah.

[01:02:30] **Angelo Corsaro:** And so that's one problem. Second problem is the
discovery. Right. So we've shown and this has been reproduced by user. Even if
you take a simple turtle bot and you make comparison with white shark, we reduce
off the shelf discovery by over 90%.

[01:02:46] **Audrow Nash:** Wow. That's huge. That's amazing.

[01:02:48] **Angelo Corsaro:** And again, that's because the protocol works very
differently, as.

[01:02:51] **Audrow Nash:** If it's fundamentally different. Whereas DDS has to
know. Everybody has to know about everything.

[01:02:57] **Angelo Corsaro:** And again, you tell me everything about yourself.
Me, I don't care. Just tell me that you're weighing up. And I know that if I
need something, I have to go.

[01:03:03] **Audrow Nash:** Yes.

[01:03:04] **Angelo Corsaro:** Yeah. That's I what? It's like, you know? Cool,
man. Yeah. Cool. Okay.

[01:03:10] **Audrow Nash:** So,

[01:03:12] **Angelo Corsaro:** That's the discovery point. We discussed the
connectivity. And then there is another point. So the quotable are being used
today to efficiently map services and actions. So even today during the
presentation from Chris on the to state, state of the House is known that when
you use different device vendors, there is no interoperability or they have
problem with services. Why? Because of how this works. DDS doesn't natively
support remote procedure. Call is built on top. But again for how this works and
how they do this and specified there are some gray area that make it very hard
light to append or set the same behavior in Zenoh queryable or built in
Queryable is a generalization of RPC, okay, and that is used to very efficiently
map services, increase scalability, increase the terms. Do you think that's
that's quite important. And then something else that is not there yet. But I
mean at least I would really like to see it soon is true. Zero copy in ROS. So
Zenoh.

[01:04:17] **Audrow Nash:** As I was.

[01:04:17] **Angelo Corsaro:** Saying, was built in support or.

[01:04:19] **Audrow Nash:** Okay.

[01:04:20] **Angelo Corsaro:** Yeah, it's in us. No.

[01:04:21] **Audrow Nash:** Across processes. Oh, okay. That would be a maybe.

[01:04:23] **Angelo Corsaro:** Yes. Xen was built in support for shared memory.
Yep. With a 1.0. We also have now the ability of plugging in shared memory
provider. So if you have custom hardware like you know GPU.

[01:04:35] **Audrow Nash:** Yeah yeah. And V or something, you.

[01:04:37] **Angelo Corsaro:** Can plug a provider for that shared memory,
allocate out of that buffer. And then if you're using Zenoh all this
transparent. Yep. So we would like to have you know this model expose also to
ROS program.

[01:04:49] **Audrow Nash:** That's awesome.

[01:04:49] **Angelo Corsaro:** Because then we could really have true zero copy
zero serialization could be garbage.

[01:04:54] **Audrow Nash:** It would be gorgeous. Yeah I love it. Oh, yeah. You
clearly loved us too, which is I.

[01:04:59] **Angelo Corsaro:** Do wonder if. I mean, that's my passion. And then
there are some other stuff we are doing around video. One video to facilitate.
Yes. Oh wait.

[01:05:07] **Audrow Nash:** I don't know if that's.

[01:05:08] **Angelo Corsaro:** Very close somehow or two. Yeah.

[01:05:10] **Audrow Nash:** Okay. I'd love to hear a little bit about that.

[01:05:12] **Angelo Corsaro:** Yeah. I mean again it's facilitating the sending
of transparent compression because we already do transparent compression in Xeno
and it's just going beyond and supporting that naked.

[01:05:22] **Audrow Nash:** Yeah. Because video has its own compression
algorithms and there are.

[01:05:25] **Angelo Corsaro:** Some.

[01:05:25] **Audrow Nash:** Peculiarities that, you know definitely.

[01:05:27] **Angelo Corsaro:** You will see something compressed. So.

## [01:05:29] The Story Behind the Company Name

[01:05:29] **Audrow Nash:** Oh I can't wait. One, one thing I would also like to
hear about. So Zenoh, Zenoh.

[01:05:35] **Angelo Corsaro:** You know, well you could use both.

[01:05:37] **Audrow Nash:** Okay.

[01:05:37] **Angelo Corsaro:** So should we talk about this. Sure. Okay. So the
the name of the protocol. Yeah.

[01:05:43] **Audrow Nash:** Where did it come from? You were mentioning at the
start.

[01:05:44] **Angelo Corsaro:** The acronym means zero network overhead. Okay.
Now the H y so the H is the O and H. So here zero network overhead okay. Now in
reality the problem had to be called like this just.

[01:06:01] **Audrow Nash:** In.

[01:06:01] **Angelo Corsaro:** Or with an N okay. Yeah. But with an n sounds
kind of strange. Those people call it Zenohn. Yeah, but that's not that you
would pronounce. And the domain wasn't available either. Okay?

[01:06:13] **Audrow Nash:** It's fragmented, like in our minds. You need it.

[01:06:16] **Angelo Corsaro:** The question is why Zenoh? So there are two
philosophers that are very close to my heart okay? One pre-Socratic. That was a
philosopher about the, the paradox with things that were getting almost close to
zero zero network is not possible, right?

[01:06:34] **Audrow Nash:** So that was it. Yeah. Very poetic.

[01:06:36] **Angelo Corsaro:** Right. And, I mean, he's a he's a pretty
incredible philosopher, which, you know. Oh, yeah, I like a lot and know, kind
of inspired this idea of getting as close as you end up. I was yeah, in the
second one, which I think it's also a source of inspiration for me is the father
of stoicism. Oh, okay. Oh, yeah. And which, you know, is all about, you know,
the perseverance, doing things properly right and making if.

[01:07:04] **Audrow Nash:** Other good work. Exactly.

[01:07:07] **Angelo Corsaro:** Because that's what give you. Oh where is
essentially, you know, the accomplishment and the happiness in life. Yeah.

[01:07:14] **Audrow Nash:** Yeah. So I think too, it's all process.

[01:07:16] **Angelo Corsaro:** It is. Yeah. And again is this commitment to
always improve. Yep. And I think you know that's that's what's beautiful right.
Oh yeah.

[01:07:24] **Audrow Nash:** So the father of stoicism then. Don't know.

[01:07:27] **Angelo Corsaro:** You know and then obviously for me.

[01:07:30] **Audrow Nash:** It's a really a.

[01:07:30] **Angelo Corsaro:** Marcus. Absolutely. Yeah. But the founder is
isn't cool.

[01:07:35] **Audrow Nash:** I love those old.

[01:07:37] **Angelo Corsaro:** If you read the meditations. Great. Right. Yeah.

[01:07:41] **Audrow Nash:** Yeah. Amazing. And he didn't even intend to write it
for anyone. Yeah. Just so crazy. Yeah.

[01:07:45] **Angelo Corsaro:** Yeah. If you haven't read it, you should read the
meditations. Yes.

## [01:07:48] Why ROS and How It’s Integrated

[01:07:48] **Audrow Nash:** Yeah. Recommend it. Yeah. So that's super cool.
Okay. And then I'd love to hear a bit about the like. So you guys are using rust
for. Yeah, absolutely. Rust is awesome. I really like rust. It's not something
that's been common for ROS 2 So we're having to add, to support you as, like a
first class middleware. We are having to add a lot of tooling around rust,
because rust has a very different philosophy of how package management work. Two
C plus plus Python. So I'd love to hear a little bit about why rust, why rust,
and then kind of how it's been going to integrate in with ROS

[01:08:27] **Angelo Corsaro:** Okay. Yeah. So the first version of the zero, the
very first versions was written in OCaml. Have you ever heard of OCaml?

[01:08:36] **Audrow Nash:** Yeah.

[01:08:36] **Angelo Corsaro:** Okay. So of course we're based in France, right?
So yeah.

[01:08:41] **Audrow Nash:** I don't know too much about OCaml. Okay. Well was it
kind of like TypeScript in some sense?

[01:08:46] **Angelo Corsaro:** So OCaml is a variation of EML, which is one of
the key, you know. Yeah. And the if you think about the programing language.
Yeah. On one side you have Lisp. Yeah. And it's like one family on the other
side you have ML and it's another family. Okay. Okay. And then the most popular
version of ML, is actually OCaml, which was done in France.

[01:09:06] **Audrow Nash:** And that's the ML in it, maybe. Oh, camel.

[01:09:08] **Angelo Corsaro:** Okay. Yeah. And okay, so, OCaml again, why you
can because we care immensely about security. Okay. So OCaml, obviously it's a
language for which there are I mean, there is a very sound type system, memories
managed. And by the way, there are things like coq, which, you can use to prove
certain algorithms. So in the very first implementation of internal with proved
certain element with Coq okay. Is France okay. And that around us we have lots
of formal method guys. So we had some elaboration with say was gorgeous.

[01:09:49] **Audrow Nash:** Yeah.

[01:09:50] **Angelo Corsaro:** We also were a smaller team. And you know, we
need productivity.

[01:09:54] **Audrow Nash:** Yeah. So you.

[01:09:55] **Angelo Corsaro:** Floyd, on the network, we want to make sure that,
you know, we don't have, 70% of the source of attack, which are related to
memory mismanagement ourselves. And there were some uni here. And really, focus
on on security, build on OCaml. And that could also come up. So we will be
closing Zenoh also as unique kernel as network appliances, which was super cool.

[01:10:18] **Audrow Nash:** Yeah.

[01:10:19] **Angelo Corsaro:** Then we start to pick up and especially we got
users in telecommunication, which they told us guys.

[01:10:27] **Audrow Nash:** Okay, right.

[01:10:27] **Angelo Corsaro:** No channel is nice. But you know, besides in
France, in Yale, in Cambridge go. Where do you find the academy program, etc. in
the financial market?

[01:10:37] **Audrow Nash:** Oh yeah. Yeah, they're very expensive program. Oh I
bet yeah. Because they're coming from finance.

[01:10:43] **Angelo Corsaro:** And so they said you have to move to an end to a
in other programing language.

[01:10:47] **Audrow Nash:** Because rust of all.

[01:10:48] **Angelo Corsaro:** The so actually rust we had already evaluate it.
Yeah. Whenever we did different underwriting. Well we did the first writing of
of Zenoh, but that was before the 2018 edition. Okay.

[01:10:59] **Audrow Nash:** Did it come a long way? Because I think over the
last, like, you know, our six years, it's really for.

[01:11:03] **Angelo Corsaro:** 2018 edition, we felt, you know, it was too much
of a stretch. And then you know, when we started the open source project and we
did the rewrite, it was just before 2018, but the prerelease of the 2018 was
there within evaluation. And we went for rust and honestly, it has been
gorgeous.

[01:11:21] **Audrow Nash:** Rust is great.

[01:11:22] **Angelo Corsaro:** Memory safe, concurrency safe. So we even got a
guaranteed an OCaml. Much better performance.

[01:11:27] **Audrow Nash:** Oh so bad.

[01:11:28] **Angelo Corsaro:** So very thick tooling ecosystem. Yep. Right. And
the other reason why we are chosen last is because you can run bare metal on
microcontrollers.

[01:11:36] **Audrow Nash:** Yes. Very true.

[01:11:37] **Angelo Corsaro:** We have already. If you look in our code base,
there are bits and pieces of zero that are already no SDD. Wow. So eventually
you know you will have the whole thing. Yeah, yeah. Quorums in on city. Do it.
Yeah.

[01:11:49] **Audrow Nash:** That's awesome. So yeah you can support
microcontrollers very easily in the same code base. And you just have like the
code paths.

[01:11:55] **Angelo Corsaro:** So in today we support with C. But eventually
because zero microcontroller that is still heavily area is C++ ecosystem. But we
have more and more requests about rust and will be getting there.

[01:12:06] **Audrow Nash:** Yeah yeah I've tried rust for microcontroller
programing and it was like a little difficult as a as process harder than C.
Well yeah. For this guy.

[01:12:15] **Angelo Corsaro:** They are getting there. But whereas an
interesting project. Yeah I began this credence with rust has been quite
terrific so far. Yes. Obviously the additions continue to to evolve. We were
probably one of the earliest user of I think.

[01:12:27] **Audrow Nash:** Oh yeah. Now has come a long way.

[01:12:29] **Angelo Corsaro:** That has come a long way. And I think we have we
have grown with it. Okay. You know, I don't regret the change. I think the team
is active in terms of productivity price.

[01:12:39] **Audrow Nash:** Yeah, yeah, yeah. Rust is great. Yeah.

[01:12:41] **Angelo Corsaro:** And then, you know, in terms of integration in
ROS I mean I would say great thanks to the open robotics team. Right. Because
they are doing the heavy lifting for us. I mean, they are pulling out, Zenoh as
it is. Right, integrating it. So in that respect.

[01:12:55] **Audrow Nash:** And all the build farm work, which I think is like
the bigger part. Yeah.

[01:12:58] **Angelo Corsaro:** Of all I know that, you know, folks like Steven
would like to change a few things, and in due time, they will. Yeah. But I think
it's working fine right now, and, you know. Great. Thanks again to the work.
Very open robotics for that. Yeah.

## [01:13:11] Future Plans for the Next 1 to 3 Years

[01:13:11] **Audrow Nash:** Oh, yeah. So where do you guys where do you think
you'll be? Or like when you look forward for the next, like, say 1 to 3 years?
Yeah. Where do you think you guys are headed? And like, what do you hope for is
at a scale so.

[01:13:26] **Angelo Corsaro:** Well, first of all, continue to do great
innovation, great work in addressing user problem because I mean, I always say,
you know, to to all the settlers, that's how we pull ourself. We are here. Is
that because. Yeah, because.

[01:13:39] **Audrow Nash:** Of our Atlas. Is that correct? Yes. Love it.

[01:13:42] **Angelo Corsaro:** Because of our users.

[01:13:44] **Audrow Nash:** Right.

[01:13:44] **Angelo Corsaro:** So our goal is to solve their problems. And you
know, we have grown, but we don't want to grow like crazy. We still want to grow
organically. Yes. Maintain our culture, maintain, you know, very high quality.
We are expanding in new domains. So we are it's probably will get public. But
besides automotive, in robotics, we are seeing application medical.

[01:14:07] **Audrow Nash:** Definitely.

[01:14:08] **Angelo Corsaro:** A Traffic Control management. Yeah.

[01:14:09] **Audrow Nash:** In microcontrollers and computer.

[01:14:13] **Angelo Corsaro:** And by the way, native you don't know, but we
already deployed in three blockchains.

[01:14:18] **Audrow Nash:** Wow.

[01:14:19] **Angelo Corsaro:** Okay.

[01:14:19] **Audrow Nash:** So cool. So that's really cool. You're seeing it in,
soon.

[01:14:23] **Angelo Corsaro:** Yeah. So I think we'll continue to expand in
terms of market and scale will continue to organically grow. You know, we have
now a platform we are going for certification. And yeah. So I think that now
that the scale, you know, it's kind of felt like the new innovative around the
block. And I hope that in three years it will be understood that we are the
place to go. Right? Oh, yeah. We get people that listen to you that like to
generally solve problem and that, as I always like to say, there will be here in
good and bad times, but that's a big difference. Yeah. And that's also stasis,
right. The big difference is you know who you can count when our time counts.
And I think that because we know we want to know where is challenge. Yeah. And
you want to choose your partner appropriately. And we are one of those partners.

[01:15:08] **Audrow Nash:** Oh yeah I love it. All right. Thank you very.

[01:15:10] **Angelo Corsaro:** Much. My pleasure. Thank you very much.
