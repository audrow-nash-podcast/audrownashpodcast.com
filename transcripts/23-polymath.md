## [00:00:00] Start

[00:00:00] **Stefan Seltz-Axmacher:** Like the best robot in the world today, is
less valuable for its owner than like an average computer was in 1960

## [00:00:12] Polymath Overview

[00:00:12] **Audrow Nash:** Alright. Hi, everyone. Let's start with intros.
Stefan, would you introduce yourself?

[00:00:17] **Stefan Seltz-Axmacher:** Yep. I'm Stefan Seltz-Axmacher. I'm CEO
and co-founder of Polymath Robotics. And, the the lesser good, co-host of
automated, another robotics podcast.

[00:00:29] **Audrow Nash:** Alright, Ilia, would you introduce yourself?

[00:00:32] **Ilia Baranov:** And I'm Ilia Baranov co-founder and CTO here at
polymath. And, I'm the silent, straight man partner of the, Automated podcast.

[00:00:40] **Audrow Nash:** Nice. All right. Hell, yeah. So tell me about
polymath. Let's do a quick review. Stefan, you will jump in. Yeah.

[00:00:49] **Stefan Seltz-Axmacher:** Of course. Yeah. So, polymath, basically
what we've done is we've take taken the the kind of commodity hard but unsought
but, purchasable point to point navigation stack that every robotics team has to
build over and over and over again, and we package it up as software that can be
deployed acROSs any off highway robot. So we're we don't want to be a vertical
robotics company. We don't even want to be the only autonomy organization in the
world. What we really want to do is we want to take the parts of your robotics
stack that you've probably built three, 3 to 18 times and make it so that you
can just integrate ours instead of rebuilding your own arm. We're on tractors,
bulldozers. We're too heavy for the DoD. As as neat updates from last time
around the show. We're on more different types of robots than we have people on
our team. And we can do everything from all of the software from point to point
navigation all the way down to ripping out individual modules like a certifiable
safety layer or localization or obstacle detection or or any one of those things
that you don't want to build and isn't really core to, to your own program.

[00:02:03] **Audrow Nash:** Hell yeah. Ilia, anything to add?

[00:02:06] **Ilia Baranov:** No I mean Stefan, basically summarized it. It's,
it's been it's been a journey to, to build the team out. I think we're overall
doing well. Probably not as well as we'd love to do in our wildest dreams, but.

[00:02:19] **Stefan Seltz-Axmacher:** I don't think that it's going to be
possible in a robotics. I don't think there's a physical area is physically
possible in robotics. Do as well as your wildest dreams?

[00:02:28] **Audrow Nash:** Yeah, I guess it's not like that.

[00:02:30] **Ilia Baranov:** Or any tech business

[00:02:31] **Audrow Nash:** Some crazy unicorn startup. But you guys are also, I
mean, trying not to have a vertical, trying to be more software focused where
you integrate real well with hardware. Yep. It's like that to me from our last
conversation. It's like it seems like a super good, like lifestyle startup in a
way.

[00:02:49] **Stefan Seltz-Axmacher:** Yeah, it's it's definitely a nicer life
than having to ship engineers to to west Nowheresville, on five hours notice to
try to fix something. But but essentially, you know, a thing that's really
interesting about this market and, and kind of, describe it more towards
roboticists. But after my first robotics startup, I went and hung out with some
SaaS companies, and I didn't, like, realize how much easier their life was. And
it's it's not just the lack of hardware. They feel like a lot of people in
robotics are like, okay, cool. Yes, this is harder than DocuSign, but like, I
gotta buy actuators, I gotta buy sensors. There's regulatory stuff. Maybe it's
like, that's actually not the why. Like SaaS is easier. SaaS is easier because
like most people don't have to build most of the stuff. And like like if you're
building a website, you should not really be doing backend stuff unless you're
back at website. You should not really be innovating on collecting credit card
payments. You should not really be be innovating on like 99% of the code base of
that, that website or that that online service. Almost everything should be
clear code at least until you're the millions of dollars that are. Whereas in
robotics, kind of there's features that you've built in your last company,
there's features that, disrupt their thesis about. There's features that some
company just did a really cool marketing video showing off that they can do,
which leads everyone else to think that it is as easy to say, make a humanoid
walk up, grab a doorknob, twist it, and walk through the door and gently close
the door behind them. When in reality, if you were starting with, if I sent you
a Unitree humanoid today, it would still be a decent amount of work to get even
to the point where you could do that, even if the hardware was out of the
problem. And that's because of, of kind of this, this lack of being able to, to
take components, from one robotics program to another. And that's kind of what
we're hoping to partially solve.

[00:04:48] **Audrow Nash:** Yeah, I totally agree with that. And that's why a
lot of web dev stuff feels so much faster because you, you don't have to write
everything. Yeah. There's really good libraries for thorny specific problems
like payments or other things like this.

[00:05:07] **Ilia Baranov:** Or or you just go, or you just go to the vibe
coding. Right. Which Stefan has been experimenting with. Yeah. Some things come.

[00:05:14] **Stefan Seltz-Axmacher:** Oh. But yeah. Like, but but like, I mean,
I think like and that's the, like the gap between where robotics actually is and
like, where the people outside of robotics think it is, is only kind of seeming
to get bigger as time goes on. Because people when you look at a web app, when
you look at a SaaS application, any feature that you can you see, you can assume
is commodity and easily replicable. The more money is cut into robotics, the
more features people have seen and they've applied that same heuristic to it.
And that's that's a.

[00:05:45] **Audrow Nash:** Really interesting.

[00:05:47] **Stefan Seltz-Axmacher:** Interesting thing.

[00:05:49] **Audrow Nash:** Yeah. So I agree with you. And I feel like it's hard
I mean like seeing the Unitree robot do like a side flip. Yeah. And stuff. It's
like pretty hard not to project a lot of competence onto that.

## [00:06:04] Robotics Standards Gap

[00:06:04] **Stefan Seltz-Axmacher:** I saw you make I saw an interesting
headline. And, and I said, I know this is a headline or a Reddit post, but
someone saying Unitree is a scam. I bought a Unitree and I can't do some
function, and I don't know if some function is walk through the walk up to the
door, grab a doorknob, and walk on through. I don't know if some function is do
a backflip. I don't know if some function is whenever you get an obstacle
course. But they bought this thing thinking I've seen a Unitree do a cartwheel.
If I buy a Unitree, it can do a cartwheel. Because that's how everything else
works. It's only that's losers in robotics where you see a function happen,
you're like, cool, I'll go buy a $40,000 robot. And if I do a really good nine
months of hard work, I can replicate that. Yeah, this saw sort of. Yeah.

[00:06:56] **Audrow Nash:** For sure. So with this, you're saying everybody else
does this? I understand it because or like the way I think of it. And I'd like
to see Ilia your perspective, and then jump back to you, Stefan. But the, the
way I understand it is that robotics is very early. We don't have standards yet.
We still haven't understood all the hard problems you have. ROS and ROS solves
some of the hard problems, but there's still plenty of hard problems, especially
in the, like, behavioral space. Which is what you guys are doing. But, how do
how do you think of this? Do you think that's correct? That it is because we're
still early or or it's just harder or what do you think?

[00:07:41] **Ilia Baranov:** Yeah. We kind of go back and forth on this topic a
lot. And if you really think about it, robots as an industrial manipulators, go
back to around the same time that heavy ion computers started popping up. You
know, you had the original hydraulic arms in auto plants come up around the same
time as, as computers are really getting going. But computers have accelerated
so much faster and made so much a deeper impact on society than robots. And it's
a question of why, right? And in a lot of ways, I think a big job of computing
and of UI is to get squish, the weirdness of the world, into a very specific
framework that the computer can deal with. So like a screen with this type of
web browser, with this kind of data or whatever, right. And a lot of work was
done on here's a communication protocol like TCP, here's a standard for wiring,
here's a standard for CPUs so that everybody can enter inter process. Whereas
robotics never really had that push. And so industrial arms made by one company
were drastically different than industrial was made by another company. And up
until very recently, if you bought like a ABB arm and were an expert in
installing them, you'd know next to nothing about installing a Kuka arm. Like
basically you're useless. And in fact, you had to unlearn a bunch of stuff
because that's the way they do things. And it's only really in the last, let's
call it ten, 15, maybe 20 years that we started to have this kind of
standardization layer appear in robotics. If I had to guess, I think one is
because you don't have this nice screen box, you can put a lot of your
interaction and code in you. There wasn't a good way to standardize on physical
interaction with the world. If you even just think of grippers. Right. Like,
there's no there's no good way to say this gripper will work in every single
condition because it's either too expensive or too fragile or not precise
enough. Right? There's always some trade offs where some like monitors like
we've had monitor standards from us for 50 years. Right? Like there's no there's
no magic there. And so I think it's taken time to get the fundamental tech
energy efficient enough and complex enough and powerful enough to the point
where we now have enough extra compute power to add on this kind of
standardization layer. Because anytime you standardize something, anytime you
abstract something, and we do that a lot, you inevitably pay a performance cost.
Like when I was working at Amazon on the little Astro robot, the Lego model of
it right here, we had to squeeze every micro out of the CPU because there was a
small CPU and we had to do a lot of complicated things. And so you just don't
have the space to do a lot of affordances and or abstraction layers and those
kind of things. And now we're starting to. Right, and I think, again, we're
seeing a little bit of this race of end to end neural models, and we can talk
about that in a second, kind of again, being very custom in a sense of like,
here's a camera input, here's the output, and magic happens in the middle and
you don't know what it is. Battling off against more flexible applications,
which can then be transported from robot to robot.

[00:10:51] **Audrow Nash:** Yeah I agree with you. So where do you think it's
going. Ilia. And then Stefan I'd love to hear your thoughts too.

[00:10:58] **Ilia Baranov:** Yeah. Good question. I think I still, you know,
looking at the history of technology and looking at the history of the internet
and computers in particular, I think almost universally the most open source,
most comprehensible standard wins and the most flexible one wins in almost every
case. Right? So I think that a lot of the big neural end to end neural net
models, which are starting to come out for machine learning, if they're open
source and adjustable, that's a good first step. But I think especially in
robotics, in this kind of idea of embodied AI, you can't, for example, take a
Unitree demo, flip and put it onto an Atlas robot and like, you know, install
suit up until the Atlas kickflip and like, there you go. Goes that doesn't
exist, right? And I think that's hampering progress. So I think there's still
going to be an underlying flexibility layer that we still have to build. And
that's part of what polymath does. And other groups in introspection, in
communication, in configuration management, these are all things that computers
have more or less solved. And robot robots haven't. And so I think there's a lot
of growth there. And then I think on top of that layer is these kind of big end
to end models, which tend to be very specific per task or per robot or per
environment.

## [00:12:14] Market Reality

[00:12:14] **Audrow Nash:** Okay. Stefan, what do you think?

[00:12:19] **Stefan Seltz-Axmacher:** So looking at, yeah, kind of the broader
history, like, like related, but more from the business sense. Early crappy
computers, like 50s era, 70s era, type of computers, which could be a massive
amount of hardware expense, but create really, really big savings and really,
really big upside, like a single piece of hardware could save you tens of
millions of dollars. If that if that hardware is changing your supply chain or
accounting for how you're spending money and you're a company the size of IBM or
GM or whatever. And, and so the, the ROI was pretty big and pretty early. And
that put pretty easy pressure on, like, hey, let's drive down compute costs. So
not just GM can do this, but also companies who are only worth $10 billion and
now companies are only worth a billion, and so on and so forth. Robotics has
more problems than just build a compute. There's also batteries. There's also
actuators. There's also sensing. There's there's that big long list of other
things. And it is hard to come up with a robot, a robot that individually saves
a company more than $5 million a year. Like the best robot in the world today is
less valuable for its its owner than, like an average computer was in 1860.
Probably even in just like, non inflation adjusted dollars. The math probably
doesn't make sense. So like the pressures have been phenomenal on inflation.
Yeah. Like like even if you don't include inflation like probably one of those
IBM mainframes in 1960 probably cost $10 million. And for GM, save them $150
million. And like there's no robot that that is comparable.

[00:14:14] **Ilia Baranov:** We have a good example that, we can come back to in
mining space.

[00:14:18] **Stefan Seltz-Axmacher:** So, so like the, the initial pressure for
robots to get better, just like the math didn't make as much sense. In the 60s
and the 70s and 80s, early 90s, and even in the US, I think a really cool thing
happened for robotics, which is that a bunch of people made a crap ton of money
on software, on web apps, on microservices, on organizing databases of
information to make them quickly retrievable. And many of those people thought,
hey, I'm a cool tech person. I got money to burn. Obviously a cool tech person
should be working on robots. Definitely. And that poured money into things like
the various self-driving car programs. And I think that led to a, a race, a
series of races where people put so much money into this market that, you know,
compute continued to get better and cheaper as it naturally did, but ruggedized
compute became commodity. Sensor modalities got wider and more reliable, more
usable. And they became cheaper and cheaper and cheaper as as massive amounts
of, frankly, dumb money got poured in. Because because everyone assumed that,
like, Moore's Law would work just just as quickly for self-driving as it did
for, you know, microchips in the 90s. And, we now we're in a position where the
components that you need for robotics have never been cheaper. There's, there's
been 10 to 15 years of press release propaganda about how robots are imminently
going to be here. So my hunch would be there's been more, more measurable
interest in robotics in the last 15 years than the last 100 years put together.
Probably like, and way more for us. An interesting thing. It's kind of happened
where everyone assumes there's more robots than there are, and everyone assumes
that should be more purchasable than than it is. So, you know, a big part of
what polymaths businesses, frankly, is there's these big industrial companies
who have said, hey, cool, if you can drive a car in San Francisco, I want to
drive a vehicle in a Roomba like pattern in a weird part of a mine. 80 hours a
week, nonstop. Who do I have to write a check to to make that happen?

[00:16:41] **Audrow Nash:** It's like no one exists.

## [00:16:43] Labor Shortages

[00:16:43] **Stefan Seltz-Axmacher:** Yeah, and that's that's what we're doing.
A polymath, functionally speaking. And that's the that's the operations that
we're doing. But I think like we the components for robotics have gotten
cheaper. The interest has gotten to a fever pitch. And now it's a matter not of
like, let's argue about which theoretical technology might be the most exciting
ten years from now. I think we're actually now in a how do we as a market build
products that seize this like incredible intersection of of conditions to make
robots, frankly, a, a relevant industry at the global stage?

[00:17:18] **Audrow Nash:** Yeah. I think one one thing I'm curious about your
perspective on and then Ilia, I want to hear your mining example, but the also I
think that I see a lot is labor shortages across things, which I think is
creating additional pressure. Yeah. On the factors you are describing now. So
it's like it's hard to find labor. People are aging out. Yeah. What do you think
of that?

[00:17:43] **Stefan Seltz-Axmacher:** There's. So labor shortages became pretty
popular to talk about I think like post Covid. I think those of us in the white
collar world realize that, we desperately need the people, the blue collar world
to do stuff for, for our little tip of the pyramid to be so pleasant. But in
reality, the sorts of industries that we primarily serve, you know, mining
quarries, oil and gas, all the, logistics, railroads, all of them have been
plagued by labor shortages for the last 50 years in, like, pretty structural,
big ways. So, like, kind of fundamentally thinking about manufacturing, sku
diversity is generally bad.

[00:18:24] **Audrow Nash:** What is that? I don't know what that is.

[00:18:25] **Stefan Seltz-Axmacher:** Yeah. SKU like, SKU like individual types
of products that you have. Like when, when, when the iPhone came out, there was
initially, you know, it only works with, one radio network and there was three
battery sizes that were, sorry, three memory sizes. And that was all your
options because that was a orders of magnitude cheaper supply chain to manage
orders of magnitude cheaper engineering process to manage. Lots and lots and
lots of advantages of we sell, you know, Henry Ford, you can have your car in
any color you want, as long as it's black. Right? In, in industries like mining,
however, labor shortages are so acute that there's been like massive explosions
of vehicle diversity. And like, there are vehicles that you fundamentally
different things like you can't replace an excavator with a bulldozer, you can't
replace a bulldozer with a haul truck. Like those are those are different
things. Totally. But what I mean is like caterpillar sells something in the
range of 150 to 250 different types of bulldozer for, different engine sizes,
different blade sizes, different configurations. All of that means and like in
total, caterpillar has something like 800 different varieties of vehicle.

[00:19:38] **Audrow Nash:** That's crazy. Yeah.

[00:19:40] **Stefan Seltz-Axmacher:** Like GM, my 100 B has like 45.

[00:19:45] **Audrow Nash:** Yeah. Wildly different.

[00:19:47] **Stefan Seltz-Axmacher:** Yes.

[00:19:48] **Audrow Nash:** Magnitude different. Okay.

[00:19:49] **Stefan Seltz-Axmacher:** The, and what happens, we have all this
diversity is every part becomes more bespoke, which means more expensive. What
happens is every fleet ends up being more diverse, which means, you can't. You
have fewer interchangeable parts. Which means there's parts that, like, are
really hard to get.

[00:20:08] **Audrow Nash:** Just just to make sure I understand the reason that
it becomes more bespoke is it it becomes more bespoke, more custom to make it so
that you have things that are more suited to the job so that you can maximize
the people that there are because of the labor shortages. Is that.

[00:20:25] **Stefan Seltz-Axmacher:** Correct? I need to basically have the
biggest bulldozer that I can fit in these major operating conditions, because I
can never get more people, and my mind can have a slightly smaller maximum size
bulldozer than yours. Again. So you have a wild you have a different model than
I do.

[00:20:40] **Audrow Nash:** So how how has that trend been changing over time?
Has it been equally bad for the last you said like 50 years or something? We've
known these labor shortages or has it gotten worse? Or how is it?

[00:20:51] **Stefan Seltz-Axmacher:** It seems like you there are only only more
OEMs entering these markets, selling only more different types of equipment.

[00:20:58] **Audrow Nash:** So that implies it's getting worse and worse.

[00:21:01] **Stefan Seltz-Axmacher:** And like these, it's.

[00:21:02] **Audrow Nash:** More and more bespoke.

[00:21:03] **Stefan Seltz-Axmacher:** And these models, you know, if you're if
you're John Deere, you want to sell people a new tractor as quickly as possible.
So the the sale of replacement parts gets, sunsetting fairly frequently. Like,
we know if we have organizations that are building in-house tractors because, it
has a meaningful difference to their bottom line, to be able to amortize the,
the vehicle frame for 20 years as opposed to ten.

[00:21:29] **Audrow Nash:** Wow. That's wild.

[00:21:30] **Stefan Seltz-Axmacher:** And all of this is because lack of having
people. Yeah. And when you have all of these weird things, like going back to,
like, the parts that you can't replace, the ultra class haul trucks have these
really gigantic, you know, 3 or 4 meter in, 3 to 5m in diameter tires, that are
50 to $100,000 a pop. I have heard stories of publicly traded companies worth
hundreds of billions of dollars buying spare tire tires from known criminals
because it meant the vehicle got back to work weeks earlier than it would have.
Yeah, it's wild. And that's because you have a weird special vehicle with a
weird, special part if, in fact, you're just using a truck like you see on a
highway, you go to the local equivalent of Jiffy Lube and buy replacement tire.
The reason you can't do that is because you you can't get enough people to, to
drive enough trucks to do that in that size vehicle.

[00:22:30] **Audrow Nash:** And so and so you think with robots, if robots are
able to take over some of the labor. Yeah, we can have more general robots. And
thus economies of scale kick in, cost comes down.

[00:22:42] **Stefan Seltz-Axmacher:** It kind of becomes a what is the most
efficient size for hauling material out of a mine? And efficient starts to look
like. Okay, where can we get the most, the most cheapest spare parts?

[00:22:54] **Audrow Nash:** Yep. For maintainability and things.

[00:22:57] **Stefan Seltz-Axmacher:** And that also, in turn, makes it easier to
make these things electric.

[00:23:01] **Ilia Baranov:** Yeah. There's also the spares consideration here.
Where, where when you have a critical piece of equipment. This is common in
farming a lot. Is that your crop that you're growing is not only your crop, but
you're in a geographic location where your neighbors are growing the same crop,
too, and your harvest season is all at the same time. So your demand on your
harvesters is like 0000 thousand percent zero.

[00:23:28] **Audrow Nash:** There is everyone's one widget is selling at the
same time because everyone has peak demand at the same time. Exactly.

[00:23:33] **Ilia Baranov:** Exactly. And so as a farmer, it's actually a smart
investment not only have one $2 million harvester, but have two $2 million
harvesters just in case the first one breaks and it's that size and that cost
because your most expensive thing is your person driving it. So if you don't
need that and instead have ten $100,000 ones, if one of them breaks, yeah.

[00:23:56] **Audrow Nash:** Doesn't matter if one is out of commission. So what?

[00:23:59] **Stefan Seltz-Axmacher:** Yeah.

[00:24:01] **Audrow Nash:** Yeah. This this to me, sounds a lot like what
Electric Sheep is doing where they have really small mowers as opposed to really
big ones that were created by labor shortages because they wanted one person to
maximize their surface area. Yep.

## [00:24:15] Cutting Mining Costs

[00:24:15] **Ilia Baranov:** Exactly, exactly. It's the same thing. I'll go back
to that example. You know, the size of this equipment and, and the labor issues
also kind of caused this interesting story where we were talking to a mining
group about deploying autonomy on some of their ultra class haul trucks. And,
you know, we did the math on the business case of how much they'll save their
improved reliability, those kind of things. And it came up to some number, I
forget what it is, but let's call it like the $5 million a year make up a
number. They talked to us, talk to us, and then they came back and they said,
you know what? We're going to put this on pause because we did the math that if
we just put a circuit in the thing to turn off the engine, if it's idling like
an idler, same thing you'd have in a car. Auto start, auto stop, we'll save 30
dollars a year. Of fuel because the drivers have been idling their vehicles,
charging their phone. Yeah, and air conditioning, of course. And so, you know,
there's, there's those kind of efficiencies where all of the size and complexity
has caused these weird distortions, where you need this really heavy fuel for
very specific, large equipment that has to be shipped and parts and assembled on
site and lives its entire work life on site. I it's buried on site, like all
these kind of very, very weird, complicated things just to reduce the amount of
people at the tip. So if you have a supply chain, you know, and do do things
have similar concerns, right. The furthest deployed base or your furthest
deployed mines is the same problem. Every nut and bolt that has to get there has
to go through three stops to get there, and getting more and more expensive
every time. And so the more you can reduce the amount of people you have at your
furthest point, the smaller your overall it gets. And so every one driver we can
save, we're saving probably ten ish people that are moving food around and
providing lodgings and doing air and refueling. And so and we don't you know,
Stefan and I don't suspect that we'll get a fully like fully autonomous as in no
human beings, you know, there's there's no factories, for example, they're
coming on the lights out factories where literally the overhead lighting is off
because no human stepped foot in it. This is happening a lot in China, for
example, for cell phone production. I think that's further along than what
outdoor mining robotics is right now, where you still need a human to do
maintenance and refueling and change the tires and fix the gears. You know, that
got jammed, for example, all those things, you'll still need some level of human
support, but every one person we can strip increases the value of their asset
drastically.

[00:27:02] **Audrow Nash:** Yeah, the mine is that pyramid you're mentioning.
That's a really good metaphor for it because like, you raise the top a little
bit and then the like, there's a significant side added which goes all the way
down. Yup. Support. People need support. People need support. People like H.R.
all the things and support and.

[00:27:20] **Ilia Baranov:** Supply cost.

[00:27:21] **Audrow Nash:** Complexity.

[00:27:22] **Ilia Baranov:** Yeah. But some of these really far minds you know
just to give you an idea, especially in Australia, are so far that not only are
the people flown in and the spare parts, but there's fuel flown in. Right. They
fly in jet fuel to refuel the planes that are flying. It's crazy. Right? Yeah,
it's a hook.

[00:27:40] **Audrow Nash:** And they were like, that's the cheapest way to do
it. I think that's the most efficient thing we thought of.

[00:27:44] **Ilia Baranov:** Yes. Wow. Yes. Yeah. They're not they're not stupid
right. No of course you don't. You don't run a multi-billion dollar business by
not being efficient.

[00:27:51] **Stefan Seltz-Axmacher:** But it's there's also like some
interesting like game theory that there's some impacts where if you're going to
set up a mine that size, it has to be that size like you have to you have to rip
the whole piece of ground apart, things that that extend the life of the mine by
six years but might be less environmentally destructive. Just don't cut it.
Whereas if the labor becomes more fungible, if if that that stops being the
stopping point. You can be a lot more strategic about where you go at.

[00:28:25] **Ilia Baranov:** And you could be more efficient generally.
Resources gold, for example, there's no you know, people have this image of like
a guy with a pickax knocking nuggets of gold off the wall, but that that doesn't
exist anymore. Right? It's like the geologist has told us that there's one ounce
per metric ton. We can.

[00:28:41] **Audrow Nash:** Find it.

[00:28:42] **Ilia Baranov:** Here. Or or more like 0.1oz per metric ton.

[00:28:46] **Audrow Nash:** Yeah. And then process it.

[00:28:47] **Ilia Baranov:** So yeah. You don't find it, you just. Yeah. You
just process metric ton after metric ton after metric ton. And you need a
certain size for that again, because of that pyramid. But maybe there's another
site that is two ounces per metric ton, but it's only 50,000oz total. And so
there's no point in building a site there because you're exhausted before you
can ramp up, that all becomes more more possible with more automation, with less
labor.

[00:29:12] **Audrow Nash:** Yeah, I think that's a very cool. I mean, that does
seem like generally how technology diffuses. It's like it's starts super
expensive, very difficult. And then it becomes commoditized over time. And then
you get like web apps where you have payments as a service and stuff like that
is kind of the end of that.

[00:29:33] **Ilia Baranov:** Yeah. And I think, I think for us, we're on this
curve right now where we're, we're, we're trying to build kind of a standard. I
hate to use the term operating system because it's a little bit overused.
Everybody has their own OS. But like we're trying to build the basic autonomy
layer and all the hardware abstraction to interface with your autonomous
machine, such that then you can do it and go build the really fun apps, and then
either the client themselves or the or other developers like Stefan is a good
example on fuel versus yield usage. Which you can't do, right? Yeah.

[00:30:05] **Stefan Seltz-Axmacher:** Like like a lot of what I, what I would
but I often jokingly referred to as like MBA porn about autonomy is is not is is
pretty far disconnected from point to point navigation. So like if the, the,
the, example Ilia was calling out is in a mind, you have a workspace where
you're getting material from, you have a process or you need to dump the
material. You can imagine that there's two routes in between them. One is more,
one is faster, but less fuel efficient. Yeah, there's slower, but more fuel
efficient.

[00:30:37] **Audrow Nash:** And so it's an optimization problem to see which is
better.

[00:30:40] **Stefan Seltz-Axmacher:** Not not today. And today you just drive
the way you drive. Whereas in a half day of work, a reasonable developer could
code up language that says, you know, based on the prevailing price of, or based
on the prevailing price of fuel, will route vehicles accordingly.

[00:30:58] **Ilia Baranov:** And like or even less you in less than two routes.
It's just like your engine has an efficiency point. And so if you drive 10%
slower and try try getting an operator to. right, like that's like no
maliciousness. It's just as a human, you're not going to be you're not gonna be.

[00:31:16] **Audrow Nash:** Yeah. And you'll be impatient.

[00:31:17] **Ilia Baranov:** Two to oh, fuel prices higher. 10% lower.

[00:31:21] **Audrow Nash:** Feel like I just want to get it done.

[00:31:22] **Ilia Baranov:** Like even that speed adjustment. Yeah. Is not is
not possible. Whereas is if you have an autonomy layer and you have a simple way
to command it that becomes basically trivial. Like that MBA could.

[00:31:34] **Stefan Seltz-Axmacher:** my code with ChatGPT

[00:31:36] **Ilia Baranov:** Use ten lines of code. Basically I've like look up
fuel price, look up oil price or or price, subtract, set the speeds and see
which is lower.

[00:31:45] **Audrow Nash:** Pick one.

[00:31:46] **Stefan Seltz-Axmacher:** And and I think like our kind of thesis
right now about like what's going on in the world. There's a lot of attention
being sucked up by humanoids, by foundation models for robots. None of that
matters compared to that. What we just talked about like like a fuel
optimization, like what I just described for a company like BHP, which is a $280
billion publicly shared mining company that might individually give them 5 to
$15 billion more year profit, more profit a year, like, wow. Like.

[00:32:19] **Audrow Nash:** Did you say billion?

[00:32:20] **Stefan Seltz-Axmacher:** Yes. What? Yeah. Like humanoids don't
matter. I'm like, this is not like it's cool, it's neat, but.

[00:32:30] **Ilia Baranov:** Well, as as asterisk. Asterisk if BHP if BHP wants
to increase their share price by being a tech forward company, I'm sure they'll
they'll buy one of every humanoid. Yeah. Make them dance a little bit, have
their stock price raise and that'll be enough. But the actual main drivers are.

[00:32:49] **Stefan Seltz-Axmacher:** And like we're in a state now where like
for for industry the things that unlock that sort of efficiency hacking is, is
now relatively trivial. It's now like pretty straightforward, where you could
really just have a bunch of product manager types of people, vibe code out
solutions that drive very, very large gains in efficiency.

[00:33:14] **Audrow Nash:** Since I am unsure if this is terrifying or what, but
that's crazy, I do. I see what you're saying. What a thing. Yeah, so but it's
it's really interesting to put robotics in this context or a lot of robotics
applications that they are creating. Not that much for savings. Whereas these
efficiency gains might be, hugely impactful, especially for these large
companies. Yep. That's wild.

[00:33:48] **Ilia Baranov:** But you need the first.

[00:33:49] **Audrow Nash:** Because the robotics give you the monitoring and the
ability to actuate it.

## [00:33:55] AgTech Needs Action

[00:33:55] **Ilia Baranov:** And that's the hill that a lot of robotics
companies well enable in the control. Oh yeah. So, so so again another example
by the way in agriculture is another example in agriculture is like five ish ten
years ago. There's a ton of like egg data providers. We'll fly a quadrotor
around with. That was super popular and it was great until it hit the barrier of
like, okay, but I have to do with you, like, okay, I know that this particular
point in the field is getting over watered. Want me to do about it? Right. And
so you need to actually close the loop with a system that actually take that
data into account and actually change your behavior of your planting your why.
Yeah. Because remember. And so the same thing that it's.

[00:34:38] **Audrow Nash:** Just it's like quantified self stuff where you're
just measuring but you're not changing stuff.

[00:34:43] **Ilia Baranov:** But you're not changing anything And so again like
it's you need you need intelligent actors. And so again, this is kind of like AI
agents is the buzzword. But basically it's like you need drivers in seats of
devices that are better responded to data enough that they can do 100% per
minute of their speed, or they're watering or they're planting or whatever,
which humans do, and that's that's the piece to unlock it.

[00:35:11] **Stefan Seltz-Axmacher:** So we work with we're working with a
pretty large AI conglomerate that, you know, is large and secretive. And if I,
if I, if I named them, you wouldn't recognize them. But yeah, I social name
them, they, they harvest a specialty crop, and they have, you know, a window of
time three to 3 to 6 months, to get all of it off the field. And every year,
they do not know whether they have three months or, you know, five and a half.
They don't know that on January 1st. It depends on how rain happens in the first
part, like in the growing season, the of.

[00:35:49] **Audrow Nash:** Changes during that time.

[00:35:51] **Stefan Seltz-Axmacher:** Changes. Changes on a daily basis changes.

[00:35:55] **Audrow Nash:** So you want to estimate basically and you want to do
the intelligent thing based on. Now how likely it is that not you have to get it
out quicker versus.

[00:36:03] **Stefan Seltz-Axmacher:** I mean like like they like like they're a
super cool company and super data driven do a lot of really neat, analysis
stuff. But like, as the season happens, they'll start to get a sense for how
long it's going to be until crops start rotting in field. And we'll we'll make
decisions on the fly about like we're going to speed all of our harvesters up by
25%, or we're going to drop a by 10%, or we're going to do this, or we're going
to do that because that has a very substantial yield, impacts. They also like
have to jump from one field to another because while they have hundreds of
thousands of acres under cultivation, those hundreds of thousands aren't all
next to each other.

[00:36:42] **Audrow Nash:** Over. Yeah.

[00:36:43] **Stefan Seltz-Axmacher:** So there's this kind of big, you know,
traveling salesman, multi level optimization game that they have to play. And
like some part of that is yell at guys on the phone with limited with limited
language, to change their operations in real time. And that is the thing that
robots can very quickly do and like, we think it's reasonable to think that that
could lead to 10 to 20% more, more crops successfully getting off the field and
also like even like down to the minute where that equipment might be in a field
and it might leave that field before the field is fully harvested. I because
they have to go to another field. But if you took in the data of the truck
that's going to move that equipment from one field to another, and you took them
that location to, to do a live, estimated time of arrival, you could
theoretically be operating until just the moment that that truck arrives. You
could change the the road that you harvest to make you be as close as possible
to. Where are you going to get loaded into that truck, when it arrives? Because
that itself might mean they get 2 to 5% more products off the field.

[00:37:52] **Audrow Nash:** Which makes a huge impact in terms of total sales.

[00:37:55] **Stefan Seltz-Axmacher:** If your costs and your fixed costs are the
same, but you suddenly increase revenue by 4% through some data science
shenanigans, that's the ball game.

[00:38:05] **Ilia Baranov:** Yeah, that's your entire profit margin. Basically.

[00:38:07] **Audrow Nash:** That's wild. Or it's I haven't thought about this.

[00:38:11] **Stefan Seltz-Axmacher:** Yeah.

[00:38:13] **Audrow Nash:** It's such an interesting way to view everything, and
it makes a lot of sense to me. And yet so there's tons of these big companies
and these big companies have very large inefficiencies. And it's partially just
because people are in the loop and people are not you can't control people that
well. Yeah. Robotics has covered with the or like the quadrotor stuff you were
mentioning where they do a bunch of sensing. It's like, okay, sensing is not the
only thing you need, because I remember this huge wave of quadrotor companies
that had monitoring and they almost entirely have gone out of business, you
know, and I think that is exactly why what you're saying, which is they couldn't
change anything easily. And so this kind of thing, when you add robots and the
robots make it possible to identify these things, you can make better. And then
to quickly put in practice whatever is best.

[00:39:09] **Stefan Seltz-Axmacher:** Yep.

[00:39:10] **Audrow Nash:** That's incredible.

[00:39:12] **Stefan Seltz-Axmacher:** Yeah. I mean, like this AI group does like
studies on how much more efficiently they can harvest a field if they eliminate
left turns. But yeah, humans for that.

[00:39:22] **Audrow Nash:** Yeah.

[00:39:22] **Stefan Seltz-Axmacher:** Yeah, yeah. Then like, it's, but like, if
you're, if you're ups and you want to try that out, you need a lot of data
before you can slowly roll it out. And then there's a lot of change management
to get rid of left turns. Whereas yeah, if you like, like we, we for example,
were bidding on a program. I think this is obscure enough and, and, and
unspecific enough that it's fine to talk really openly about. So we're bidding
on a program to automate a vehicle in an asphalt lab. And basically they put
asphalt outside in a ring, and, and drive a truck with about your weight over
it. This particular.

[00:40:02] **Audrow Nash:** They look at tire wear or what do they do.

[00:40:04] **Stefan Seltz-Axmacher:** Think primarily where on the asphalt.

[00:40:06] **Audrow Nash:** The road wear on the asphalt. Yeah, that's a frickin
lariats to just make a circle of asphalt and then drive on it until there's a.

[00:40:14] **Stefan Seltz-Axmacher:** Yeah. So the driving super variable. Yep.
The people are variable. There's a truck that's been driving on this lab, 40
hours a week for the last 40 years. Right. But like, like if you want to
experiment, in that lab, you need to write a test plan, that says, okay, for the
next for the next six months, I want you to drive at 45 miles an hour, and do a
hard braking event every 15 minutes or something. And then you need to coach the
person to actually.

[00:40:46] **Audrow Nash:** Do do that.

[00:40:48] **Stefan Seltz-Axmacher:** Whereas, if you, if that vehicle suddenly
autonomous, you could, you could operate that testing environment like you would
medical testing equipment where you could be driving 24/7 there's a blizzard
going on and you wouldn't want, you know, no humans should risk their life.
Driving in an asphalt lab during a blizzard, I think is a easy, easily agreeable
statement. Okay. But, like, you could have the vehicle do erratic braking, in a
blizzard nonstop. You could have, I could be running one experiment, where I get
every raining day of the year, and you could be doing a different naturalist
experiment where we're driving differently, during daylight hours for for
Aurora's experiment. And maybe Ilia is doing yet a different experiment about
how how long it takes for there to be a change in the coefficient of friction
after it's finished raining. And, and it's starting to dry out. And like, those
three tests can very much be run in parallel. Those three tests can very much be
orchestrated by piece of software. They can't be orchestrated by a person
yelling at a truck driver.

[00:41:56] **Audrow Nash:** Yeah. Very interesting. Yeah. Because, I mean,
basically what I'm imagining is you can tell a truck driver, you can tell a
person to do these kinds of things. Yeah. The thing is, the compliance will be
somewhat low. Yeah. And you'll see a lot of noise introduced because of that.
Whereas you can have the robot just follow it and then you can more easily. It's
like the the standard deviation of different outcomes, you see decreases, it
becomes much pointier, much smaller distribution or much narrower distribution.
Yeah. Okay. That's super cool. I love the idea of being able to command tests
like that. So you can test. And you can also, especially if it's trivial to set
up the tests, you can run more of them. So you get more data points, you
understand more things and then you can optimize significantly.

[00:42:41] **Stefan Seltz-Axmacher:** I, I felt comfortable saying, yeah, what
we're bidding for is because to my knowledge, there's like 100 of these labs in
America. Like, I, I probably didn't say nearly anything that could lead you to
guess where were benefiting that far.

[00:42:55] **Ilia Baranov:** Well, we we know it's not in Florida because of the
blizzards.

[00:42:58] **Stefan Seltz-Axmacher:** but like, there's in in Florida, for
example, other than at least 4 or 5 of these sorts of facilities where it's a
test track for investing, blah, blah, blah. And I and a you don't need as many
of them if you can get 150 hours a week of testing, as opposed to 35 or 40 for
sure.

## [00:43:16] Practical Autonomy

[00:43:16] **Ilia Baranov:** But I think I think coming coming back to the meta
point, though, like, I think I think the storyline here of what we're doing is a
lot of what I would kind of in quotation marks, but basic autonomy of moving a
vehicle from A to B safely and successfully, and doing so in a way that makes
business sense and that seems boring in a lot of ways. Like all of that to to
most people. We talk to you though, like, yeah, of course like Waymo does it
like y, you know, how hard is it to do it in a, in a space or, you know, the
DARPA Grand Challenge did it ten years ago. What's the problem? And it's similar
kind of discussion to, you know, one, one computer ran once, like there is a
D.O.D. computer in the 70s that could run a simulation. So there's this kind of
trickle down effect.

[00:44:12] **Stefan Seltz-Axmacher:** I played Grand Theft Auto once. Why can't
The matrix be real?

[00:44:17] **Ilia Baranov:** Yeah. Yeah. Exactly. That's that's a similar
discussion. Right. So I think I think tier two point, they asked at the start of
the thing, I think there's a lot of effort and hype right now in AI and
humanoids and those sort of things. But I think if you look back on history, the
the lag between that being interesting and that mean, being a significant chunk
of the market is much bigger than people think, almost always. Right? Like the
lag between, you know, smartphones appearing as a concept and smartphones being
common, which was one of the fastest ever, was still like six years. I'd have to
go fast seven for everything, right? Right, right. But but tell that to a VC
like that's the fastest tech ever, right? Here's my humanoid, which costs 30 to
$120,000. The lag you're going to have from this to in every home is probably in
the order of 12 to 20 years. So please invest $1 billion a year for the next 20
years and maybe will be one of the winners versus kind of Stefan and I have
taken a much more cash efficient approach of like, where are the most expensive
pain points that we can automate for the most amount of money, with the least
amount of technical effort and risk now because we're lazy decision because
like, that's how you actually run and efficiently.

[00:45:36] **Audrow Nash:** I view it as like, why do you need to make life
harder? Yeah, just do the valuable thing. Like, yeah, you don't need to play
life on hard mode. It's already difficult.

[00:45:45] **Stefan Seltz-Axmacher:** Especially when you, when you, when your
life is with robots.

[00:45:48] **Audrow Nash:** Yes. Totally. Yeah. Let's see. Yeah. Ellie, I really
like your point with all that. I wonder. Let's see, I guess. So with all of
this, what I think is a lot of times people focus on the real sexy applications
and things like this, or the sexy demos. But I've been believing increasingly
that the majority of the value is in really unsexy tasks, and people don't get
as excited for it. But the thing is, it's like budget. That's where you can make
the biggest gains. Yeah, for these kinds of things. And like start to realize
the promise of robotics. Yeah.

[00:46:28] **Stefan Seltz-Axmacher:** So and I think there's a challenge right
now because in a way you can think about there being like two different robotics
markets. There there's companies that I think of as like hyper robotics where
the, the, the, the company exists because they're doing cool stuff, the money,
because the thought is they could do more cool stuff eventually. You know, cool
stuff has to be valuable, right? So if we wait long enough, it will eventually
do something. And then there's a it's a thought. Yeah, it's a thought. It's a
thesis. And then there's companies who are building, you know, robotics
companies similar to how you would build a web app business or a SaaS company or
an e-commerce site where it's like, here's a, here's a, a problem that the
market has that I can reasonably build a solution for with a seed round. And now
that I built a solution for them, I can get them to pay enough money that
there's a line of sight to where I take in more money every year than I spend.
And there's this. And I'm not just, you know, talking my own book here. There's
a couple companies in the solar market, doing that. There's um, is a great
example of that. And I, there's a bunch of that stuff, and, and I think that's
taken me a while to realize is that jumping from hype over to realistic is like
fraught with peril. And, and I don't know of many, many, robotics.

[00:47:56] **Audrow Nash:** Companies that have successfully made it.

[00:47:58] **Stefan Seltz-Axmacher:** Yeah. Because like, if you're worth $10
billion off of hype, like, like cruise, for example, I think at peak was worth
$30 billion from hype. But when no one was willing to say that our worth $40
billion, that all they had to fall back on was a robo taxi business that was
maybe making $4 million a year.

[00:48:20] **Audrow Nash:** Yeah, super low.

[00:48:20] **Stefan Seltz-Axmacher:** That $4 million a year or that $1 million
a year was never going to cover their 3000 engineers. Huge burn rate, half $1
billion a quarter burn or whatever.

[00:48:30] **Audrow Nash:** What do you think of, like, Waymo with this? All
right. Because they're I mean, they're still around. Yeah. And I hear people
like them quite a bit. And I think they're.

[00:48:38] **Stefan Seltz-Axmacher:** Waymo's really cool. Go fund it. I'm
really I'm really rooting for it. But let me let me put you in a scenario right.
You are the CFO of alphabet, right? You have an equity plan with 1% or so of
alphabet. So I haven't looked at I don't, I don't like, follow public companies
that closely, but one, I think they're worth $1 trillion, maybe two. Easy $10
billion, of an equity incentive plan. If, you know, the the hype around
robotaxis is, is up and down. But let's say some bad thing happens to Waymo.
Public bad thing happens. And that brings down the Waymo stock 5%, even if it's
just 5% for a month. So that means a loss of, $50 billion in value. And it's
right around the time when you're being asked to write another 5 to $10 billion
check for Waymo.

[00:49:41] **Audrow Nash:** Yeah. You just saw a 50 billion slide. You're like,
even more than that, this kind of thing.

[00:49:46] **Stefan Seltz-Axmacher:** If you Audrow the CFO of of of alphabet,
take that moment to decide. You know, I'm going to cut Waymo. We're going to
publicly announce it. The stock's going to go down to 5% and go up another 10%.
The company alphabet will suddenly be worth $150 billion more. And I as Audrow

[00:50:09] **Audrow Nash:** I’m responsible. Yeah.

[00:50:09] **Stefan Seltz-Axmacher:** No no no no no nothing that screw your
responsibility who you are you. Yeah. As Audrow, we'll make an extra $1.5
billion. Yeah. Would would, Audrow would you keep Waymo alive for as cool as it
is and how impactful could be in how many lives it could save? Four and $1.5
billion. Could I pay you $1.5 billion a couple? Look, look.

[00:50:33] **Audrow Nash:** I see how the incentives go. Yeah, yeah. That's
crazy. Yeah, it makes sense.

[00:50:39] **Stefan Seltz-Axmacher:** I, I think it's an amazing product. I
think it's really cool technology. I really hope the situation I just described
never comes to a pass, but I have yet to play that.

[00:50:47] **Audrow Nash:** Game clear with anyone. This kind of thing.

[00:50:49] **Stefan Seltz-Axmacher:** Who would keep it personally alive. For
what if I offer them $1.5 billion to be the person who signed a piece of paper
to do less work to exit?

[00:50:59] **Audrow Nash:** Yeah, I know, to do less work. Yeah. That's wild.

[00:51:01] **Stefan Seltz-Axmacher:** Yeah.

[00:51:03] **Audrow Nash:** What a thing.

[00:51:04] **Stefan Seltz-Axmacher:** Yeah. So I really hope that I'm wrong. I
really hope it's alive. But I think the challenge with these like hype programs
and the challenge with these like big companies is they look incredibly stable
from the outside because very few people are in the rooms where like it's like,
hey guys, it's not it's not just that audio make 1.5 billion Ilia Also make 1.5
billion and Stefan and I'll make it easy 2.2 billion and I can be pretty good
with that situation. Yeah for sure. And and yeah like we've seen, we, you know,
aliens have been around, for long enough to see a bunch of really good robotics
companies with really cool tech died because of assholes in finance who can get
a good bonus check. And that's just a scary reality, which means, like, the
faster you can get to a self-sustaining robot, the more realistic it is to
actually have robots.

## [00:52:02] Humanoid Future

[00:52:02] **Audrow Nash:** Yeah, yeah, it has to make sense financially. And
it's it's very hard to jump that chasm from hype to practical. Yeah. For this
kind of thing. Do you, I'm interested in both of your perspectives. Do you think
any of the companies will make it out of the humanoid bubble? Like, will we see
any winners from it, or will we? Well, I mean, will Tesla quietly chug away at
it and solve it because they have the whole Tesla business? Or what do you
think? Maybe start with Ilia

[00:52:32] **Ilia Baranov:** Well, I mean, I think you got to you got to define
what you mean by winner, right? Like, is Atlas is Boston Dynamics a winner?
Because I eventually got traded around a bunch of times and ended up at Hyundai.

[00:52:43] **Audrow Nash:** Say they make that they jump from the they jump
across that chasm from hype to reality. Where they are providing value that is
justifying the cost of the businesses business.

[00:52:56] **Stefan Seltz-Axmacher:** Well, I think I think also what you're
really trying to say is they make more money. I will well, there be any company
who makes more money selling humanoids than they spend as an organization.
Exactly. Not like his Ilia retort was Boston Dynamics has made a bunch of money,
and a bunch of investors have made a bunch of money in Boston Dynamics without
actually shipping robots at scale. Which should be fair, is a great trip that I
a great trick that I'd love to be able to pull off. Yeah.

[00:53:22] **Ilia Baranov:** Yeah. No, I mean, you know, I, I don't know the
internal numbers for something like Unitree, but they're, they're one of the few
who are seemingly shipping and volume at reasonable prices. And I doubt their I
doubt they're wildly profitable, but I also doubt that they're losing money on
every Unitree robot they ship. It's like they're they're probably because, you
know, the trick they also do is like, I don't remember exactly, exactly. But
like the the humanoid robot, there's the 30,000 rises.

[00:53:53] **Audrow Nash:** Significant.

[00:53:53] **Ilia Baranov:** And if you actually do the one with it. Yeah. Like
like the model that actually has sensors and compute. It's like 120, right? Like
the 30,000 is a RC burns.

[00:54:04] **Audrow Nash:** Out when you look at it.

[00:54:07] **Ilia Baranov:** Right. So, so, so, you know, I think if I had to
guess, you know, on the $30,000 model, they're spending 28 and on the $120,000
model, they're spending 100 and like something 110 maybe. Right. So low.

[00:54:23] **Audrow Nash:** Margins maybe.

[00:54:24] **Ilia Baranov:** They're making money. Have they made back the money
they invested in it. Probably not yet. But again I, I just don't see the
industry as a company that's willing to just burn money for no reason. So
they're probably the closest I think all the other kind of startups are deep,
deep, deep in the red, including including Tesla Optimus. Right. Like those are
all into until your robot shows up on Robot Shop and you can swipe your credit
card and buy now, like I don't. I don't suspect that they're quite there yet.

[00:54:54] **Audrow Nash:** Make sense.

[00:54:55] **Stefan Seltz-Axmacher:** I have, I, so someone told me that they
knew of someone doing the strategy, but I have a strategy that I think would
work in the humanoids which I think of as, I call it the minimally viable
humanoid. And to be clear, you have to have you have to be big enough to build
two robots to support the strategy. So, your first robot is your cool humanoid,
and your your cool humanoid has legs. It has hands. It has, head. It looks like
a head. Maybe there's little bit of face LEDs. There's a bunch of sensors in it.
There's a bunch of compute on board. It can do really, really cool stuff.

[00:55:30] **Audrow Nash:** Yeah, it's the race car. Yeah.

[00:55:32] **Stefan Seltz-Axmacher:** For sure. Cost $3 million. But it's in
every press release. The, the robot along side of it, is the minimally viable
humanoid which is on wheels. Might even be tethered. Sure. There's probably a
sensor cluster, but that sensor cluster isn't necessarily around. It's honestly
in a head shape thing. It's kind of wherever the sensors should be. There might
be two arms there. I'd only be one. The arms might have fingers. They might have
something. It looks more like, you know, gripper.

[00:56:00] **Audrow Nash:** Like a pincher.

[00:56:01] **Stefan Seltz-Axmacher:** Yeah. And, and it's probably, you know,
building materials is probably in the 35th. The 20 to $40,000 range. And the the
whole point of it is it is easily deployable in smaller and non non massive
factories, to do things like machine tending or, or deep, deep palletizing or
getting things out of a box or into boxes and kind of rapidly be moved from one
task to another with maybe with maybe only two hours of setup. And I think I've
heard a company I wanted to say 1x might be doing this, but they.

[00:56:40] **Ilia Baranov:** Went the other way. They went the other way, they
built this wheeled one and now they're building the full humanoid look.

[00:56:48] **Stefan Seltz-Axmacher:** Yeah. And I think that is that is a
strategy where, like, people will show up to buy the cool looking one and then
when like, yeah, the cool looking one is great, $2 million and has 20 minutes
run time. The wheeled one, will fit your application and is economical compared
to a human. Yeah, by one of the cool ones. We love. You buy one, but by 50 of
the wheeled ones,

[00:57:12] **Ilia Baranov:** I just I also think, like on a meta level, the
whole idea of humanoids sort of is, is sort of like a fallacy that in my mind, I
feel I'm probably making a wrong prediction here. But like, you know, I looked
at 1X video and like promo and they're like, 1x Thank you. And like the humanoid
is moving a vacuum like a specific a Dyson, of course, a Dyson around somebody's
house. And they're like, we're going for for home robots. Do you know what.

[00:57:41] **Stefan Seltz-Axmacher:** Home people have?

[00:57:43] **Ilia Baranov:** It doesn't look anything like a humanoid. It costs
100th the price and it works just great. I have three of them in my house right.
Like. Right. And it's the whole, like, you know, we live in a world of horse
drawn carriages. And somebody is like, I'm going to make a more efficient horse
drawn carriage. It's going to be a mechanized horse instead of a car. Right.
Like, I think that's the fallacy people fall into. And there's this thing like,
oh yeah, but you know, the humanoid human world is built for humans. And like,
it's sorta like, yeah, I know House has stairs, but it also has perfectly flat
floor.

[00:58:15] **Stefan Seltz-Axmacher:** I actually rarely intersects with the part
of the world that, that was built for humans and like so to be clear, what do
you mean? Yeah. Humans were not humans did not come about, in houses with level
floors and heating and protection from the elements and whatever humans came
about in forests. Well, regardless of how you think we came about there. So it's
I, you know, pick a particular side, but regardless of it, you need legs for
walking in mud and sand and dirt and arms for picking up, you know, picking.
You're saying.

[00:58:52] **Audrow Nash:** It doesn't have to fit the.

[00:58:53] **Stefan Seltz-Axmacher:** Circular spear? Yeah. You need. Yeah.

[00:58:56] **Audrow Nash:** I live the constraints that made us aren't what made
the or that a robot needs.

[00:59:01] **Stefan Seltz-Axmacher:** I think there's a room who rarely leaves.

[00:59:03] **Ilia Baranov:** There's a reason wheels never in.

[00:59:05] **Stefan Seltz-Axmacher:** My life is between a series of flat
surfaces. Like my my my house is a series of flat surfaces. The stairs are some
more flat surfaces. It's flat surface.

[00:59:15] **Audrow Nash:** I feel like that is how most robotics way to. Yeah,
but it looks like.

[00:59:19] **Stefan Seltz-Axmacher:** Which I am. I it outside of my ten minute
walk between my house and our office. I am never more than 30ft from an outlet.
Ever. That's just not a thing in my life. Yeah, I never outside of cell phone
range. I'm not a big hiker, but also I don't need to buy a $10,000, device to
hike with. That's. Theoretically, if I'm hiking, I should not be like bringing a
computer on legs.

[00:59:46] **Ilia Baranov:** And I think I think I think again, like, the meta
point is like, I think there'll be more robots in homes over time. And there are
already. Right. And the robot vacuum clear makers are making units with arm to.

[00:59:59] **Audrow Nash:** Like, move simple.

[01:00:00] **Ilia Baranov:** Things. The ability to climb stairs right, right.
And like and I think the home robots again the astro being an example but like a
bunch of them I don't think need to be human shaped to accomplish their task.
And so I think humanoids are very cool looking, but I think it's I think it's a
fallacy, honestly. I think it's a fallacy until technology progresses a few more
orders of magnitude and then.

[01:00:24] **Stefan Seltz-Axmacher:** Maybe, you know, like, like triple
clicking on this a little bit. And this is kind of a new thought. So this might
sound really stupid. A humanoid to a general purpose is a cool general idea, and
it makes a lot of sense if you can only have one thing right. If you can only
have one computer, it makes sense for that computer to be in your living room.
It makes sense to have multiple user accounts so everyone in the family can log
into it. It makes sense for it to have a bunch of central things. There's a
bunch of things like that that go along with that. And humanoids are more
significantly more expensive than the family computer was back in the 90s.
What's happened since then? And I'm just looking around myself because I am an
embarrassing person. With what we're about to talk about, we have infinite
computers. We can have infinite, like, looking around me, I have two smart
speakers here. I have, an Apple Watch on another Apple Watch right there, a
phone, a laptop here, another laptop over there, an Apple TV, which is
functionally another computer right over there, a smart TV that can also stream
things. And I'm just looking at like the thing, I have a Kindle. You have been
sitting on my desk. This is one of like four Kindles I own. I have an iPad. I
have all the I have all these things. Yeah. I cannot imagine a world where a
single $10,000 desktop computer, would be better than the series of devices I
just listed off as being within eight feet of me. And similarly to Eliza's point
about about, you know, roombas, for the, for for intelligent mechatronic devices
that I might want in my household, it is hard for me to imagine a series of
applications I'd want done by a robot that would add up to something I'd spend 5
to $10,000 on, but I can't imagine buying 15 $200 robots one by one over the
course of six years. Anything one $5,000 robot that does all of my, like, eat
applications that I care about a robot doing, that's probably never going to
happen. That's like probably a nonstarter with my wife. Like, maybe, maybe if
something really cool happens, a massive amount of money comes my way. Like,
maybe I can blow ten grand.

[01:02:44] **Audrow Nash:** Yeah, but it's just that. Yeah, yeah, it's blowing
that money on it. Yeah. The thing, because of the novelty.

[01:02:51] **Ilia Baranov:** Yeah. And, and I think, I think again, like humans.
And we fall into this too, by the way. We fall into this fight like, all the
time. Stefan and I had a discussion. Right. Probably a year ago now on, on our
podcast where basically we're like, oh, you know, I want, I want the classic,
like, go get me a beer from the fridge robot. And it was like, okay, so you need
like an a robot with an arm that goes and opens the fridge and like finds
manipulates, gets the beer, brings it back, whatever. And I was like, Stefan or
like, and this wasn't in the house, by the way. This is this is for work. So it
makes a little bit more sense, right?

[01:03:25] **Stefan Seltz-Axmacher:** Just because we drink in an office
facility.

[01:03:28] **Audrow Nash:** Oh well, very very good. to clear up

[01:03:30] **Stefan Seltz-Axmacher:** Yeah.

[01:03:31] **Ilia Baranov:** But but like you know, and, and and he was like,
overcomplicated this whole thing, I was like, Stefan, you could just have a
vending machine. Like a vending.

[01:03:41] **Stefan Seltz-Axmacher:** Machine.

[01:03:41] **Ilia Baranov:** Has all the management and stuff one at a time.
Yeah, yeah. No no no no no no. My point is, like, I, my point is like a Roomba a
Roomba or an Astro or whatever. Like a robot. I can summon somewhere and a
vending machine. Will do everything you want. Like you drive the robot under the
ramp. You internet call the vending machine because they're almost all internet
connected now anyway. It dispenses the beer you want, it falls into the thing,
and it delivers your slightly shaken beer to your room for a fraction of the
cost of any arm, or any manipulator, or any sensing or any humanoid you could
possibly buy. Right? Like even cheaper than a Unitree robot.

[01:04:23] **Stefan Seltz-Axmacher:** Easily. Our other our other version of
this, is because people always like the idea of robots for, the dishwasher, for
taking the dishwasher. And I have exciting news for you. Although there's a
robot you can buy. That's awesome. And for any of the listeners, for $400,
purchasable at nearly any, any big box store, buy a second dishwasher.

[01:04:47] **Audrow Nash:** Yeah, totally.

[01:04:48] **Stefan Seltz-Axmacher:** Yeah. Suddenly, if you put all your dirty
plates in one, take all your stuff, you just flop back and forth, just flopping
back and forth and look at that. You know, you I just saved you. You 95% of your
dish. Put it away, with technology and then you don't.

[01:05:04] **Audrow Nash:** Need space for storing them. Even better. Yeah. More
efficient.

[01:05:07] **Stefan Seltz-Axmacher:** You already have space for storing your
plates. So you just take one of your cabinets. Attorney general dishwasher.

[01:05:12] **Audrow Nash:** Yeah.

[01:05:14] **Ilia Baranov:** That's a little. That's a little.

[01:05:15] **Stefan Seltz-Axmacher:** Yeah. What's funny, though, is that.

[01:05:17] **Ilia Baranov:** I think the main.

[01:05:17] **Stefan Seltz-Axmacher:** Thing and having a big piece of metal go
around my house. Yeah, for 10,000.

[01:05:21] **Ilia Baranov:** Exactly.

[01:05:22] **Stefan Seltz-Axmacher:** And scare them of Jesus out of my dog.

[01:05:24] **Ilia Baranov:** This one X group. Like I think again, looking at
their press release recently, they're like, we're really targeting like we
decided to target the home market as, like, why there's no I can't think of a
reason other than you tried to go after the industrial market. Realize that it
doesn't make sense and now have to pivot to get more fun. You could be in more
hype because like in every other respect, the industrial market is so much more
valuable and so much more forgiving of failures, like an industry that's testing
a new technology will be okay if you drop a part somebody is testing in their
home and you drop a plate. We'll put a negative review on Amazon instantly. Like
it with no hesitation.

[01:06:07] **Audrow Nash:** Drop my plate. Right.

[01:06:08] **Ilia Baranov:** Like there's no reason to go after that market
unless you just can't. Yeah, unless you just can't.

[01:06:13] **Audrow Nash:** Yeah. Okay. I wonder the thing that was interesting
to me. I haven't been in touch with them in a while since I interned. Really. I
mean, I saw them a few other times since, but, when I started with one acts as
an intern. We were going after eldercare for this kind of thing. And that
application, it was like remote. Someone would beam into it and, have it
microwave food or something like this. Which the prices of assisted living are
very high. Yeah. So that that made some sense to me. I like the mission there,
but then it was surprising to see them pivoting a few times. And maybe it is a
funding thing. I don't know, but it is funny how much you can simplify things
with better design than just throwing a very expensive robot at it. A parallel
that I have for my experience is, for the first year of this podcast, I was
trying very heavily to use AI tools for helping me find clips, helping me, do
editing, like the script will, it'll pick the person to be in the shot and
things like this. And so I was trying so hard to get AI tools to work for this,
and then I got so frustrated with it that I just hired someone. And they're not
that expensive. They're absolutely wonderful. And it's a huge like the quality
is far, far higher. And it doesn't have like weird artifact drastically better
for this kind of thing. And similarly, yeah, of course hiring like so you could
buy a say say it goes down to $5,000, $5,000 robots. Or you could just hire a
housecleaner for this kind of thing, and they'll be excellent and custom work
and things like that.

[01:07:57] **Stefan Seltz-Axmacher:** There are services that are like Uber for
people to show up at your parents house to microwave food for them. Yeah. And
those services are not that expensive. I yeah, like the services like approach
like $10 a visit. Wow.

[01:08:13] **Audrow Nash:** That's crazy.

[01:08:14] **Stefan Seltz-Axmacher:** Which and like maybe I'm rounding down too
aggressively, but not $100. Yeah. The math for that being a better outcome than
by a humanoid is, like, pretty, not incredibly hard. For for that to work out, I
think, like, there's a, a hard thing in robotics that that happens frequently is
roboticists are a specialized skill set who generally don't want to go work on a
SaaS app or or not or not for cats or whatever. So it's kind of like I have
robotics, where can I put robots? With a little bit less thought to like, what
is the best solution for for the problem at hand? And I think, like, I don't
think any of us here are bearish. Is there value in robotics? I don't think any
of us here think like AI tools are net negative, but like the all of us have,
all three of us have gotten to play and use AI and machine learning and deep
learning for like I mean, I think at least a decade plus each, it's really cool.
But like, the word AI feels like a stretch. Yeah. And and that almost makes us
seem like the most negative people in the world about these incredibly cool
technologies. I think like, my view of, of broader AI is, is AI is going to be
as big of a deal so that over the next decade as, like microservices were in the
20 tens. And like, there's a bunch of people for whom that's like, I don't know
what microservice architecture is. I don't know what that is. Okay, cool. And
those are the people who are probably not making good AI investments right now.

[01:09:57] **Audrow Nash:** Yeah, I think so.

[01:09:58] **Stefan Seltz-Axmacher:** Whereas instead, like, yeah, AI is going
to make every company 10 to 20% efficient, not 98% more efficient. But like 10
to 20 and 10 to 20 is pretty meaningful. Substantial. Yes. Like massive a huge
deal. But no, no, no one has a job anymore. We don't roll video editors anymore.
And humanoids will do all physical labor for us in every situation. Yeah, which
is a bummer because it'd be cool.

[01:10:24] **Ilia Baranov:** Yeah. It's, you know.

[01:10:26] **Audrow Nash:** Go ahead, Ilia.

[01:10:27] **Ilia Baranov:** I, I want to wrench us in another direction. Just
just one funny comment, right? Yeah. Go ahead. One challenge for your your
listeners and viewers is, next time you do see a humanoid ad, check if they show
how this thing charges and how long its battery life is. Because I think, and I
could easily be wrong because I haven't seen every single one, but I think I
haven't seen one yet. That shows itself plugging itself in to recharge. And that
is a trick that

[01:10:55] **Audrow Nash:** 1x does. I've seen a video of one Zeus, robots
charging themselves.

[01:10:59] **Ilia Baranov:** Oh, awesome. Awesome, because that is a trick PR2
did a decade way back.

[01:11:03] **Audrow Nash:** Yeah.

[01:11:04] **Ilia Baranov:** Right. Right. And so like for the full like,
usability cycle, how do you make sure that the thing can actually charge itself
a little? Because again, even your Roomba fails to dock, you know, every time.
Yeah. Right. So anyway, I'll stop harping on that. But like, if you're, if
you're getting the itch to buy a humanoid, check that fact. How long is the
battery life and does it charge itself?

[01:11:25] **Audrow Nash:** I think the battery life thing is a very interesting
thing, because they can plug themselves in to some level. One x it was the
wheeled base, one that I've seen. I haven't seen their, bipedal one. But it's an
interesting thing because the battery life might be super short. I don't know,
the.

[01:11:40] **Stefan Seltz-Axmacher:** Biggest thing that I've yet to ever hear
anyone be able to justify to me, even in passing, is my legs. I have. I have yet
to hear an argument for a while.

[01:11:51] **Ilia Baranov:** Like best one I've heard is stairs. Like for home
use stairs. Yeah, like that's lots.

[01:11:56] **Stefan Seltz-Axmacher:** Of stairs in the middle of my airplane
factory.

[01:11:59] **Ilia Baranov:** Or for industrial, I think industrial. Really?
Yeah, I get that for people are excited about home. Yeah.

[01:12:06] **Stefan Seltz-Axmacher:** Well, yeah. Well, which is why computers
first came to the home. Like the first place that anyone had a computer was in
their living room,

[01:12:17] **Ilia Baranov:** To store it. Store recipes. Right.

[01:12:18] **Audrow Nash:** Was out there. Yeah. Yeah, that was like.

[01:12:20] **Ilia Baranov:** Store recipes.

[01:12:21] **Stefan Seltz-Axmacher:** You know, besides computer, you know, you
don't need a living room if you have a computer to, to print out cards with what
your recipe is.

## [01:12:31] LLM & Coding

[01:12:31] **Audrow Nash:** And but so, just to be clear, just so we're not
losing anyone, computers first went into businesses, right? For, like, Excel,
though. Yeah, and this kind of thing. Yeah. And then the applications came later
as the costs drove down. So I suspect that that's probably the good metaphor.
Not starting with the home as you're suggesting. Yeah. What are you. So,
segueing a bit what are you thinking about? All the LLM stuff and vibe coding
and things like this. Let's see. Stefan, you've been playing with it. Yeah. What
were your impressions? I like, I've done it a bit, and it's very good, but you
can hang yourself on the complexity very quick. Yeah. I'm. You don't structure
things well, so.

[01:13:10] **Stefan Seltz-Axmacher:** I'd say I'm probably three hours into
playing around with it. So this is this is a relatively, relatively light, the
thing that I'm trying to do right now is, have it vibe coded application that
lives behind an email address. Like a back end application.

[01:13:25] **Audrow Nash:** Emails are hard. Okay.

[01:13:27] **Ilia Baranov:** Let's. But by the way, what's your definition,
Stefan? Of a vibe coding. So we're all on the same page.

[01:13:32] **Stefan Seltz-Axmacher:** I I've, I've been able to do hello World
and a little bit beyond that in Python and C plus plus before. So I'm trying to
describe a function that needs to happen. And and it be coded for me. And the
function I'm trying to is the function I'm trying to get to is take a zoom
summary of a sales call, which is, let's say, 2000 words long. Forward it to an
email address, that then, runs it against ChatGPT to turn it into five bullets
so that after our call.

[01:14:07] **Audrow Nash:** That's fairly straightforward. Yeah.

[01:14:10] **Stefan Seltz-Axmacher:** I've been using, windsurfer kite surfer
windsurf. It will not compile. Well, will not turn on, and has struggled to be
able to adjust prompts. Is the status of my my code base.

[01:14:29] **Audrow Nash:** Cursor is actually pretty sophisticated. For things
I would suspect you'd be able to be successful with that application and cursor.
You use a good model like I find claude 3.7 now. Yeah. To be the best model for
these things, but, I would think you'd be able to achieve that. Yeah. For sure.

[01:14:52] **Stefan Seltz-Axmacher:** And, like, to be clear, I've. My three
hours is a series of 30 minute increments with, hey, go, go write a complex
email to this person about a complex subject. So I've hardly been flow state
developing, let alone flow state vibe developing.

[01:15:07] **Audrow Nash:** That makes sense. Yeah. Ilia, what do you think?
Have you played around with it at all?

[01:15:11] **Ilia Baranov:** Yeah, I mean for sure. I mean that also, you know,
to Stefan's point that you still probably in the top quartile of people who've
touched software before and have some concept of compiling. Yeah, you know, that
sort of thing, which is like a still a very small piece of the population. And
to step outside of a bubble and remember that, like the vast majority of
humanity has no idea how the magic in the box works to, to run software.

[01:15:36] **Audrow Nash:** People that are not robotics people or like software
people have not even tried ChatGPT yet that I've talked to, which is that, like,
you just talk to general people. They're like, I've heard about it, but I
haven't tried it, haven't tried it, which is just unbelievable because it's been
a year and a half or whatever. Yeah.

[01:15:52] **Ilia Baranov:** So you're already talking to like a person who
through experience is in a very small slice of the population. Right.

[01:15:58] **Audrow Nash:** Definitely. And using to especially.

[01:16:01] **Ilia Baranov:** Yeah. Well yeah, I mean I mean, you know, I, I code
semi-regularly usually to the chagrin of my engineering team, whatever I have to
do anything and and generally I use it, for two reasons. One is if I'm trying to
put together any kind of complex documentation or email or something where I'm
trying to get a very large thought across the first thing I do like, I've almost
replaced mind mapping with prompting, where I'll be like, I want to write.

[01:16:28] **Audrow Nash:** Almost.

[01:16:29] **Ilia Baranov:** Yeah, almost. Yeah, like I want to write. Unless is
very esoteric, right? But like, I want to write, you know, object oriented
programing for robots, like, that's, that's the title of my talk making One up.
Right. What should I consider? And it'll list out a bunch and then I'll pick
like 5 or 6. Right. Yeah. Okay. That sounds interesting. I might go with that.
Let's talk a bit more about that. Build a a skeleton basically, or a mind map.
And then from that, that I'm, that I'm writing in myself, I'm doing whatever.

[01:16:54] **Audrow Nash:** Right. Then you're back to your mind map. Yeah.

[01:16:56] **Ilia Baranov:** Right. Right. And like and like that mind map
phase. I could be sitting, drinking coffee and just trying to think of ideas
from thin air for like 30 minutes. Instead, it takes me three. Right? And like,
skips that phase and then it's sort of narrows my focus. And it will usually
miss stuff that I do when I talk about. So I'm kind of hybridizing it with my
own thoughts. But it takes me that 30 minutes. That's, that's like half the
usage of ChatGPT for me. The other half, or that kind of like the other half. I
was recently doing kind of like, camera distortion and projection to get a top
down view from a camera. And that was like, oh, what libraries exist and how do
they behave and what's the easiest? Oh yeah. That's great. Gave me some ideas.
Right. And it's like, oh, here's an OpenCV function. It takes these as
arguments. I'll go back, I'll try it out, I'll code it, I'll hit an error, I'll
be like, okay, what the heck is this error? And that again, it saves this
iteration time a little bit. So it takes the initial development that usually
takes, you know, 45 minutes to 2 hours down to ten minutes to half an hour.

[01:18:00] **Audrow Nash:** Totally.

[01:18:01] **Ilia Baranov:** That's that's pretty valuable. I find it becomes
less and less valuable taking from that to a final code of a complex piece of
software, I think it breaks more and more and more and more to the point where
it's useless. But the really early stuff, it speeds up quite a bit.

[01:18:14] **Audrow Nash:** Yep. Yeah. I think like de-risking things
technically very quickly because you can get a prototype real fast is fantastic.
You could see which libraries work. You can run into things that weren't
documented. Well, this super valuable, in my experience. But yeah, it's an
interesting world we're heading into. Yeah. With all of this.

[01:18:35] **Stefan Seltz-Axmacher:** I mean, I think, like, we, we've we fooled
around with some stuff. So our architecture, basically has a common autonomy
core nestled in between two hardware abstraction layers that separates us and
are given sensors for a vehicle, us and the, the actual drive by wire of a
vehicle. And so the most the most effort, the most, dev work for bringing up a
new robot for us. Where do you type of robot is building that hardware
abstraction layer? Especially with me. That's the drive by wire. So we've looked
at, hey, how can we use, AI to get there? And we've seen some like early cool
stuff. But my, my hunch is, I think, I think in general, much of the work that
we have to do is good software, best practices more than it is like build AI to
recognize a novel situation and categorize it into some, archetypical situation
that we have a known behavior for because, like the types of vehicles that we're
focusing on shouldn't be making judgment calls like that. Even another human
driven.

[01:19:43] **Audrow Nash:** Is very procedural.

[01:19:44] **Stefan Seltz-Axmacher:** Yeah. Like like I've seen procedure docs
for sites where, you know, they're driving a large wheel loader that is, say,
you know, 50 to 100,000 pounds. And the rules for operating that wheel loader
are, you know, if you're in reverse and you see someone standing within 100m
behind you, turn the engine call, get on the radio, call for help. If you're
driving from here to there and you notice that this gate is open, turn off the
engine. Get on the radio. Call for help. If if this beeper goes off, turn off
the engine. Get on the radio. Call for help. These large, kind of terrifying
machines should not be judging pedestrian intents. It's kind of deterministic.
If pedestrian, then stop moving.

[01:20:32] **Audrow Nash:** So that makes sense. Yeah, yeah. What a funny thing
that it I mean yeah. Makes sense. They follow the simple and it probably
increases how fast they can train people rather than handling all the
appropriate conditions. And they need one well-trained person instead of every
truck operator.

[01:20:49] **Stefan Seltz-Axmacher:** And I mean, I think those kind of things
like that, a lot of these sites, things can go wrong with like very once very
simple rules are broken. So it's a rehashing constantly of simple,
straightforward rules. And in part they're simple because it's an easier for
other people to notice if someone's not following the rules.

## [01:21:10] Work-Kids Balance

[01:21:10] **Audrow Nash:** Oh, interesting. Well let's see. So one thing that I
wanted to make sure we talk about today, so I'm having, a baby girl in bed about
six weeks from when we're recording. You guys both have kids? Yep. I don't often
hear this discussed with founders and this kind of thing. I'd love to hear your
perspectives on how it is to have a family. But also, you guys are doing your
startup. Startup life is notorious for being chaotic and busy all the time and
everything. I'd love to hear what you think about it and how your experience has
been. Yeah. You want to start, Stefan?

[01:21:51] **Stefan Seltz-Axmacher:** Yeah. I've done a startup with no kids I
was at a startup with. I get. So if it's, It's good. It's got a good middle
ground.

[01:21:58] **Audrow Nash:** Well informed.

[01:21:59] **Stefan Seltz-Axmacher:** Yeah. It is significantly harder. It is.
That is not a joke. I mean, I think, there's an old, Sam Altman quote from back
when he was just, a measly VC partner and, you know, the CEO of an AI. That was,
you know, when you're a startup founder, you get to have, like, one hobby. Like
that hobby might be that you have friends, it might be that you like kite
surfing. It might be. It might be that you go backpacking, but you get like one.
And when I didn't have kids, my hobby was I had friends. And now my hobby
largely is I have a kid. Yeah. And that is, that is where my my free, not work
nonproductive time goes. Which is. Yeah, that is a trade off. That is a thing.
But, you know, that's, that's kind of that's kind of part of the deal helps
that, you know, in my 30s and I'm a I did a bunch of fun social things in my
20s. I'm okay with like the. Yeah. Now the change. Yeah. Yeah. The there's, a
lot of parallels, I think, my, so I, I don't know if you guys have signed up for
this. You and your you and your partner. There's a great, Montessori toy
subscription called, love every.

[01:23:14] **Audrow Nash:** Okay.

[01:23:15] **Stefan Seltz-Axmacher:** Which I highly, highly recommend. My kids,
my kids, you've.

[01:23:20] **Ilia Baranov:** Got, like, you've got, like, five months until this
starts becoming relevant. To be clear, the first three months, they're not going
to be.

[01:23:26] **Stefan Seltz-Axmacher:** Oh, no, no, but Fritz Fritz loves his,
like, first three month toys. He like, he like. Wow. Yeah. Like, I mean, there
were a lot of them were like, black and white cards with patterns on them, that
you like to look at. Like, we'd probably plop them in front of them anyway.
Yeah. Like, what is that? Yeah.

[01:23:43] **Audrow Nash:** Oh, contrast. Very interesting. Yeah.

[01:23:45] **Stefan Seltz-Axmacher:** But, with that toy cat in the first box,
there was a coffee cup that had the phrase, the the days are long, but the years
are short. And that is exactly, a parallel experience having a startup, because
actually, it's the thing that Ilia was joking about earlier on the podcast of a,
a beer getting humanoid. Actually just being a vending machine with, autonomous
cart. That was not a year ago. Earlier that was like two and a half years ago.
We had that. Oh, there you go. The, startup time is like a black hole. Where I
started my first startup when I was, like, 26 or so. And now I'm 35, ish, I
think. I don't know, and I'm not really sure. And just like, in my mental model
of myself, I'm still, like, maybe 26.5. And.

[01:24:38] **Audrow Nash:** Only six months is advanced in some sense. Yeah.

[01:24:41] **Stefan Seltz-Axmacher:** And.

[01:24:41] **Audrow Nash:** I think years has gone by otherwise.

[01:24:43] **Stefan Seltz-Axmacher:** Like the fact that having a kid is similar
is is useful in that, like, I can, I can grok the joint mental model of it all
where there's so much happening all the time, but also not a lot. It's,

[01:24:55] **Audrow Nash:** Yeah, it's like a paradox. Yeah. For everything.

[01:24:57] **Stefan Seltz-Axmacher:** Like, we've like polymath has achieved
much less than I would have wanted to achieve in the years that we have. But
like, it's impossible to achieve what I want to achieve in any, anytime. But
we've also done incredible, amazing amounts of things. We've been, we've, we've
gotten to work on some really cool programs. We've been on lots of different
robots. We've seen really neat things. And I think the same thing is true with
like kids where like, if Fritz, my son is now, we just moved from saying, months
to he's a year and a half.

[01:25:29] **Audrow Nash:** And wow, he's a big transition.

[01:25:32] **Stefan Seltz-Axmacher:** Yeah, yeah, he can do lots of things, but,
like, he still can't talk in sentences, so I don't know. It must be dumb. But
yeah, it's it's cool. I know it. At least being a dad for way longer than I
have.

[01:25:46] **Ilia Baranov:** Yeah, I have, I have a four year old daughter and,
one in the three quarter year old son. More than three.

[01:25:53] **Audrow Nash:** Quarter. That's great.

[01:25:54] **Stefan Seltz-Axmacher:** Yeah.

[01:25:56] **Ilia Baranov:** I keep saying one and a half, and then I have to
keep mentally pumping a lot of things. Yeah, far beyond that. Yeah. But the
thing, the thing I want to highlight a lot because my experience is a little bit
different than stuff. And my daughter was already born when, you know, Stephan
and I met and started discussing, co-founding and doing this. And the thing I
really want to highlight is the enormous role that your significant other spouse
or whoever plays in this. Right? Like, I, I at the time was working at Amazon,
relatively well-paid, you know, decent relative stability, decent program, was
still working on robots. I was still doing something I like. And I brought up
this crazy idea of like, let's drop all of that.

[01:26:36] **Stefan Seltz-Axmacher:** Move.

[01:26:37] **Ilia Baranov:** To a startup. But, hopefully it works. And, what do
you think? And, and, you know, all credit to my wife. She, incredibly, was on
board with this, she really wanted to understand the scope of the idea and need
my co-founder, you know, try to understand if we're building something
reasonable. And what is it? You know, is it sane? And, and. Yeah. So I think
that's a huge chunk, right? Like that, that makes all of this possible. And her
infinite patience to have me suddenly have a trip planned and needing to have
her take care of two children and by herself. And then a day before that, the
trip is no longer planned. But now there's a new trip, but some other point. And
now I have to go to this event and have to go to that event. And that that
introduces a lot of chaos. And so that that is, you know, the only thing that
keeps the sane, I would say the only way that this would be harder would be to
be a single parent and also run a startup. And I can't even imagine that.

[01:27:37] **Stefan Seltz-Axmacher:** I, I feel totally I don't know how anyone
is a single parent. That seems to me like not even that's inside of a startup. I
mean, like like and just like, take a shower, like, yeah, yeah, yeah, yeah.

[01:27:49] **Audrow Nash:** Yeah. Well, we super, super.

[01:27:51] **Ilia Baranov:** Human levels of ability.

[01:27:52] **Audrow Nash:** We have a puppy now and the puppies too. You might
have heard Embarek a little earlier, but he, is so much work and I could not
even imagine. I imagine, like, single parenting a puppy. Like there's no way in
hell I could do it. And I can only imagine a kid will be more for. Yeah, one or
more kids. Oh my goodness.

[01:28:12] **Stefan Seltz-Axmacher:** But it's also really cool. It's it's
great. It's really cool. It's really amazing. It's, you know, ten out of ten
would do it again. Highly recommend.

[01:28:22] **Audrow Nash:** Two thumbs up. Yeah.

[01:28:23] **Stefan Seltz-Axmacher:** I don't know, five stars. Like, there's
annoying stuff. Like he wakes up screaming bloody murder in the middle of the
night, and, there's disagreements on parenting strategies in the middle of the
night because kids screaming in the middle of the night. Yeah, and everyone's at
their worst. And then there's, like, you know, when, when he went out for the
day with, with his, nanny, you know, he kept on hugging me and my wife on his
way out the door, and it's just like, oh, my God. Or like last night, I'm given
a bath. And, like, I figure this, like, kind of rubbery bottle. If I held it
underwater, I could squeeze it and, like, a burst of water. And he, like,
laughed incredibly loud. It's like it's it's the coolest thing ever. It's pretty
amazing. And yeah, I mean, I think it's just a work and and kids, it's a all the
time always like if, if, if instead we had done, you know how to not for cats.
Probably we could just be hanging out right now either either rich or
unemployed. Yeah. But it's just it's a high level of intensity. And I mean, I
think, you know, honestly, before, before alien, I teamed up when I was thinking
about, like, service and what I wanted to do, I desperately did not want to
start another robotics company. I, like, desperately like I wanted to do some
easy mode SaaS company. And the thing that I realized really quickly is that
none of those things were exciting enough for me to want to work on on a
Saturday morning, instead of literally anything I could do on Saturday. On a
Saturday morning, even even during like peak Covid, it was like, I'd rather
watch like Netflix reruns than work on like a trucking software company. And
like, robotics has this incredible intensity that makes it incredibly compelling
and rewarding. And I think life with a kid is a similar sort of uplift where,
yes, it is really hard that they scream in the night. Yes, it is really hectic.
Yes, it is like a puppy on steroids, however, but it's this like extra cool
thing in day to day life, so I don't know, I'll just be tired until he's
probably like 8 or 10 or something. And yeah, and until polymath is in the
billions of dollars a year revenue and I can mostly be the the founder who shows
up and waves his hand, hit his hands, in a black turtleneck every six months.
But like, yeah, that's I feel like it's better living than than the other way
around.

[01:30:49] **Audrow Nash:** I suspect that's true. Yeah. What do you think?

[01:30:52] **Ilia Baranov:** Well, I was just going to give a hint to the, to
yourself and to whoever might be listening on, on on the waking up screaming and
disagreements on parenting styles. The the golden rule I read was that you you
have to make up your mind on how you're going to handle that crying during the
day. And the rule is, you cannot change your mind at night like there's no
discussion. You cannot change it. Whatever you do in it. That is the plan.
Period. Like that doesn't even enter your thoughts, and you have to be ready to
reevaluate that during the day when you have a little bit more sleep every few
weeks, because it will change pretty rapidly. But like the plan is the plan, you
don't discuss it like that. That saved a lot of chaos.

[01:31:38] **Audrow Nash:** That is great.

[01:31:39] **Stefan Seltz-Axmacher:** So have you and, you and your, partner, my
wife, Michelle. Your wife? Yeah. Have have you and Michelle had your parents try
to chime in, not raising your.

[01:31:48] **Audrow Nash:** But they haven't. So, I mean, we're already getting
parents talking, like, giving us advice all the time for things for the baby
now, puppy. They didn't really care. Our dogs pretty well trained. Okay, so,
like, I don't know, we generally impress with them.

[01:32:02] **Stefan Seltz-Axmacher:** We I, we had a really useful experience,
when we just had a puppy, pre pre having a kid. Yeah. Where, we went to my
mother in law's house, and my dog is great and lovely and charming, but, you
know, neurotic and crazy and scared of some of the other. And, Cassie, my wife
and I would be arguing about some course of action for the dog in front of my
mother in law, who then would, like, take my side. And then then, like, Cassie
felt teamed up on. And then, like, I tried to switch to her side, and there's
this musical chairs. Who's our brother in law? And it was just incredibly
stressful. And no one likes it. And yeah, another another piece of advice I'd
give you, similar to Eliza's on, Night Cry is, in front of anyone else. You guys
agree? Don't argue or just you're on the set. If you're arguing about what to do
about Nate crying in front of someone else and they chime in supporting one of
you, you know, support whoever is being, who.

[01:33:04] **Audrow Nash:** Yeah. Or ganged up on. Yeah.

[01:33:06] **Ilia Baranov:** Better just not to discuss it.

[01:33:08] **Audrow Nash:** Yeah I think yeah. Don't discuss it in front of
anyone else or this kind of thing. Not not a, like an impromptu passion
argument.

[01:33:15] **Ilia Baranov:** Yeah. Impassioned argument. There's many wrong
answers, but there's no right answer.

[01:33:19] **Stefan Seltz-Axmacher:** Realistically.

[01:33:21] **Audrow Nash:** So that's hilarious. Yeah. One thing that you may
laugh at with this is we moved to San Antonio, Texas. And, when we ask people or
when people ask, about like how we chose it, we say it was the least bad.

[01:33:36] **Stefan Seltz-Axmacher:** Move, all that.

[01:33:39] **Audrow Nash:** In a similar vein.

[01:33:40] **Stefan Seltz-Axmacher:** Yeah. Yes. Yeah.

[01:33:43] **Audrow Nash:** Any any other advice of kids, that you can think of
or any other other things to share? Maybe we'll go around one more. Stefan.
Anything for you?

[01:33:55] **Stefan Seltz-Axmacher:** I think on the kids side, I said all my
stuff earlier. Probably got more. Yeah. I mean, you'd think so. If you're
working on robots, we'd love to. We'd love to talk to you in general. Where. So
this, this, this approach that we're talking about, about mostly focusing on
these big, chunky, industrial things that approval that are, you know, obviously
vulnerable, have put us in an interesting position where we're starting to have
cash flow, positive bumps who, and that that's so exciting. Yeah. Like, there's
a big fundamental difference from the groups that I know, who are saying, like,
hey, we need raise $100 million to get a bunch of synthetic data to then maybe
get $500 million and then maybe get 3 million. And I think, I think we're in a
time where there's a lot of noise going on elsewhere about those sorts of
approaches, and 99% of those companies won't exist in three years. But like the
folks who can, can actually build a robot that actually creates real value are,
you know, half of us will be around, you know, like, you still screw up a pretty
generous product. But like.

[01:35:07] **Ilia Baranov:** Me and us will be around.

[01:35:09] **Stefan Seltz-Axmacher:** That most of the companies will die, not
100%, but most.

[01:35:13] **Audrow Nash:** Maybe not in three years. Yeah, or they'll be
acquired or something.

[01:35:16] **Stefan Seltz-Axmacher:** Yeah, but like, many of them are too big
to be acquired. You know, there's not a lot of natural acquirers for $10 billion
products. Humanoid robotics company fair point. Like there was when that company
was worth $200 million and it was 2016 and interest rates were low and like,
cool, like Google or whoever, cash was expensive now, for sure. Like they did.
Fine. But now at like the current valuations, that's just not feasible. So I
think this there's, there's this incredible like, slope of enlightenment that
we're currently on for robotics around building things that are actually
buildable and actually sellable for, but, but can be built today and I encourage
more people to look at getting on that slope instead of the the next hype cycle.

## [01:36:04] Key Takeaways

[01:36:04] **Audrow Nash:** Oh yeah. Let's see. Yeah. I guess, wrapping up,
because I see that we are coming close to our end time, so, Stefan, that sounds
like what you want people to take away from this, which makes good sense. Yeah.
What would you hope sticks out in people's heads? From this whole interview?

[01:36:23] **Ilia Baranov:** Yeah. You know, definitely, definitely. Stefan
making the points on the on the business and robotics side, I'd say I gave kind
of a talk, last year at Robot Business on running a startup and and running a
robotics started, and I think it's on our YouTube channel if people are
interested. And, that what I ended up, that one was kind of two critical things.
One or let's add one more, but two to start. One is even if you're building
robots, you have to be humans. And I think that, you know, like having a family,
both myself and Stephan and many of our team members are younger and starting
families. There's no blood from a stone that works well with complex technical
things like kind of crunch time that comes from gaming industry or heavy
software dev does not work well and is, in my mind pretty clearly the less
capital efficient way to do things over time, like even for shareholder value,
like it's almost always a negative and so be humans. While building robots is
number one. And then the other thing is the lesson we keep having to learn over
and over, and as core to robots is you have to do less work, love, do less, but
do a better love. Focused approach like do that as much as you can. And I think
both of those things, are applicable almost equally to child rearing as they are
building robots. Very, very common skill sets of like, don't try to bring your
kid to 30 different events like, yeah, do three, but do them really nicely.

[01:37:57] **Stefan Seltz-Axmacher:** What is child rearing if not building a
really slow dev time robot.

[01:38:02] **Ilia Baranov:** Yeah, yeah. Oh yeah, I think of that all the time,
especially with a with a newborn. You're like, oh like I keep, I keep giving
this example. When my son was born, I noticed he would only smile if my face was
oriented the same way. His face was like, he can only recognize faces in this
orientation. Wow. And then, yeah, and that's apparently pretty common. And then
like, a some amount of time, I forget exactly when suddenly it snapped that
like, even if my face was rotated this way, it was still a human face and it was
like an overnight change of like, rotation works now for a vision like that job.

[01:38:34] **Stefan Seltz-Axmacher:** Yeah, it works.

[01:38:35] **Ilia Baranov:** Right. And like, you could see these things turning
on and.

[01:38:38] **Stefan Seltz-Axmacher:** I don't think even had it enabled.

[01:38:41] **Audrow Nash:** Yeah. Yeah.

[01:38:42] **Ilia Baranov:** No, no, nothing real impressive, you know.

[01:38:44] **Stefan Seltz-Axmacher:** Yeah.

[01:38:45] **Ilia Baranov:** Reinforcement learning I don't know. But yeah. So,
be humans and, do less but do a better.

[01:38:54] **Stefan Seltz-Axmacher:** Oh, yeah. Well, thank you so much for
having us on today. So lot of fun.

[01:38:57] **Audrow Nash:** Oh, yeah. Well, thank you both. Do you want to plug
your podcast real quick?

[01:39:01] **Stefan Seltz-Axmacher:** So you can learn more about us at Polymath
robotics.com. And our podcast is automated.com or automated parts.

[01:39:08] **Audrow Nash:** I'll include the link.

[01:39:10] **Ilia Baranov:** It's at the bottom of the webpage.

[01:39:12] **Stefan Seltz-Axmacher:** It's called Automate It. It's wherever you
get your podcasts.

[01:39:15] **Audrow Nash:** Okay. Hell, yeah. All right. Thank you both.

[01:39:17] **Stefan Seltz-Axmacher:** Thank you.

[01:39:18] **Ilia Baranov:** See you next time.

[01:39:19] **Audrow Nash:** Bye, everyone.
