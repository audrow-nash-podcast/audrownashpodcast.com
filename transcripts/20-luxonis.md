## [00:00:00] Start

[00:00:00] **Audrow Nash:** Hi everyone, Audrow here. Isn't it amazing how far
Tesla gets in their self driving by leveraging vision. Vision is a powerful
sense. There's a lot information there. But its a lot of work. From designing
the hardware, to routing the data, to running AI and algorithms, and to syncing
with other sensors. That's where today's guest Luxonis comes in. Luxonis makes
vision platforms that solve a lot of the hard problems I mentioned. And
increasingly, they're handling more of the on-device compute, with vision
sensors and compute being put together in one device. This is super exciting for
edge applications like most robots. I talk with Luxonis’s CEO, Bradley Dillion.
You'll like this episode if you’re - someone building robots on your own - or
part of a company that has robots in places where seeing would be valuable. Or
if you're curious about the state of hardware in robotics. This is the second
full interview that I've done with Bradley. It's very cool to see how much
progress they've made in the last couple years. I think Luxonis is making a
great platform, and that having companies like Luxonis makes it easier to just
get something of the shelf that works to build your application. Without having
to be an expert in cameras and all the related engineering work. This isn't
dissimilar in my mind to using a great and developed software library like Eigen
for linear algebra, tensor flow for machine learning, or Three.js for 3d
visualization. You can just use them without solving all of the underlying hard
problems they solve. Anyway, make yourself comfortable. And here's my
conversation with Bradley Dillon. Hi Bradley, would you introduce yourself?

## [00:01:54] Bradley Dillon & Luxonis Overview

[00:01:54] **Bradley Dillon:** Hi, my name is Bradley Dillon. I'm the CEO at
Luxonis.

[00:01:58] **Audrow Nash:** Awesome. Tell me a bit about Luxonis. What's the
mission? How large are you guys? How, long. Is the company been going?

[00:02:06] **Bradley Dillon:** Yeah, great. Great question. So we were founded
back in 2018. So we're coming up on our sixth birthday, and what we do is we
provide, artificial intelligence enabled, cameras. And what these cameras do is
they help, things like robots, be able to see and navigate the world. So we're
trying to be the basically the eyes and the ears in the brain behind these
robots. So you can basically think of us as being kind of a visual cortex. And,
you know, for us and our, you know, startup journey, we have scaled up a lot. So
we've sold more than 150,000 of these, these AI enabled cameras.

[00:02:44] **Audrow Nash:** Amazing.

[00:02:45] **Bradley Dillon:** Yeah, it's been quite, quite, quite the journey
for sure. And we're up to a team of about 80 people. And or, sorry, 100 people.
And 80 of those people are our engineers. And yeah, that's kind of a brief
overview of the company.

[00:02:59] **Audrow Nash:** Now, you said six years. Tell me about kind of the
trajectory of the company and kind of how things are changing. Like your focus,
I suppose, how it's changed over the last years, because I know you guys are
going in an exciting direction.

[00:03:14] **Bradley Dillon:** So things have definitely changed a lot in the
first few years as a company and not really that very like 0 to 1 time frame. It
was all about being able to to nail the hardware and firmware. And so we got off
the ground by doing a couple of Kickstarter campaigns. And so we were able to
kind of crowdfund, our idea and the idea was, is that you could have this, this
low cost and performant, you know, 3D stereo camera, you know, that could help,
you know, robots navigate and see in the world and that you could do it in a way
that could actually have, you know, artificial intelligence on it. So when we
were, in that first few year period with a small team, you know, 5 to 10 people
and the biggest obstacles were really on the firmware side of things. So first
off, it was getting to, you know, being able to abstract the hardware, to make
it so that you could have meaningful software that our customers could use. And
then the next part of our journey was, how the heck do you do manufacturing? And
we drew up, for the first time, you know, procuring and building products, in
the midst of probably the craziest, you know, semiconductor electronic supply
shortage and, and Sandy B that, you know, the world is seem a century. And so
that was during kind of in the post Covid times. And so we had to figure out how
do you actually build, you know, tens of thousands of these devices in a, in a
reliable way. So that was really the first few years of the journey. And in the
the last few years of the journey, what we've done is we've started to build on
top of that backbone, the hardware and firmware being our backbone. And so that
means as we started to, really work with businesses tackling, you know,
specific, industry specific use cases and get it to where these, these our type
of equipment is able to be deployed at scale. And so initially we were more
focused on kind of a hobbyist, consumer hobbyist use case. And that's how we
kind of initially started. But now our entire focus is on, you know, the big,
business to business, type of applications that are out there. So the companies
you can imagine, we've had a transition to where, you know, things like
reliability and stability, become really important. So we've had to start to,
you know, care and invest more in quality manufacturing operations, things like
that. And then we've also sort of the vertical as our product, meaning that
there's, you know, software that can sit on top of that back and saw those, you
know, industry use cases like I mentioned. So that's a bit of the bit of the
journey. It's you know, startup life is definitely a roller coaster. But, yeah,
that's kind of the main transition, kind of in the last six years.

[00:05:46] **Audrow Nash:** And where are you guys at in terms of are you taking
investment. Are you, cash flow like earning good cash flow from all the sales or
how are you guys funded I suppose.

[00:05:58] **Bradley Dillon:** So we have been funded by kind of bootstrapped
plus friends and family. So, you know, personal. Yeah. It's crazy crazy six
years deep doing that. So personally, I've invested twice. I've had eight. My
friends and family, who invested as well and, you know, mix and mix things like,
say, going to a wedding a little bit awkward because they want to know how other
how their money's doing. So we have luckily this great network of, of angels and
some of these angels have cut, you know, bigger tickets to invest in us. And
that's been able to get us to where we're at today. So we've had to be very
scrappy to be able to do that. And, you know, actually, you know, build and
have, hardware inventory. And then as we look ahead, you know, we yeah, we are
considering all options, where we potentially would be looking to do a
fundraise, in the, you know, not so distant future, but, you know, for is it,
financially we're, we're, we're doing well, we're not quite currently, you know,
profitable or cash flow positive. But we're relatively close. It's really just
that we have so much things that we're so excited to develop from a product
development perspective that, you know, we we keep just plowing, you know, every
available dollar we can justify into a building for the future. But yeah, I
think, you know, the company is very stable from a financial perspective.

[00:07:15] **Audrow Nash:** Yeah. That's awesome to hear. That's absolutely wild
that you've made it this far on family and friends and some individual angel
investors. Do you think if you were to go for investment, would it be like an A
round or a B round or something? Because it sounds like you have. I mean, I
think you have pretty good traction. You've kind of skipped a little bit. But
what do you think of it.

[00:07:35] **Bradley Dillon:** Yeah, it's funny the amount raised and you know,
series A, B rounds has changed so much over the last 5 to 10 years. So, you
know, a series A that used to maybe have been, you know, $5 million that maybe
is now kind of $25 million. So yeah, it's funny how that funny that that's
happened, but yeah, I mean, in the, probably in the venture capital world, you
would, you would call it, you know, probably a series A and you would think the
terms are kind of funny, but you'd say maybe we previously done like, you know,
a pre-seed a seed and a pre-series A, so something along those lines. But yeah,
it would be, it would be a larger institutional raise. That would be, you know,
raising a, you know, more significant chunk of capital and likely with likely,
the kind of venture capital side of institutional investors.

## [00:08:22] Luxonis’s Equipments

[00:08:22] **Audrow Nash:** Okay. Very interesting, super exciting. That you
guys are there, like funding by that way. And have been scrappy to get there. I
really like that. I want to talk more about that a bit later. But. Tell me about
your equipment. Tell me about your cameras. Tell me about how they generally
work and what kinds of sensors you support.

[00:08:44] **Bradley Dillon:** Yeah, absolutely. So I'll hold out for any of
your audience ideas. You know, watching the video stream here. This is an
example of one of our, our cameras right here. And I'll hold it up to my eyes
and start with to say, if you can kind of see there's a left camera and a right
camera and it's actually we designed it is exactly the width of our human eyes.
And so our thinking was, is, you know, for some reason we evolved to have human
eyes that were, you know, this far apart. So might as well just pick that for
these pretty stereo cameras. So from a sensor perspective, the first big thing
is, is the left camera on the right camera day. That data is fuzed together, and
it makes it so that you can create a 3D map of the world in front of you. So it
makes it so that you can understand, okay, this laptop screen is, you know, 15in
away for me. And then from a sensor perspective, we also have, there's another
camera here at the center. I made a little hard to see. And that's a really high
resolution camera. So this would be something that would be, you know, is high
resolution is the latest and greatest iPhone. So be, you know, our latest models
in fact 48 megapixel. So it's a really high resolution. And we're pushing the
boundaries that are to our newest hardware can support up to 108 megapixels. And
so what's pretty incredible about the journey they're on pixels is they say that
the human eye has about, you know, five 680 pixels. And so it won't be too long
before it will basically be able to have cameras that, you know, have higher
resolution and are human eyes, which is pretty incredible to think about. And
then to continue on.

[00:10:10] **Audrow Nash:** We we probably do have. Cameras that are higher
resolution than a human, I would. Think, but it's not, Not a small form factor.
Is it true or.

[00:10:19] **Bradley Dillon:** That's right. Yeah. That's not so we support kind
of sensors that we can, you know, manufacture at scale that, you know, at an
economic price. And so there are, you know, there are cameras like you mentioned
at do go that high. And it's really for, you know, probably another four years
in our journey, we'd be able to offer that, I would say with our platform based
on the, you know, the cost curve and the way things are progressing.

[00:10:44] **Audrow Nash:** So exciting.

[00:10:45] **Bradley Dillon:** Yeah, it's really incredibly exciting, for sure.
And then some other sensors on these products. And so there's, there's, some
infrared here and the infrared, what it does is, is that, two things. One is
it's infrared illumination and it's basically night vision. So it makes it so
that you're if you're at night, you can still operate with it. And then there's
this thing called an infrared laser dot projector. And that's for, something
that's called active stereo. And what that does is it basically, you can imagine
it spray paints a bunch of dots on a surface. And, you know, sometimes if you're
like looking at a like, say, like a white wall, you get kind of you get kind of
woozy because you can't tell how far it is. You kind of get your your mind gets
kind of warped out so that this does the infrared laser dot projector makes it
so that you get texture on that surface, and you can actually see how far it is.
And then on the inside of the device we have additional sensors. So we have like
EMUs. So it's an inertial armament unit. And what that does is it, you know,
measures basically can measure like the pitch and roll and measure how things
are moving. So that's the thing, like on your iPhone where, you know, it knows
that when you turn it sideways, it knows to like, you know, turn your turn your
screen sideways. And then we some other, other new sensors as well, they're
excited about. So we have our first thermal sensor. And then we have also our
first, lidar based sensor. And that's, basically where a bunch of light is shot
off and then it bounces back. And then based on how much time it takes for that
to happen, I can create a nice 3D, you know, high precision model of things. So,
yeah, for, for a full sensor stack, that's what I mentioned. I forgot to mention
this. Microphones. So these are, incredible amount of sensors that are all
fuzing the data together on the edge, which is really exciting.

[00:12:21] **Audrow Nash:** Do you have the is the thermal camera, so my video
is a bit, jagged, so I can't always see everything you're holding up, but the,
like, it's like, stop and go. But the, thermal camera, is that on one of the
like, do you have all of the sensors you mentioned on one, device, or is it,
that there's like a dedicated thermal camera?

[00:12:45] **Bradley Dillon:** Oh, we have a dedicated thermal camera, so I'm
holding it up here. Oh, I see it now. Okay, so this one, that kind of looks like
it's reflecting like a mirror. That's the that's the actual thermal sensor. And
then we have a high resolution color camera. And so then that data is able to be
fuzed together. So yeah it's a dedicated product.

## [00:13:01] Integrating Multiple Sensors

[00:13:01] **Audrow Nash:** That's so cool okay. And so with all of these
sensors that you have, I guess it's very interesting that you have so many
different types of sensors, the the microphone the IMU for figuring out how it's
tilted. Tell me a bit about having all of those sensors because it's, it's going
more from. Like being a vision sensor to being a sensor node or something like
that, like a little platform you strap on that has everything. Tell me about
that, because it's interesting that you're integrating so many different types
of sensors.

[00:13:39] **Bradley Dillon:** Yeah. So it's a great question. And it kind of is
at the heart of one of our durable product strategies. And so one of our long
term strategies that we're really bought into is, is that we want to be
supporting new sensors every year. And more performance answers for the existing
ones that we have in the lineup. Well, we hear from our customers is, is that
when you have to have an array of different sensors that come from different
providers and different systems and different setups, it's really difficult to
manage those. And so by integrating them all into one device, it really makes
things a lot easier to be able to operate and makes it so that you can really
fuze that data together and base it so that you know exactly from a like a
timing perspective on where you're getting each piece of data, where if you're
trying to synchronize that across different devices, it's really hard to get
that to be done in a really low latency, really, you know, really high
performance type, the type of case. And, you know, we believe that by having
the, you know, doing the painful thing of constantly adding these new drivers to
support all these sensors that we're making it easier for, for our clients
because they can just buy a device that's you're all in one sensor, sensor
device. And then from a, you know, a more abstract perspective, we're
ultimately, in a lot of cases, we're competing with humans, humans maybe would
have been the ones that were, you know, doing a type of task before. And so we
want these systems to be able to compete with humans. And that means that you
have sensors that, you know, can do some of what humans can, but then you can
add additional ones where you basically can imagine a human, but they have super
powers, right? So, you know, humans, you know, don't have a thermal sensor. We
can't, you know, look at something and know how hot or cold it is. Whereas but
you add it to our device and you can and so that that's pretty exciting for us
to be able to unlock these use cases that these sensors can provide to our
clients.

[00:15:29] **Audrow Nash:** Yeah. I like that perspective a lot. And with the
thing brought in. Which is just how crazy large the labor shortages are across
lots of industries, and that makes it so that there's a very good, reason to try
to get robots or some sort of automation to be replacing humans or just
providing work where there are no humans for all this. Like, that's the thing
that I think is often, I don't know, should be thrown in there because there is
some fear around taking all the jobs, I think by robots taking all the jobs of
people.

[00:16:05] **Bradley Dillon:** It's a great topic. A great point is something
that we talk a lot about and something that we're pretty passionate about. Our
perspective is, is that these, you know, robotics and, and automation systems
are going to, you know, make the world a much better place. And the reason for
it is, is that there, as you mentioned, in a lot of the a lot of the rich world,
you know, labor has gotten more scarce. And the people that are doing physical
labor and what these types of robot robotics and automation systems do is they
they're able to take the most kind of like mind numbing, repetitive, dangerous,
tasks. They're able to take that off from the human. And what they do then is
they're able to make it so that collectively, the world can become a more
productive and a richer place. And so you seen this throughout, you know,
technology history over the last couple hundred years that each new wave of
technology, what it is, is it's very deflation. So it makes it so that we can be
more efficient and more productive. And then what that does is then it, you
know, that that makes it so that there's excess capital, it gets formed, that
excess capital gets invested into new things, to new investments and new
innovation. And the world, you know, keeps, keeps having more and more jobs. And
the example I like to use is I got to recently visit South Korea and, and South
Korea. They actually have, five times more robots per human than any other
country in the world. It's like walking into the future.

[00:17:30] **Audrow Nash:** Amazing.

[00:17:30] **Bradley Dillon:** And so I, you know, at the airport, they have
robots helping with things. I went to a restaurant where they had, the, the food
brought to our table and taken from our table by a robot. And the dishes were
cleaned by a robot. And I don't think anybody in that restaurant is saying I'm
really upset. I really wanted to wash the dishes right now, and instead that
employee can say, oh, I can try to maybe go and improve the client experience. I
can go try to upsell bam and have a better, you know, personal touch. And the
owner of that restaurant, they can pay their workers more and they can, you
know, use that extra savings to maybe expand, you know, etc., etc.. So we think
it's an incredible positive thing. And we know it's I think it's easy sometimes
to think, oh yeah, we, we believe in tech history. We know what happened before,
but this time is different. And I don't I don't think this time is different. I
think I think it's another way that's going to be very similar. And I think it's
going to make humanity in the world a better place.

[00:18:24] **Audrow Nash:** Totally. I think this time is a little different in
that demographically we're in a way that the world hasn't been in the past. When
we have increasing technologies, which is we have a large in most of the, rich
world say. There's a lot of older people and, that's kind of a new thing. And so
there's a lot of people leaving the workforce and a lot of people to be taken
care of, and so, like, if you look at South Korea. As you were saying, they're.
One that has aged very, very fast. I think their average age is far, far older
than, say, the US. And so it's an interesting thing there that they have
compensated so significantly with automation and are still very competitive,
like they're doing great work over there in general. And my opinion are from
what I know.

[00:19:12] **Bradley Dillon:** Yeah, I completely agree. And considering on the
South Korea use case, it's interesting. Their their birth rates are below like
one. So it means they're like well below the replacement rate. And what's
interesting is again, as the population is aged there, the unemployment rate
there is very low. It's been consistent makes sense below 5%. And you're totally
right. So as the population gets older we're saying like who or who's going to
who's going to care for this aging population. And I think that's where, you
know, robotics and automation can come in. You can have a humanoid robot that,
you know, if I'm imagining myself, you know, kicking it in, you know, an elderly
care facility one day, like, I'd have my humanoid robot buddy that would help me
with, you know, various tasks you can have things like, you know, automated
systems that dispense, prescriptions, for example. And, that can improve the
safety of, oh, maybe you had somebody elderly that's accidentally taking too
many or not taking them. So there's all kinds of things where you can both
improve the, the, the elderly care experience. And as you mentioned, as a
population, as more and more people are not working, and it means that the the
existing workforce is not enough to sustain the whole economy. And that's, you
know, that that's where robotics, honestly, is going to be able to come in in a
big way.

## [00:20:26] Applications of Luxonis Vision

[00:20:26] **Audrow Nash:** Yeah. That's why it's. This is a big reason I'm so
bullish on robotics for the near future. I think necessity is going to pull
robotics to be bigger and bigger because of this kind of thing, this large
demographic trend. But so you mentioned pill counting and things like that. Tell
me about some of the things your cameras are being used. For, like cool
automation tasks. Obviously they're used in quite a bit of quite a number of
robots. But tell me about some of the tasks that your sensor that your platforms
enable.

[00:20:54] **Bradley Dillon:** Yeah. So the I'll start by sharing an example
which is in the industrial equipment and agricultural space. And so we're
helping a large industrial equipment manufacturer where the machines are used
for, for things like agriculture and mining and stuff like that. We're helping
them on a, on a multiyear. It'll probably end up being like a decade long
journey of doing three key steps. The first step is we're making it so that the
machines stop harming the human. And it's pretty shocking. Around the world,
machines kill millions of humans per year today, and we unfortunately tolerate
it now. A lot of those obviously are like automobile accidents, for example. But
there's a lot of industrial equipment as well. So step one is to make it so that
there's human machine safety. And so that the machine's top priority at all
times is to make sure that with that, there's a human around that they're not
going to harm it. And so so what our cameras do is they make it so that the
device, the industrial equipment, it can it can see what's around them, and it
can make sure that, you know, arms, limbs, you know, humans are avoiding the
equipment, doesn't harm them. And then the second step with, that company is
that and the industry in general is to make it so that the equipment can operate
remotely. And so a lot of these equipments, pieces of equipment are they're
pretty difficult to operate over a long time. They they vibrate a lot. They're,
they're pretty hard on the operators. And so by being able to operate it
remotely, it makes it so you can operate them more safely and more efficiently.
And then the final frontier is to make it so the equipment can operate
completely autonomously. And so that's where you can set it off on a task, and
you maybe have some remote folks that can, you know, take over if needed. But
they're mostly operating autonomously. And so I think you see that across
different industries. But that's, you know, as an example, in the industrial
equipment space that we're helping one.

[00:22:43] **Audrow Nash:** I really like that. Yeah. I, I'm just thinking back
to an interview with Polymath Robotics where they were talking about just
driving massive amounts of say toxic chemicals or like molten metal or crazy
things that you don't want to be exposed to. And the pay is high, but the cancer
rates are high and the workers in this kind of thing. And so if you can make it
so that we can automate or, remotely operate some of these tasks, like that's
huge wins.

[00:23:15] **Bradley Dillon:** Yeah, absolutely. And what's also interesting is
the equipment in a lot of cases can be designed better and more performant. And
an example I'll use is with fighter pilots. We've you know, we've we're used to
kind of a pseudo top gun fighter pilot. And what's interesting today is, is
that, you know, basically, you know, I operated, fighter jets were able to
outperform a human. And what's so interesting is you can design them so that
they could say, be moving at a, like, you know, more than ten G's. It's
something that a human couldn't handle, but the machine doesn't care. If the
machine doesn't have a human, it can operate more performatively. And so I think
in a lot of cases, this industrial equipment, you can reimagine the way it's
operated, because you don't need to have to have a space where the operator and
you can make it operate in a way that, you know, it's you'd say, oh, maybe
that's too high vibration, or it's going somewhere that wouldn't be safe. And so
it unlocks, you know, new opportunities for efficiency as well.

[00:24:10] **Audrow Nash:** Yeah. Very true. And especially if we can automate
stuff I'm thinking of like electric sheep having a bunch of little lawnmowers
that go and mow. Because it's safer and it's easier to manage and everything
else. And then they can't cause as much damage. And so if you do that kind of
thing, then you don't have to have the big rider that requires a person to
operate it. And they're big because there aren't many people for these roles for
this kind of thing. So yeah, imagine the form factor is changing quite a bit.
And those jets that they'll go and turn incredibly quickly and it would like
turn a human into mush or something like that at those speeds. Those are just
bonkers. What you can do with AI or with, with a computer driving everything or
even being remotely operated. I suppose. How wild.

## [00:25:01] Luxonis & Computing Power

[00:25:01] **Bradley Dillon:** What a time of your life. It's incredible.

[00:25:03] **Audrow Nash:** Now, another thing that's interesting about what I
think you guys are doing is you're also putting a lot of compute. So we've
talked about all the sensors that you're enabling, but. You've been also putting
the compute with the sensors. So some of the platforms, have like a powerful
computer attached to them. Correct? Would you tell me about those.

[00:25:22] **Bradley Dillon:** Yeah, that's that's right. And so that's really
the other kind of second key durable product strategy that we have, which is, is
that we enable, essentially a computer that's, that's right there on the edge,
right, with out there with all the sensors. And so what that means is, is that
you're able to run applications and business logic right on the device, and it
means that you're able to do artificial intelligence models, you're able
actually to run the inference where it's, you know, actually, you know,
operating you're able to also run that on the edge on the device. And so our
thesis this is that customers are always going to want to have more of that.
They're always going to want to have more on the edge because they are able to
solve one use case and they're like, this is exciting. We want to solve more.
And so what Luxonis equipment does is it provides the opportunity to eliminate
an external dependency, like needing to have cloud. And so customers that are
maybe spending a lot of money today, on cloud compute, cloud inference, they're
able to take that workload and they're able to take it to the edge. And they're
able to, you know, they own the hardware and they're able to have a massive, you
know, savings over time when they're going to operate, in their production
environments. And so for our products, we actually had a new generation of
hardware. It's our series four of hardware. It's, this this is an example of one
right here that I'm holding up. And so this little device has more processing
power than the laptop that I'm on here. And it has, and has a 48 top for AI
inference. And so what that means is that they're able to run, several vision
models in parallel. So you could have a model that could do one thing, another
thing, another thing, you're able to run, run all that simultaneously, which is
incredible.

[00:27:07] **Audrow Nash:** What you said, TOPS? is that like terabyte of
floating point operations?

[00:27:11] **Bradley Dillon:** Yeah. So it's trillions of operations per second.

[00:27:15] **Audrow Nash:** Wow. Yeah. That's wild. Yeah. So you can run lots of
models all at once on this.

[00:27:20] **Bradley Dillon:** Yeah.

[00:27:20] **Audrow Nash:** Exactly. Amazing. And so so then with this you're
you're empowering on the edge. So you're making it so that you can have. Really
good compute demands. Or, really, really. Sophisticated compute occurring at the
edge. And this helps you get away from the cloud. The thing the thing that I'm
imagining with this is it's like You have your, like sensor stack that is one of
your devices, and then you just have it connecting to a lot of things. And by
doing that you get it’s like this little. Almost parasite that can be put on to
any other kind of equipment. And then it can do a lot of the automation really,
really well. And it's all just like you basically have the one node and then you
have little wires running everywhere else, like this kind of thing as a
potential workflow or, way of having these devices that kind of the, the vision,
having this little thing sit somewhere and then automate something bigger. Or
how do you imagine it.

## [00:28:21] Linking Multiple Devices

[00:28:21] **Bradley Dillon:** Where you described is is definitely one of the
main to use cases. And so the use case is really bifurcate. Between one is where
you have kind of a standalone automation device. And that would be where you
maybe have this camera that would be up and it'd be connected to the maybe the
infrastructure that you have locally, and it would be operating everything. And
it could be, say, like observing something in the world. So this could be
somewhere and it could be doing, say, license plate recognition, and it could be
running an application that's, you know, detecting a vehicle, detecting a
license plate. And then it's sending the license plate data somewhere, what you
described as the second, main use case, which is where our devices are
integrated into a larger, a larger assembly. And that's really the kind of
canonical example is, you know, things like autonomous mobile robots. And so
that's where you have, you know, one of our cameras is there and it's like you
said, it's kind of a node, that's, you know, a peripheral device that's
capturing all the sensor data. It's helping offload a little bit of the compute
and some of the AI inference. And, and then it's, you know, combined to a
larger, larger assembly, the area that is one area of kind of robotics that's
pretty exciting humanoids, for example. And so we work with several humanoid
customers. And, you know, these humanoids are they need to be able to kind of
navigate the world. So to frequently have, you know, one of our cameras in the
front and then one of their camera, our cameras in the back, and, and that's
then combined to, of course, you have a lot of other sensors that's on the
humanoid, and you have a lot more compute that's on it as well. And so it's kind
of one sensor in a, in a broad, you know, kind of a broad ecosystem to do
something which is very complicated, which is, you know, have you tried to try
to make a robot that can navigate the world in the way a human can?

[00:30:09] **Audrow Nash:** Yeah. That's very exciting. How do you so when you
have. Multiple ones, the one in the front and the one in the back, or. Say
you're. Automating a tractor or something like this that requires several
around. So you can see everywhere it's going. There's, see all sides of it while
it's operating. How do you, how do you connect multiple devices and does this
change if. Those devices have compute? Or would you imagine having like one with
compute or a bigger computer somewhere else and then all these other ones, as.
Peripherals do it or how does how does connecting lots of them work?

[00:30:41] **Bradley Dillon:** That's a great question. So our devices have
which I'll hold up here. They, they have in this case with series four they have
usb-C, which is like what you'd use to power your iPhone for connectivity. And
then they also have these ports here. And this part here is an Ethernet port. So
you can use Ethernet for power and connectivity. And then there's another port
here which is called like an image connector. And what that is, is it's a
connector that makes it so you can actually daisy chain the devices together.
And so by daisy chaining them together, you can have an array of them that are
pointed at different things. And then that data can all be captured and kind of
fuzed together into one, you know, one broad picture, one broad scene, to be
able to, you know, navigate whatever you're working on. So that is one, one
example. There are also cases where our devices are and it's more like kind of
this device here, it's really used as a peripheral device. And multiple of them
would be connected in to some type of a central compute box that would be
processing all of the data and making sense of it.

## [00:31:41] Luxonis AI Models

[00:31:41] **Audrow Nash:** So tell me about the AI models that. You have and
how those play in so. Especially for the ones with compute. But it sounds like
you do you have the option to do a lot of fairly sophisticated, Observation of
whatever the sensor is seeing. And I'd love to hear how you do that and how you
expose that to a user.

[00:32:02] **Bradley Dillon:** Yeah, absolutely. So we have a team of about 20
artificial intelligence engineers. We also have some folks that work on,
creating synthetic data. And so I'll kind of start with, you know, if you're if
you're a business customer and you have no data and you're like, how do how do I
go about creating an AI model? So what you can do is you can grab some maybe
publicly available data that's out there. And so for example, at use like
license plate recognition technology. So you've maybe you can maybe buy a
publicly available data set, that has some, you know, license plates for
example. And then what you're wanting to do to to develop a model is you maybe
start to want to add your own proprietary data. And this is data that's unique
to your own operation that you're wanting to basically take existing data out
there and you're wanting to customize it for exactly your purpose. And so
there's two ways that you go about doing that. The first is you create synthetic
data, which we help, do for our customers. And that's where you create these
scenes. We actually use a tool called unity. And it's the same thing that's used
for creating video games. So you basically you imagine is you basically create a
bunch of scenes that you that would that would be as good as a video game. And
those scenes are good enough quality that they can be used to help train the,
the AI model, along with the publicly available data that you have, that gets
you a proof of concept that gets you something that says, okay, we have a model,
we can go out and test it. Maybe it works 80 or 90% and 8,090% is nowhere near
good enough. If you want to have something that's out there that's, you know,
adapting to the real world, handling edge cases, you know, the world is always
changing. You need to capture actual real world data. That's, you know, from the
the actual situation that you're trying to navigate. So that's where our cameras
come in. So what our cameras do is they, they capture, new image data. And that
image data then can be used to be labeled. And then, with that labeled data,
then you can then retrain the model. And what that does is it creates an
ecosystem where you can iteratively improve your model and start to get
something that maybe works 99% of the time, or 99 plus percent of the time. And
then over time, it becomes more and more proprietary, you know, custom built for
your exact purpose because you're capturing and feeding it in data that's from
your actual, you know, you know, business use case.

[00:34:23] **Audrow Nash:** Yeah. Very interesting. It's cool to hear that you
guys are. Using unity for generating quite a bit of data. For, labeling data.
Once you start, once you're getting your own data, do you have any workflows for
that? Like, do you do you make it easy for people to do it or they. Do, they
just have to figure out how to grab it within the relevant times and then label
it. Or I imagine this is a vertical you'll start to get to. But are you are you
working on it yet? Or how is labeling?

## [00:34:53] Data Generation & Labeling

[00:34:53] **Bradley Dillon:** Yeah, we are so it's a combination of things. The
first is, is that we have an in-house labeling team. They're actually located in
Tunisia. So in Tunisia and Tunis. Rehab. Oh, one of our machine learning
engineers. And we have a small group of folks that, help to help to do the
manual data labeling that's needed. So what we do for those type of
opportunities with our clients is we put together, some training information
over exactly what we're trying to label in each image. And then what we do is
they, you know, they go out and they're labeling, you know, thousands, tens of
thousands of images. And then we have mechanisms for being able to, you know,
manually and with technology audit, you know, to make sure that we're labeling
things right. If you don't label things correctly, then you don't know the
truth. And if you don't know that, then you can't you can't create something
that's going to be useful. So that's that's why labeling of course, is is, you
know, is so critical. And then the other part that we use is that when synthetic
data is created and also this technology is, is in some cases used for real
world data, you can auto label it. And so that's where you kind of tell the
computer, hey, this is the type of thing that I'm trying to label when it's in
unity. It's very clear because in unity, of course, when the scenes build,
you've labeled everything and it can capture it and then it's real world data.
You know, you in some cases it can be work really well, you can say, okay,
here's how you want to auto label it. And in some cases you have to do something
that's pretty manual. So you put that all together and it makes it so that for,
you know, customers that need, you know, tens of thousands, in some cases
hundreds of thousands or millions of images, you know, proprietary images that
are labeled for them, that that's how we go about helping them do that.

[00:36:32] **Audrow Nash:** Cool. I did not realize. So from what it sounds like
to me, you guys are a lot more service. Based than I had realized for this.
Like, like. Helping with data generation and simulation. And then also helping
with labeling with your labeling team. Is that a large part of your revenue or
is it a growing part? Because that that seems very interesting, because it's
like almost you could sell the devices at cost. Say, and. Then have teams that
help with. Services that customers will need, like data generation and labeling
for this kind of. Thing. Is it a large part of your business model? Is it
growing? How do you think about it?

[00:37:17] **Bradley Dillon:** So it is a significant portion of our business
model. And the way that we think about it is, is that we're we're trying to get
our clients to get to where they, you know, have a solution that they can deploy
scale. And when we see that there's gaps in the market, we work to fill them
because, you know, we want to get our help. Our clients get there as fast as
possible. And it creates this nice virtual virtuous cycle. And what that cycle
is, is that clients buy hardware. Then they're able to, you know, use our
services, to be able to get it so that that hardware can do something useful for
them both on the software side and, you know, they pay us for that. And then in
turn, when that software works, well, then they go and they buy more hardware.
And so that's like a nice, very complimentary part of our part of our revenue
model. The majority of our revenue today is from hardware sales. So okay, 80%
something along those lines. But we do also have, you know, a growing, you know,
software development portion as well. And so in some cases, those are software
tools where the clients are able to use the tools on their own. And in other
cases they're using those tools. But we have, you know, teams. Yeah, we kind of
think of as like the enterprise title of that kind of software tool where we
have teams that are helping that kind of get get to their, you know, moment
where they can scale up.

[00:38:37] **Audrow Nash:** Do you imagine so in say you've been around for six
years, do you imagine in four years from now that. This is like 80. Percent of
your revenue or, do you think it'll always stay a kind of small thing or what
would you imagine?

[00:38:52] **Bradley Dillon:** So I'll first say we don't know for sure.

[00:38:57] **Audrow Nash:** Is it a relatively new thing?

[00:38:58] **Bradley Dillon:** No, it's it's not a it's not a relatively new
thing. And it's something that we talk a lot about. So I'll first say that we're
here flexible, on whatever is going to be the best path for us as an
organization. And, you know, we're we're exploring different options of what
that could look like. You know, one thing that's out there, like you already
mentioned, is you could, you know, you could potentially sell the hardware at a
lower price or at no price. And then you have it kind of bundled as a, you know,
call it a platform as a service or something along those lines. So that's
something that we think would be a model that could be a really enticing, you
know, growth opportunity for us, for certain clients where that fits into their
operation. And what it does is it removes kind of the, the, the way that they
can scale up with folks on us. It moves it from being, you know, a CapEx to it
to an OpEx. And that can really work well for certain business models.

[00:39:51] **Audrow Nash:** So we think so too. Yeah.

[00:39:52] **Bradley Dillon:** So we we are open to exploring that that more you
know, as, as we, as we grow, I will say that we do believe that the software
kind of subscription portion is going to be a major contributor, to our revenue
long term. We don't know what the exact mixes, you know, when we're, you know,
ten scale right now. Is it, is it half, is it, is it 20%. You know, we don't we
don't know yet.

[00:40:16] **Audrow Nash:** It's hard to say.

[00:40:17] **Bradley Dillon:** Yeah. It's. Yeah. And we're but you know we we
ultimately believe that, you know our value proposition is, is that, you know we
have great hardware that that, you know, helps make great that goes along with
great software that can do something useful. And so we're kind of really we're
trying to do everything we can to just stay customer obsessed. And so like the
reason why we've done the things that I mentioned before on like data labeling
and some of these services, because we know it's a pain point for our customers,
we know we can solve it. And so we kind of work backwards from that and tackle
it. So we'll kind of remain kind of with with our customers kind of, you know,
hopefully get guidance guiding the way for us to be able to, to navigate what
the exact mix of that is.

[00:40:55] **Audrow Nash:** Yeah. I think that's really clever. And I think that
that seems like a very. Good model to me. And yeah, I guess the market will pull
you in the correct direction. So you allocate accordingly. But. It seems like a
nice thing because I'm thinking of, say, startups. A thing that's hard with.
Startups is getting people that are very sophisticated, like, like super experts
in some narrow thing that your startup needs. And so a lot of times it's. Easier
to just hire for that kind of hire out, those specific roles. And so it's
interesting. It's like, you guys already have the expertise. You're putting the
pipelines in place that make it so you are very efficient at data labeling. You
have your team allocated and you already know how all your software works, so
that it's very easy for you to get the data. And then they don't have to like
you can help them bootstrap and go from 80% working to 99% or 99.9 and a few
other nines working. And then that allows them to deploy more and then they just
buy more. And the in-house part of. Training. Or the part of training their
model has just been completely outsourced to you guys, which would be really
cool. So I don't know, I'm just thinking that's a really cool model, and you
could take equity. In some of these. Companies if they're very early, which
would be a fun thing.

[00:42:25] **Bradley Dillon:** Yeah, you're exactly right. I think these
organizations are looking at, you know, a classical trade off of like, do we
make versus buy and when they're, when they're looking at that, we like to think
that that usually when they see, you know, that they're relatively, you know,
competitive, you know, economic price of our cameras and what that the platform
can provide that they say, yeah, this is a no brainer. There's other things that
maybe we want to try to make ourselves. But in this case where we should just we
should just buy these buy these devices and the other thing is we want to we
really want to control our own destiny with our clients. And so when in a world
where we say, oh, we've solved this area here, over on this side, but we have
this other pain point that's blocking our clients from getting further along.
And so by being able to kind of control those aspects, it makes it so that, you
know, we we have the capability to. Yeah, to get the client all the way to the
finish line. And that at the current stage of where, you know, the intersection
of robotics and artificial intelligence is I think that's really important to
us. You have a lot of customers today that are really, you know, they're really
pursuing, investments in this area and exploring a lot of stuff. And what it
means is you have a lot of pilots and, you know, is this possible? Is that
possible? And we're we're really obsessed with trying to be able to have really
high conversion rate from those pilots to to actually, you know, going at scale.
Of course, some of that is selfish. Like, we know we want to be able to grow our
revenue in a big way. But it's also like about what's rewarding, it's not
rewarding to work on pilots all the time. What's really rewarding is you
actually get to see that innovation, use it, use intensely at scale. And so for
our engineers, definitely the engineers I mentioned, the most exciting part is
when you actually get to go, oh my gosh, like, look, look, look at this. That's
being used out there in the world. So that's, you know, we're we're we're really
kind of obsessed with that part of things.

[00:44:21] **Audrow Nash:** Totally. Yeah. For so like, I mean, I've been at
Open Robotics and then we were acquired by intrinsic. But why also Open.
Robotics does ROS And I think that was really exciting is when iRobot announced
that they were using ROS 2. And so now ROS two is on a whole bunch of robots all
around. And that was just like the biggest win for our team for this kind of
thing. So I can imagine it's like, yeah, when when you see people using what
you're making really productively, that's super, super cool and energizing.

## [00:44:53] Future Predictions

[00:44:53] **Bradley Dillon:** Yeah, absolutely. And I'll say that, you know,
the world is the robot change in such an interesting way on our journey. Just
just to kind of add in here, I kind of think of it as, you know, 2022 is kind of
this like before Christ, after Christ moment for artificial intelligence and
before 2020, you know, 2023 is things kind of really scaled up. Their
organizations were not asking themselves, how can we, you know, how can we use
artificial intelligence and robotics? They weren't doing that from the top very
often. It was coming very bottom. Some engineers were saying, you know, baking
their leadership. Hey there. You know, there's so much that's possible here.
Let's lean in and invest. And now that we're in this kind of like after Christ
moment, excuse that. You know, the religious analogy is that. Yeah,
organizations are now doing it from a very top down perspective. And they're
asking themselves by their their leadership teams or executives, their board of
directors or saying are investing enough here? Are we moving fast enough? How
can we do more? How can we try things? And so that's been really cool in the
conversation that a lot more of our discussions today where, you know, circa
2022, it was like 100% versus engineers. That was all we talked to. You work
sales. It's now become honestly like a 5050 split where you have you have a lot
of people that are, you know, more more on the leadership top-down side of
things. Now the Bottoms Up is still so excited about it, too. They're driving it
too. So it's been interesting to see the way the world's the world's change
there. And that really became solidified in 2024. And that momentum is really
continuing into 2025 which is really exciting to see.

[00:46:27] **Audrow Nash:** How do you think it will. So okay 2022 2023. Three
2024 2025. How do you think it'll go. For the rest of like, how do you predict
that that trend will continue? Or like where do you think it'll go. So like
2026 2027. Like where do you what do you see it going? Maybe 2030. All these
things. Like what do you bet.

[00:46:49] **Bradley Dillon:** Yeah. It's a great question how we we think about
this a lot. You know, I, I think that. The example that I think is most,
tangible to sort of think about is probably in humanoid robotics and with
humanoids, if you think about, you know, what's the, what's the total
addressable market for it? And the reality is, like in a place like the United
States, I think I saw a research study that said, you know, the addressable
market should be like 400 million of them. And so I think humanoids, what they
would enable is, is that if you have a humanoid that can do you know, pretty
much anything that a human can do, which is, you know, starting to seem
feasible, you know, call it by the end of this decade, then you really gets at
this kind of moment that's sort of similar to like the computer revolution of
all of a sudden everybody had a, you know, a laptop on every desk. I think they
said Microsoft was founded with the idea that, you know, Bill Gates and Paul
Allen had is just a laptop and every desk that was there and that that became a
reality. Right. And so I think with humanoids, you have this, this possibility
that it's a, you know, a humanoid in every home and a humanoid in every
workplace. And so I think that that's where you can kind of see things
projecting out to is, I think, embodied AI and where you have you have these
kind of this Uber multimodal model that can kind of just have this whole world
view as kind of world of it could do, you know, behavior and vision and, you
know, you know, sound and, you know, voice and you know, all of the above. And I
think that's where the intersection of all of this technology is kind of
converging in an exciting way.

[00:48:26] **Audrow Nash:** Yeah. It is really exciting. It's very interesting
to me. So like. Being in robotics over the last like 15 years or. So. And it's
just wild how much things have changed. It's like what I learned in school has
like it's just not the way we do things anymore for a lot of things, which is
just absolutely crazy. So it's moving fast and it's changing and better hardware
like you guys are making makes it much easier to do things like the the barrier
to entry is decreasing. The ability to do stuff is increasing. It's just wild.

## [00:49:01] AI for Scene Understanding

[00:49:01] **Bradley Dillon:** Yeah, it's it's really exciting. 20 years ago,
during my undergrad, I studied mechanical engineering and my kind of, focused
kind of all the extra classes I could take was in mechatronics and robotics. And
so we built robots that played dodgeball against each other. We built robots
that played Capture the Flag. You know, we did things so, you know, the inverted
pendulum and all this cool stuff. And, you know, it's funny, you know, thinking
back to that, you know, 20, 20 years ago, where we come to today and, you know,
getting to see, for example, like Waymo cars scale up with autonomous driving
and thinking back to, you know, this autonomous robot that like, you know, you
pointed a sensor at the table and it could sense, you know, black tape and, you
know, that was how it could go. It was kind of like back then the idea that, oh,
you could translate this all the way up to say, having a totally autonomous, you
know, 5,000 pound car barreling down the road at 70 miles an hour, it's it's
it's really exciting to see the see the progress for sure.

[00:50:02] **Audrow Nash:** So, one thing that was pretty exciting to me. With
ChatGPT was their. Vision capabilities. So like you could put a picture in. And
it will have. Fairly. Sophisticated scene understanding, at least by what it's
able to write. For this kind of thing. So like I really like that kind of thing.
You guys, being that you have cameras and compute, I imagine, are well-placed to
do that kind of thing and have it locally because you have powerful compute.
Tell me about some of these newer AI techniques. If you're leveraging that all
or enabling them at all.

[00:50:41] **Bradley Dillon:** This is an area that we've been doing a lot of
exploratory research, talking, talking to some different folks and, you know,
evaluating it internally. Some of the use cases that we think are pretty
interesting is, is that if you have a, you know, you have a video, a bunch of
sensor data that's streaming off of a device that, you know, with, with a, you
know, with an API and or a simple, you know, natural language interface. You
could maybe ask you a question, you could say, like, describe what you're seeing
right now. You could potentially say, hey, I want to can you send me a
notification every time you see something like this? You know, you you see
somebody fall down now? Right now, if you wanted to create, say, a system that
detects when somebody fell, maybe you'd have to create a model or something like
that. But behind the tools you make it so that maybe you just say, hey, just let
me know. The last time in this video stream that you saw somebody fall down. And
so it makes it so that you could grab real time data, but it also makes it so
you could search the data too. So you could say, hey, I've got, you know, 24
hours of video saved. Maybe it's, maybe you're a construction site and you're
the safety manager and you say, can you, can you point me to the points in the
last 24 hours when, we saw something that was dangerous, that that was
happening, something where somebody wasn't wearing their safety equipment, you
know, something like that. And so I think that that's really interesting for us.
We do believe with the, you know, the cloud application layer that we have that
we can enable that type of technology pretty well. And we're kind of exploring
the ways that that can be, I guess we'll call it AI is a really meaningful step
in the journey to really democratizing, you know, computer vision, making it so
that something like that would be pretty difficult for an engineer to do
classically. Definitely. Where it could be something where. Yeah. I mean, any
anybody that's even not, not a coder would be able to, you know, grab some, you
know, grab, grab some cameras and just start to start doing some natural
language prompts and, you know, find out what's going on and set things up. So
it's definitely exciting, something we're exploring. There's some really
promising new companies and startups that are tackling this. I know, like a lot
of, latest crop of startups over the last couple of years have been founded
around, you know, working on this type of use case.

[00:52:57] **Audrow Nash:** Cool. Yeah. What a nice thing that is. I mean, I
haven't thought. Of it, but the ability to search data really quick, like search
video really quickly would be incredible. So if you could say, hey, take me to
the moment this is happening and it goes, oh yeah, yeah, here you go. That would
be awesome. I wonder, like one of the things that I thought was. Really cool,
and I built a little prototype of this for some side projects was you take an
image and then you have it select from a few app options. So it's kind of like.
Image. Does all of its thinking. And then it selects like one of a few options
which might be like drive a robot forward, turn around, pick up an object,
whatever. I feel like this kind of thing is very useful to just for like
prototyping stuff. Or even I mean, probably. They're real simple applications
that people could have, or even more sophisticated ones, that you could do with
this kind of framework.

[00:53:56] **Bradley Dillon:** Yeah, absolutely. I know that, you know, one
really cool video that's out there to say the, the figure AI humanoid and, you
know, it's looking at the table and it says, you know, what do you think you
should do next? And there's like a dirty dish and it's like, oh, I should
probably put the dirty dish and put it in the dishwasher. And so I think that's
really interesting when you think about kind of these behavior models, for
robotics companies that are working on kind of prototyping what's, what's
possible. And I think that's where that, that real time understanding of video
can, can be really useful. So that you'd be able to practice different prompts
based on the scene that you're seeing. What are the three next steps that you
could see that you'd want to take. And you know, a way that you can really start
to to learn. And what it really tackles is, is that, you know, robotics have
been used for decades in, in really think scaled environments, but they're very
controlled. Right. So this could be a, you know, say like, automobile
manufacturing plant. It's doing the same tasks a million times over and over. It
doesn't even need vision, right? It's doing it on a precision basis. You're
taking this item, you're putting it here, things like that. And when you go into
these unstructured environments, that's where it's of course really challenging
because the scene is always changing. It's it's navigating something that's
never happened before. It's a it's a scene that's never existed in all of
history because it's completely unique. And that's and that's where I think
that, yeah. Like I said, the real time, real time understanding could be really
interesting. I'm kind of prompting those next steps and and what have you.

[00:55:31] **Audrow Nash:** Do you, I don't really know. Well, but maybe.
Because you guys have been looking into it. Do you know much about how it is to
do these scene understanding tasks with video for this? Like I'm imagining.
Trying to use Transformers or something. Some AI technology on it was trying to
find features that are relevant and look at them over time. It sounds really
hard to me, but, it's also kind of magic. Do you do you have any, like, thoughts
on how feasible it is? Because right now, like OpenAI's chat GPT. I think just
as images, maybe it does videos, but, What what's kind of the state of the art
in language models with. Video or video models or something? Video, large models
or something?

[00:56:28] **Bradley Dillon:** You know, I use ChatGPT a lot. It's really cool.
I got these hikes yesterday. I was on a hike and I saw this footprint and I
didn't. Yeah, animal print. I didn't recognize it. I just took a picture and I
said, hey, ChatGPT. What? What do you animal do you think this is? And it looked
at and it said described it and it said, we think this is a deer and this is why
like, oh, it's so it's so cool. And it, you know, it does do it does do videos.
Well there it does. Well, what we've learned is that there's different or I
believe it does. Video of what we've learned is that there's different
techniques that the different companies are using to try to be able to do it.
The real question mark for us is whether we can now or in the future, have
hardware or could run on the edge and I think that what that could entail is, is
that, you know, right now the artificial intelligence, you know, purpose built
harbor that we have is primarily around doing inference. So, you know, you have
a model and it's just kind of inferring and operating, the what we've seen at
seen, but what we potentially could do is we could have, you know, let's also
enable like Chennai on the edge. And so that's where it's, you know, you know,
you know, generating something. And there's, Alec as it stands today, we're
probably for enabling something like this. It's probably going to be enabled
with, say, something that's done on the cloud. So that's really the kind of a
question that we have as we try to navigate this is, is that is this something
where we want to do that? Now when I use a when I did that, the example I shared
with ChatGPT that took, I think, you know, 30 or 45 seconds because you know
that that's you know, that that prompt is that it is run in the cloud or it's
processed somewhere. So kind of the question is, is like whether it's a, you
know, we're talking about like my latest smartphone or we're talking about like
our latest devices, is is it possible to be able to do that on the edge? Because
that's where our value proposition comes up, because then you could have it be
lower latency. That's where latency really matters, right? Is what what's a way
that you could do that in like a very real time basis versus something that
maybe would have more of a lag.

[00:58:35] **Audrow Nash:** Yeah I see so focusing on the edge, it's not, it's
not clear if it's in scope or. When it will be in scope because you never know.
I mean some of the models. Seem to be getting lighter and lighter, but you never
know if it'll be as sophisticated or if it'll be able to do vision related
things. I don't know how large any of these vision models are.

[00:58:58] **Bradley Dillon:** Yeah, it's exactly right. And so for for us, it's
it's all about like, what do we do best? And you know, for us it makes sense to
enable this sort of technology. If we can, we can ultimately, you know, maybe
not initially, but we know that we have a path or we can enable that on the
edge. Then that's where it becomes something that gets becomes really compelling
for us. And so that's the that's the main lens that we're kind of evaluating it
through. And then putting that aside like the the holy cow wow factor is so high
that test testing it out us is, you know, well worth it.

## [00:59:31] Targeting Industries for Innovation

[00:59:31] **Audrow Nash:** Yeah. Hell yeah. So one thing that's interesting to
me, especially with thinking about you guys having more of, like service or
where you're working with a lot of customers. Do you ever, like, I imagine you
come across a lot of, like, really. Good use cases that you're very well suited.
For. It's an interesting thing because I imagine if I was in a. Similar position
to you, I would be distracted by all the cool applications that are coming up.
And I would want to go run a startup or have something related to each like of
the like, really promising problems that you come across. How do you think about
this? And, I know you're working with the customers, but, I don't know. Just
tell me about all the cool domains. That you're coming in touch with. And, how
you think about it, I suppose.

[01:00:28] **Bradley Dillon:** So we have a lot of very spirited debates on this
topic, as you can imagine. And you would would it really? Yeah.

[01:00:36] **Audrow Nash:** We have the expertise. You have the technology, you
have the manufacturing. Sometimes it's like just if you were to run. With it,
you're in the best position to capitalize on it is what I would imagine.

[01:00:49] **Bradley Dillon:** Yeah. That's right. And so what it boils down to
is, you know what what what's our focus? What are the areas where we think that
we have, you know, an unfair advantage to be able to pursue them and scale up
with our clients and the industries that we work on today. I'll kind of put them
in a few different buckets. So one of them is, you know, kind of transportation
logistics and warehousing. And another one is industrial equipment and
agriculture, like I mentioned earlier. And then another area is like retail and
quick serve restaurants. And then kind of some final buckets is call it, you
know, construction and manufacturing and at any time in our journey we probably
could it could just have already picked one of those and just said, we're going
to ignore all the rest, and we're just going to get stuck in the narrowly
focused all in on this. And I will say that, like, the coolest part of the job
is, is getting to learn across all of these different cases. So, like,
selfishly, I'd be a little sad if we did it all in one area, but very agnostic
to to to it. And really it's about like if we think that our innovations can be
used most intensely in one area, then, then we want to focus there. So we do
have some spots where we are trying to kind of lean more into, because we're
seeing that our investments are paying off in the way that we want. And as we
look ahead, we're really trying to make it so that, you know, we we probably
have, you know, I'd say probably no more than three kind of concentrated bets.
And, and areas that we think that we can, you know, continue to get the most
traction. And so a lot of the first six years of our journey is kind of been
figuring out these different industries, figuring out how they operate, you
know, figuring out how our technology can help. And then as you look ahead to,
you know, knock on wood, hopefully call it our next six years, it's it's really
probably, been a bit more narrowed saying, you know, here's the like I said,
probably three, maybe like 4 or 5 match, but probably just a few industries.
We're like, yeah, this is where we want to go all and and focus the technology
to Mars.

[01:02:57] **Audrow Nash:** What are those. What are those areas for you. The
three areas you want to make bets on.

[01:03:02] **Bradley Dillon:** Well I, you know I share with you kind of the,
the main industries that we're in today and I think well without a doubt would
be, you know, be kind of one of those for sure. Or some of those for sure. So
I'd say any one of them, to be honest. Like we could go deep on it. I could
explain why. I think it could be like a very bullish case of like why we where
we could go after it. And I guess I'll, you know, answer today is saying that
like, we don't we we don't have three that we've picked yet. We were starting to
have, you know, really strong hypotheses on why, why, why we think some might be
better than the others. But don't have enough to, don't have enough, you know,
data and conviction to day to say, oh, this is the, you know, this is what we
know for sure. And to go all in on.

[01:03:47] **Audrow Nash:** Yeah. It's an interesting thing because I mean you
guys are well positioned. I just like the, the thing that I would think is it's
like a lot of companies. They'll build something general on their way to finding
something very specific. And then, then they go hard at the really specific
application where you have lots of growth potential. And then that growth gets
to fund to the more general again. Which is quite cool. So I don't know. I would
love to I would love to hear. You make a bullish case on maybe 1 or 2 of the
different areas that are somewhat like agriculture chair or, one of the other
ones that you were saying maybe manufacturing or I don't know, I just hear the
case on it.

[01:04:35] **Bradley Dillon:** Yeah, absolutely. Well, I'd say that the, the
areas that we have, our biggest customers were we were having the biggest
revenue gains. You know, one of them is in, security actually. And. Oh, I'm not.

[01:04:49] **Audrow Nash:** Surprised by that, actually. Okay.

[01:04:51] **Bradley Dillon:** Yeah, it's an interesting space and talk a little
bit more about.

## [01:04:54] Smart Security Screening

[01:04:54] **Audrow Nash:** Because also like, home security systems, I did a
deep dive, maybe a year or two ago, and they really suck. And there's a lot of
bad data privacy concerns with most of the leading ones, it seems. And so I,
have half been wanting to just build my own for this kind of thing. Like, how
cool would it be? You just have a camera pointing to something and it says, did
I leave the garage door open? Did I leave the stove on? And you have it answer
this kind of thing? But okay, I'd love to hear more about security. Yeah. This
one seems great to me.

[01:05:32] **Bradley Dillon:** Yeah, it's exciting for sure. So I'll say that
I'll. I'll talk about security in a second. The, another area where we're
getting a lot of traction is it's just kind of related to, automobiles. And so.
Yeah, you know, related to automobiles. We've done some stuff with, like, AI,
dash cams. We've done some stuff on, you know, calibrating some of the vehicle
systems, themselves. And in some of them on, you know, monitoring, observing the
vehicles, like license plate recognition. So that's another huge area for sure.
And then I would say that, you know, I do think that agricultural and industrial
equipment space has also been been really promising for us, the area that we
have not had as much traction, but we actually are pretty bullish on is like the
quick serve restaurant retail case. And to go back to the beginning, so the
security, we've traditionally thought that security was an industry to
potentially avoid. And in the sense that we're like, okay, what can we do that's
special here? That, you know, say home security systems or legacy systems can't
provide. And yeah, we've we found some, some really exciting opportunities where
we're helping and the kind of, security screening that would happen at things
like elementary schools, warehouses, stadiums, things like that. So this is
really high volume, high throughput security where, basically magnetic
technology is then fuzed with, you know, vision technology to make it so that if
a stream of people are walking in somewhere, you can, you know, the weapon can
be detected and tagged to an individual, and that person can be, can, can be
grabbed. You're the systems are kind of necessary when, if you want to get like
100,000 people in somewhere really quickly or you want to be able to get, say,
you know, a couple thousand people in school on time every day and you want to
screen them. You can't use like a traditional metal detector. It's just too
slow. So that's where like these kind of higher throughput in some cases is more
performant because you can be kind of sensitive to certain types of weapons.
That's that's where we where that's where we've kind of seen with that security.

[01:07:40] **Audrow Nash:** Interesting. Okay. Very cool case. For this kind of
thing. But not enough. Not compelling enough to make you want to jump ship not
jump ship, but like pivot a little bit. In this direction I guess, because then
it's finding you like you guys have been on the specific problem of making your
own hardware work really well and then, adding compute into it. So those have
all been difficult lifts, I imagine, for the team. And so this would be like
acquiring domain expertise, finding a good problem, finding a good market and
then everything else on top of that. So makes sense, but still cool. I wonder if
eventually you guys get bored ever with where you're. Where you're at, Go pivot
and make start ups around it or something for specific domains.

[01:08:33] **Bradley Dillon:** Yeah. We, you know, we've we've seriously thought
about, you know, having a, you know, kind of creating sister companies that
would tackle these specific cases. What's interesting is you get really industry
specific is yeah, it can kind of become a whole company on its own.

[01:08:48] **Audrow Nash:** It is. Yeah.

[01:08:49] **Bradley Dillon:** And so an example area could be say, the
military. And so in the United States, of course, there's been a lot of
investment kind of actually venture capital investment, which hasn't
historically happened that's gone into, you know, new, new generations of
technology past the military. And yeah, it's it's of course, pretty special. Is
that technology? It requires a lot of like, domain expertise. And so, you know,
the other things are these things are interesting, for sure. So, I mean, who
knows what what we'll we'll see how it plays out. It's going to be fun to watch
whatever whatever ends up happening that we do for sure.

[01:09:25] **Audrow Nash:** Yeah. You guys are in such an exciting spot. With
all of this. What do you think. So I mean we've talked a little. Bit about what
the future. Is. What do you think. Your future is like? Look, Sony's future is,
when you think of the next like 3 to 5 years, where do you hope you guys grow?

## [01:09:43] Growth Story

[01:09:43] **Bradley Dillon:** So we are, you know, six years deep into this,
like I said, but fortunately, we have we have a team of folks that are, you
know, young, hungry, excited, excited to, excited for the future. So, you know,
one of our core values is, is is kind of the tagline, creating the future. And I
think there's this there's this great quote I read in some, some book about the
history of semiconductors that, you know, said that the best way to create that
is to predict the future is to create it. And so definitely, you know, we
definitely kind of believe in that. We're we're very we're very heads down and,
and just this intense building phase. And so, you know, we think as we as we
scale up, we're, we're excited to be more than anything, like I said, doing
having an increasing kind of, you know, plethora of use cases that have gone to
really, really big scale. And so, so I think as you what's so cool, for example,
is like we recently were at CES, the trade show in Las Vegas, and there were
dozens of companies in booths that were using our cameras for various things.
And, and a lot of them there are folks who we never even heard of before. And
yeah, you know, that type of thing is really rewarding. So I think as a company,
we, you know, we do aspire to become the, you know, the de facto, provider of
artificial intelligence, you know, 3D camera devices. And we've really position
ourselves to be the, you know, the leading independent American provider of
that, which we're really, you know, really proud of. And so, you know, we just
we see the future is us just wanting to build on that success, become, like I
said, the, you know, the the go to spot where folks can, you know, from start to
finish, be able to, you know, tackle these, you know, computer vision problems
and yeah, I mean, I don't you know, it's not I don't think that none of us is in
a hurry to get, you know, whatever, whatever the end of this journey is, we're
having a lot of fun, and we're just. We. So I'm really excited every day for it.

[01:11:48] **Audrow Nash:** Yeah. I mean, the fact that you guys have grown very
organically. Like the Kickstarter campaigns in the beginning and then friends
and family funding and bootstrapping to where you are with a few rounds of like
angel investment. It's like it sounds like a fun journey. Like I don't know
better than, like we took a bunch of advanced investment. We're under huge
pressure to scale as quickly as possible. And, the runway is rapidly burning up.
This kind of thing, like, it just, I don't know. And then you're seeing all of
these really cool use cases. You're getting a lot of feedback from the community
where they're enjoying your sensors. I can imagine it's been a very fun ride so
far, and I expect it will probably keep being a really great one, too. I think
you're well positioned.

[01:12:36] **Bradley Dillon:** Yeah. Thank you. Yeah. I mean, we're, you know,
in some cases where we haven't done something that's, you know, necessarily
traditional and how and how, you know, we're able to scale the company. But
yeah, we're very fortunate that that's worked well the way that the way that we
have and and yeah, I mean, it's yeah, it's a, it's a, it's a cool. Yeah. It's a
cool spot to be. I mean, I will say that the startup journey is not for the
faint of heart. It has. I mean, it is literally like a roller coaster there.
It's frequently a Monday and it's like, gosh, this is never going to work. What
are we doing? This is, this is this is just this is not working out. And then,
you know, Tuesday comes around, we're like, oh my gosh, this thing's going to
the moon. This is so exciting. Oh my gosh. It's like gravel on gravel on tight.
This is a rocketship. So it's yeah yeah it's the ups and downs are intense. But
you know I, I personally wouldn't have it any other way for sure.

[01:13:30] **Audrow Nash:** Oh yeah. Do you have any specific stories around the
roller coaster. Like I'd love to hear anything for that.

[01:13:37] **Bradley Dillon:** Oh gosh. Whoosh. Yeah. There's. Yeah, there's so
many for sure. I mean I'd say like this week is Oh yeah. It's not like the, the
best examples, but I'll share it like it's just this week because, you know, it
gives you the idea that. Yeah, for me because hopefully I've already forgot what
the last ones are, because if I kept remembering vividly to about it. So we, we
actually, we actually won a very large order this week. And so it was, let's
see, it was a few million dollar order, that one. And I'm delivering all the
units this year. And it should we should scale up a lot from that from from
here. And it's with, you know, a global Fortune 100 company. Can't say the name,
but, you know, something we're really proud of, you're working on for a long
time. So that's like. Oh, yeah. Congrats for exciting. That's the big win for
the week. The big loss is we had a, we had an I won't say which government
entity, but we had an unexpected tax bill. And, it's funny, you know, we operate
around the world. We ship into 112 countries. You know, we sell product in all
50 states. We have employees located in several states throughout the United
States. We have employees and contractors in a dozen countries around the world.
And as a startup, there are, there are different government groups that, you
know, we didn't realize that we, you know, needed to be needed to do this or
that way. So we had an unexpected one this week where we have this tax bill and
it's five we'll pay. The tax bill is not not the end of the world. But it was it
was, you know, unexpected for us. And you know, of course, when you're, startup
where, you know, you're not yet profitable and you're not left yet, you know,
positive cash flow, you're wanting to be able to reinvest every single dollar
that you possibly can into, you know, hiring more people. So it's always
disappointing when you go, oh, shoot, we have to pay this tax over here that we
didn't realize we had to. So we can't hire somebody new. So that's, that's that
was kind of the low point. But luckily the high point overwhelmed the low point
for sure.

[01:15:40] **Audrow Nash:** Oh yeah. Yeah. Overall the week was a win.

[01:15:43] **Bradley Dillon:** Yeah. Exactly. Exactly. And yeah like I'll I'll
send it I'll set a tier, you know, pour one out for the extra employee. We'd
like to have hired and just hope that whatever, whatever government entity we
have to give that money to, that they are going to spend it better than us. I
guess.

[01:15:57] **Audrow Nash:** What a thing. Yeah. Taxes. So I'd like to just go a
little bit more. Like, I don't know, kind of random. Questions for different
things. Now. What are your thoughts on vision like cameras. Versus lidar or kind
of which application? Yeah, both are good for.

[01:16:23] **Bradley Dillon:** Yeah. So ultimately we're actually agnostic to
either technology. We are not trying to make a bet that says like it's all
vision all the way or all wired or.

[01:16:34] **Audrow Nash:** All, but yeah, totally.

[01:16:35] **Bradley Dillon:** And so we're we're more you know, as I shared
with you, we do have our first you know, lidar based camera, which is a time of
flight solution. And, you know, of course, also our devices have a lot of
cameras in top of other sensors. We we understand the arguments for, for both
cases, you know, we talk internally about the example being like Tesla who's
gone all in with vision and their thesis is, well, if a human can drive with
vision then, you know, why can't a computer drive with vision. Whereas others
like say Waymo that sky you know, so hey, we want every sensor we can get and
that's going to include lidar. What we see with our customers is, is that
there's some cases where a lighter based solution is better. And, you know, you
go, great, okay. We can we can support that. And then we see some kind of vision
can be better. I do think it'll be really interesting is, is that the economies
of scale with cameras have made it so that you have really high performant,
really low cost cameras. And like you, you mentioned there's like say, you know,
a thousand megapixel camera out there. You know, that's not the type of thing
that's needed for most commercial use cases. Conversely, with lidar, you know,
the prices have stayed, you know, stayed pretty high. But you do see that coming
down really dramatically. So I think over the next five years that's going to be
the biggest, change. And I think that's going to change the dynamics. You know,
this lidar versus vision thing. And I would be surprised if you know, once the
cost comes down low enough that, you know, say, company would end up adding
lidar anyway when you know, they can get it to get it at a low enough cost.

[01:18:14] **Audrow Nash:** Interesting. Yeah. That's I wonder I wonder if so it
say like Waymo. Deploys massively then that'll help light our get huge economies
of scale. Or some other companies say and then that might drive down the cost
tremendously.

[01:18:30] **Bradley Dillon:** Yeah. We're seeing.

[01:18:31] **Audrow Nash:** That would be really.

[01:18:31] **Bradley Dillon:** Cool. Yeah. We're seeing some new market entrants
that are, you know, have it scaled up yet but are saying that they have, you
know, new, new technology, new new techniques that make it so that they can do
it a lot cheaper on a night out there. So I think, I think that space is going
to be very deflationary, and deflationary, even for the normal scales that
electronics have. Which electronics of course, is, is has been very deflationary
space.

## [01:18:58] Chip Supply Challenges

[01:18:58] **Audrow Nash:** Definitely. Let's see. So another one, another
random segue. How you mentioned at the beginning 2022 and like all the chip
craziness, Tell me in the time of Luxonis into current day, and then also, I'd
love to hear your prediction of how it will be. How has procurement of the
chips. And different electrical components you need been over time?

[01:19:25] **Bradley Dillon:** It I'd like to say it's come easy. It has it.
There's there's still times where there's still times where in a, you know, a
bill of materials that we have for one of our devices, which is, excuse me,
depending on the device, maybe 50 to 150 items, there's still sometimes items
that trip us up. So every time when we're looking at our production plans over
the next upcoming period, we're still having to identify high risk items. And
we're needing to, you know, purchase ahead on them. And then we do have some
components that have painfully long lead times. So when one of our components
for a series for of hardware, it has a seven month lead time. Oh, and when you
think of the seven month lead time, you know, once we have all the components it
takes you know, call it about eight weeks to, you know, manufacture and assemble
them and get them ready to ship to customers. So that means is that we're
sitting here today and we have to predict what's our demand going to be like for
this device in nine months. And, you know, that is that is not easy to do. Yeah.
You have to you know, you have to just follow your instincts and hope and pray
that it's going to work out. So yeah, it continues. It continues to be pretty
challenging. And then as we look ahead, I think I think what's interesting, you
know, coming, for example, most recently at CES where I start Consumer
Electronics Show in Las Vegas, where you have all of the different chip
manufacturers that are showing off this latest and latest and greatest hardware.
You have a lot of them that are kind of more floating ideas, like, hey, here's a
chip that could do this, or here's a chip that could do that, and you don't know
yet. Like, what are the ones that they're actually going to be supporting. At
scale. So I think as you look ahead, it's going to be really interesting to see
how the pace of, AI hardware progresses and to, to see, you know, what are some
of these new market entrants that are going to kind of disrupt things outside of
like kind of the way you see big chip, providers and what are the, is it is it
going to continue to be this, like dizzying array of different potential options
or they're going to is it going to get us back a bit more narrow? In terms of
what's available. So that'll be, I think, as we look ahead, will be interesting
to see, as you have just a lot of players working, a lot of different stuff and
just so much I mean, things are moving so fast there. You back to you honestly
can't keep can't keep off every, you know, every few weeks there's some crazy
new announcement on on some new piece of hardware.

[01:22:03] **Audrow Nash:** Yeah for sure. Very interesting. You mentioned high
risk items. Is there any like theme or pattern around the items that are.
Typically high. Risk, in your opinion or in your experience?

[01:22:19] **Bradley Dillon:** It sometimes seems random. So a component that
trip to said recently was an LED and a light emitting diode. And it was a to us.
Would we pick the design? It was available component. It seemed pretty standard.
It turned out that there's basically only one manufacturer that was making it.
They had an issue. And, you know, boom, it caused, you know, I think it was like
a four week delay or something like that. So sometimes it's really random. It's,
you know, it's our job to try to not let those type of situations come out of
nowhere on us. I will say that the things that were tripping folks up, you know,
back in 21 and 22, things like memory and storage, that area has gotten stable.
Where there's there's there's a lot that's available and, and yeah, I think for
us on the high risk components, it's really more a function of who the actual
like upstream manufacturer is. What are the, you know, like what are the
available substitutes for it. So what tripped us up with the LED was, is that
there wasn't actually any substitutes. And so other areas of our components, and
a lot of times what we do is we actually create multiple designs of our product
that can handle different variants of a very similar, components. So that way
over time if one goes out of stock, then boom, we can just we can just go in and
you could swap in the other one. So it's really about ones where we go. There's
no other option for this component. We have to have it. And then you know how
how many options do we have available for it. And if it's very few or just one
then it's flag. Say shoot. And we you know basically been our finance department
says, okay, you need how much cash to de-risk this and you have to make a
business decision of, yeah, you're going to go ahead and lay out some cash so
that these components can sit on a warehouse somewhere so that you, you know,
make sure you have reliable supply for your customer.

[01:24:09] **Audrow Nash:** Yeah. That's wild. What a thing where you have to
have it instead of like just in time, you end up having a warehouse full of
components. You need to de-risk. And that's, it's an interesting time that and I
think a lot of businesses are doing that more generally to make sure that they
can keep delivering even if, components are not being reliably available.

[01:24:32] **Bradley Dillon:** Yeah. That's really interesting. Yeah. And I'd
say from a procurement standpoint and just sort of, you know, hardware in
general, you have to pick what you're prioritizing. And so for Luxonis, there's
two things that are top priority. It's quality and it's having supply. And so
we're at a stage as a company that not having supply is not an option. We have
to be stock with our components. And quality is the other piece where, you know,
the stuff that we deliver has to be really high quality. The things that we
sacrifice for that is sometimes we pay higher cost, and that's where sometimes
we procure on the spot market rather than something being planned, for example.
And we tolerate a higher cost, so long as we can make sure that we're, you know,
have it having have a great quality. And we, we, actually have a reliable
supply. And we also sometimes we have to tolerate things being not quite as
fast, so long as, you know, they're not, they're not too much delayed. So it's
interesting, you know, at some point later in the journey, we'll actually care
about cost, but that that time has actually not come yet. For us to try to
optimize for that.

[01:25:37] **Audrow Nash:** Yeah. And I hope you. Build in a healthy margin for
everything too. So you have a nice buffer, like of let's say, you say you have
to pay a little more for some components. I hope that's priced in for this kind
of thing too. But yeah, it makes sense. You guys are. In very much a scaling
like get everyone using it, refine the ecosystem, thing so they can make lots of
good stuff with what you're making, in my opinion, or in my estimation of where
you guys are. Yeah. It's coming.

## [01:26:06] Future Sensor Additions

[01:26:06] **Bradley Dillon:** Yeah. We do, we do leave room for it. So, for
example, I had a call today where, yeah, one of our engineers said, hey, there's
what we think can be a more performant component on the the bill of materials.
It's going to add like $5 a cost with this product. Should we do it. And the
answer is like yes, yes. It's going to like our it's going to help our customer
win. So like the answer is yes. And you know, well, what we do first is we say
okay, let's implement that and then we'll go later, you know later, later on
we'll try to figure out how to make it so that it doesn't actually cost us, you
know, five extra bucks.

[01:26:38] **Audrow Nash:** So you mentioned earlier that you like adding
sensors. To your, your systems. What do you think will be the next like, do you
have other sensors that you're considering adding. And what. Are some of them.

[01:26:55] **Bradley Dillon:** We've been exploring some options. So things that
we've discussed or things like that based cameras. There things like the other
things like structured light in other cases, they're about taking one of our
current sensors and just making it a lot more performant or capable. So it could
be having like, you know, a higher resolution. It could be that maybe it has a,
you know, a bigger, you know, a bigger range of things that it can do. And yeah,
we don't we actually don't have we're just in the exploratory phase right now
because we've been focused on getting the, you know, the thermal, option and
the, the, you know, the light, our time of light option out there. And so, yeah,
we haven't set our next plans yet, but that's some of the stuff that we're
exploring.

[01:27:42] **Audrow Nash:** Yeah. Actually tell me a bit about the thermal
camera because that opens up a lot of different. Applications I would expect.

[01:27:49] **Bradley Dillon:** Yeah it does. So some of the cases that our
clients seem to be really excited about some of them are in oil and gas. And so
it can be placed somewhere and it could detect like a leak, say something
that's, you know, hot or cold, you know, that a human wouldn't be able to see,
and it can also in that type of a case, in some other use cases, it can see that
equipment is operating at the right temperature. So it could see if maybe a
component is overheating the thermal sensitivity is I think about plus or minus
two Celsius. So you can see it with pretty pretty good accuracy. And and then
some other things are for example in the agricultural use case, we had a
conversation with the customer that's redoing indoor farming. And they're able
to use it to be able to monitor their crop. And then there's been also some
interesting use cases. We talked earlier about elderly care. And so there's been
some over elderly care where the thermal sensor could be added to vision. And
you would be able to, you know, tell things, at a higher performance rate of
things like if there's been a fall or something along those lines.

[01:28:56] **Audrow Nash:** Oh, interesting. Yeah. Because I think the thing
with thermal cameras. It makes setting people very easy cause it's super hot
outside, like indoors, say, where you have air conditioning because you have
that big differential between the person and, the rest of the environment.

[01:29:14] **Bradley Dillon:** Yeah. So we actually at, see you in Las Vegas.
Like I keep mentioning, we had a demo of the thermal camera and it's yeah, it's
interesting because the it's people's skin that just really, you know, you
really see it light up because it's so, so warm. And the, you know, things like
it's interesting, you know, you're wearing glasses. So when people wear glasses
it looks like they kind of, you know that the temperature profile is so
different. So it looks like they're wearing goggles. Like it looks like they're
like Robin from Batman and Robin. Yep. So yes, it's Yeah. It's interesting
there. So when, you know, kind of, if so thermally like if somebody is wearing a
short sleeve shirt and shorts, you know, it's actually kind of easier to detect
them than if, say, they're wearing, you know, jeans and a hoodie.

[01:29:54] **Audrow Nash:** And it has absolute.

[01:29:55] **Bradley Dillon:** Yeah. Exactly.

[01:29:56] **Audrow Nash:** Yeah. Yeah. Very funny. Yeah. Thermal cameras. Are
awesome. That's so exciting that you guys are, making it more and more
accessible to people. Because, like, I, I used, Leptin. Or was. Something like
that. One of those in the past, and. It was. Okay. And I think you guys have
probably made it even nicer for everything. So super cool.

[01:30:21] **Bradley Dillon:** Yeah, we'd like to hope so. We've learned some
stuff along the way. So there's actually some like Itar regulations, which is
like international trade of arms control of arms regulation or something like
that. And it turns out that, you know, things like a thermal camera, you can't
export to certain places. So we've not had to do this normally with our
products, but we've actually had to limit the export of it to NATO plus
countries. So it's NATO countries plus a few others that are kind of in the good
relations. So we've had some angry customers say like, hey, why can't you ship
that to our country? And it's like, no, this is a hard no. You know, we've we,
we we consulted with respect security. We got an official decision here and we
absolutely have to comply. So it's been interesting for us because we haven't
normally had that type of restriction. But you know we've learned that yeah it's
it's you know those regulations are in there. You know, they're in place for a
reason. So we've learned a lot in that process.

[01:31:20] **Audrow Nash:** Yeah. That's wild. That's not something you normally
think about but interesting. Yeah. You then have to comply with them. And I.
Guess it's for military applications. Maybe you can. See people at night or. I
don't know.

[01:31:34] **Bradley Dillon:** Why do you think thermal.

[01:31:35] **Audrow Nash:** Is not allowed or has these items, required months
or. I don't know, limitations or.

[01:31:44] **Bradley Dillon:** I don't know, I think I think you, I think you
described it correctly that there's some applications related to military or
maybe more nefarious activities that that type of technology would work on. And,
you know, we're we're not we're not working on anything that's related to that.
However, you know, our, our our device can you know, it's.

[01:32:03] **Audrow Nash:** Could in theory. Yeah. Yeah.

## [01:32:04] Luxonis Resources

[01:32:04] **Bradley Dillon:** It's an open it's open playground. Right. So you
could do a lot of things with it. So, you know, for, for whatever reason those
regulations that were were put in place and, you know, it's, yeah, it applies to
kind of a lot of that type of technology that we kind of learned about. So
there's different sensors that are out there that we say, you know, that those
kind of it's our regulations are in place for. And so, you know, it's
interesting that, the resolution of the thermal sensor matters for evaluating
that. The hertz, the number of frames per se frequency matter, the frequency. So
yeah, it's it is interesting to understand that because there's, you know,
depending on those knobs over, you know, whether there's restrictions or not.
So, you know, it's been interesting to learn about that.

[01:32:46] **Audrow Nash:** Definitely. Okay. Now, so for those who have
listened or watched and are curious and wondering. How to get started with
Luxonis cameras and devices. Where should they go? What kind of resources do you
have for them? Where would you point them to?

[01:33:04] **Bradley Dillon:** Yeah, absolutely. So our products are really easy
to purchase, really low priced. So we have cameras starting in $99. And if you
go to shop dot locks on HSN.com, you can order them. And like I said, we shipped
in 112 countries. So around the world and for, you know, getting started with
you know, we do have a lot of, software details that are available if you go to
our website works on smart comm, you also have like a, you know, a GitHub as
well. And one thing that's great to kind of brainstorm different ideas gets some
get kind of the creative juices flowing, you know, figure out if you think that
that technology can be used for this or that. We actually have a chat bot. It's,
you know, ChatGPT for power that has been, that, you know, passes through all of
our documentation, all of our forum posts, and it's it's incredible. So it's the
chat that works on this.com and you can say, hey, this is the application I'm
working on. You know, what camera do you recommend based on this application? Do
you think it's possible? Would this be feasible? Would that be feasible? And
then later on, if you're working on developing something, if you're running a do
a blocker, you want to learn more on something you can ask. And what's so great
is it's way more patient than any engineer ever will be. So the 20th time you
prompt it, it's just as plentiful and happy to answer your questions as the as
the first. And it's actually way more creative. It comes up with stuff that I
never would. And what's also nice is you don't have to be embarrassed that you
ask it questions that you maybe would feel weird with the human. So for me, I
asked some of my dumbest questions I can think of to it because. Because I know
that if I asked it to one of our engineers, they would, you know, they they
would maybe be annoyed by it. So that's where I want them to, to, to kind of
maybe get started too.

## [01:34:48] Outro

[01:34:48] **Audrow Nash:** That's awesome. And so, what would you wrapping up
for all that we've talked about, what do you hope our listeners. And watchers
take away from this whole interview?

[01:35:00] **Bradley Dillon:** Well, I think from a broad perspective, I think
that it's a really exciting time to get to see this technology used across these
different industries and use across these these exciting use cases, getting to
see something that used to be science fiction and become reality is, you know,
really inspiring and makes it so that it's a, it's an incredible it's incredible
to be a part of this would be part of this wave and be part of this journey. You
know, we at Luxonis we we love we love the community. Yeah. We love our users.
And so if there if there's ever anything that you want to chat about, feel free
to reach out to me. Reach out to our community. And, you know, I hope everybody
enjoyed the lesson.

[01:35:42] **Audrow Nash:** Oh yeah. Alright. Thank you Bradley.

[01:35:45] **Bradley Dillon:** Thank you.

[01:35:46] **Audrow Nash:** Bye everyone.
