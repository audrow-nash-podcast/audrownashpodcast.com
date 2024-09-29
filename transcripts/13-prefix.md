[00:00:00] **Audrow Nash:** Hey there, robot enthusiast. Welcome to the Auto
Nash podcast. Today we're trying something a bit different. We've got a video
demo packed episode that's perfect for those who love robotics and are tired of
dealing with cumbersome package management.

Joining me are Wolf Vollprecht, the founder and CEO of Prefix.dev and Ruben
Arts, who's a software engineer at Prefix.dev. They're here to talk about Pixi,
a package manager that aims to make your robotics development life easier. If
you are a ROS developer or just someone who's interested in learning more about
how to streamline your workflow, this episode is for you.

We'll dive into the motivations behind Pixi, how it works, and even get hands-on
with some demos. So let's get started.

​

## [00:00:50] Introduction and Guest Introductions

[00:00:50] **Audrow Nash:** Hi Wolf. Hi Ruben. let me start by having you guys
introduce yourself Wolf. Would you go first?

[00:00:56] **Wolf Vollprecht:** Definitely. Thanks Audrow for having us. I'm
Wolf, I'm the founder and CEO of Prefix.dev and also one of the initiators of
the Robo Stack Project, which is partially why we're here today, to talk about
Pixi, but I'll.

[00:01:11] **Audrow Nash:** Hell yeah. And Ruben, wanna tell me about yourself?
Introduce yourself.

[00:01:17] **Ruben Arts:** you. I'm Ruben. I work at Prefix. I previously worked
as a software developer for a robotics company where we experienced a lot of,
deployment, problems that we had to solve. And, going from that, I got some
experiences and joined prefix to, to make it even better.

[00:01:38] **Audrow Nash:** Oh yeah. And we're about to learn what Pixi is and
what Prefix is doing.

## [00:01:44] Motivation Behind Pixi

[00:01:44] **Audrow Nash:** So Wolf, would you tell me about the motivation?
Behind Pixi.

[00:01:52] **Wolf Vollprecht:** For sure.

[00:01:53] **Audrow Nash:** just in general, what problem are you solving? Why
is this a big deal?

[00:01:58] **Wolf Vollprecht:** yeah, so as developers, we're all needing
software to build our development environments, right? And it's been pretty hard
to do that consistently on a cross-platform manner. And Pixi is package manager
that aims to solve this issue. So makes it really easy for your projects to set
up the dependencies and packages and things that you need, and then make it very
easy to run those too.

So really the vision for Pixi is to be like the missing companion to git where
you git clone a repository, and then you can do something like Pixi Run Start,
and it would set up everything, all the dependencies, and run the project and
maybe do some compilation, run some cmake, run some whatever, Python and just
work.

That's the big goal.

[00:02:47] **Audrow Nash:** Hell yeah. And so with that you get, you mentioned
CMake and Python and things like this. You're getting cross language support,
which is really cool. And you are focusing mostly on robotics. I'm sure there's
plenty of other use cases for this. but tell me about what this is a thing
that's needed in robotics.

Maybe Ruben. 'cause I know you have a lot of experience with this.

[00:03:09] **Ruben Arts:** Yeah, so one of the biggest problems we had to tackle
is that you are dealing with both the ROS Index, software stack. You're dealing
with apt, you're dealing with, PIP for some things, and then building that
together with something like colcon or catkin for those coming from the ROS 1.
And doing that all together is something that you have to learn and something
that you have to teach your colleagues if they come in with a not non ROS
background.

So we really went into like how we're gonna make this easy, how we're gonna make
this fast, and how we're gonna make this, into a deployment workflow. Because if
you develop robotics, you also need a wait to get it to the customer and make
sure you can update it. So from that angle, we tried to figure that out and we
found a solution in the Conda world, which is what we're building Pixi for now.

[00:04:04] **Audrow Nash:** Oh yeah. Okay. Now. So I feel like the motivation is
clear. We wanna distribute robotics software, and make it easy. So you wanna do
it on different operating systems. It's been very painful historically. Let's
make that better. it uses lots of languages. That's been difficult. Typically,
let's make an approach that works with all this, all these different languages.

So let's get into kind of the meat of what this is and how to think about this.

## [00:04:32] Understanding Package Management

[00:04:32] **Audrow Nash:** And I think it starts probably with package
management. would you tell me a bit about the parts and package management?
let's go to Wolf.

[00:04:41] **Wolf Vollprecht:** Yeah, so for sure. So package management is
something that I've been dealing with for the past five years, and the idea of a
package is, a software package is just an artifact, like a tar ball,
essentially. sometimes it's compiled, sometimes it's not compiled, but we are
dealing with compiled packages, so binary artifacts essentially.

And then the rest of the package is just on metadata, what's the name, what's
the version, what are your dependencies? And dependencies are important of
course. yeah. And then a package manager is just a tool that makes sure that,
you get all the packages you need, install them in the right order, and have the
right versions that you want.

And, Pixi is basically one of those package managers. And Pixi operates on
packages that come from the Conda ecosystem. And Ruben briefly mentioned it, and
Conda existed for a long time before us, basically. and so it, there are already
quite a few packages available and that's what we're building on top of.

[00:05:39] **Audrow Nash:** Okay, so Conda is where all the binary files that
you would execute on your computer for your specific operating system live. and
Pixi is a way of getting those in a nice way. what are the problems that Pixi is
solving to do this?

[00:05:58] **Wolf Vollprecht:** Yeah. we, so Conda historically is implemented
in Python and we completely rewrote everything in Rust as you do as a startup.
And, we made it much faster, of course, and everything is like thread safe and
you can do things in parallel that you could never dream about before. And
that's enabled by choosing Rust, I would say.

and then on top of that, we also, come in with a different vision. So Conda has
one way of working and we have another way of working. It's a bit like poetry
and pip, let's say. Where we are trying with Pixi, we're trying to have, some of
the modern package management, ideas like, having a log file, having a single
source of truth for all of your dependencies in a Pixi toml file.

And, integrating that very well into one like nice CLI interface that the user
can use. And so lock files are really important to us, for example, and we have
taken great inspiration from the cargo world to design our interfaces.

[00:07:10] **Audrow Nash:** Okay. Let's see. okay, so you're building a very
nice command line interface, the CLI, for doing this. You're managing a lot of
the, like the parallelization and things you can do that they couldn't do in
Python, and you're doing it in rust, so it's super fast. and then. One of the
things that's interesting to me is the different language support, I guess maybe
cargo supports that out of the box just with the, as long as you can make it
into a binary file or how is that included?

I,

[00:07:46] **Wolf Vollprecht:** I think you can say that, but Cargo doesn't
really tackle the, really the installation piece of software development. Like
you can do cargo install, but it will actually build everything from source,
which will take a long time and stuff like that. And in our world with Pixi,
like we deal with pre-built packages.

So installation is like very fast, as fast as you can download the

[00:08:12] **Audrow Nash:** them in the right

[00:08:13] **Wolf Vollprecht:** we just put them in the right spot and we have
like intelligent caching and whatnot.

[00:08:17] **Audrow Nash:** Ah, okay. So as a little more background, cargo is
rusts package manager, right? Is that

[00:08:24] **Wolf Vollprecht:** That is correct. So cargo is very much rust
specific. You can do some like C stuff, but it doesn't install a C compiler for
you. You have to get your C compiler from somewhere else and whatnot.

[00:08:34] **Audrow Nash:** All the things. Yeah. Okay. And so one thing I
noticed when you were showing me this before is, so cargo is really nicely set
up in my opinion. I love Rust and I love, like cargo is just fantastic. And it
does a lot of the lock files that you were mentioning. So you basically
constrain your, dependencies to be specific versions.

So you know it will work when you load it, which is really nice, especially
coming from like the Python world. but as you said, cargo it, when you download
a GitHub repository of, rust Project, it installs everything by just compiling
it effectively. is that what it's doing? It's not, grabbing artifacts, it's
grabbing code and then turning it into artifacts

[00:09:22] **Wolf Vollprecht:** is what it's doing. Yeah.

## [00:09:24] Challenges in Robotics and Pixi's Solutions

[00:09:24] **Audrow Nash:** Okay, so you, because robotics, we have a lot of
software. It would take forever to rebuild the whole ROS stack every time you're
trying to do anything. or even if you're just getting started. and you need a
lot of compute to do that, and it would take a long time. It's much easier to
just send these binary files for the specific operating system that you're
using.

and so you had to solve that a little bit differently with Pixi?

[00:09:53] **Wolf Vollprecht:** we're doing is I, wanna go one step, back. so
conda is like the package format, but then there are different distributions of
conda packages. And the one, the two distributions that we are related with is
Conda Forge. And Robo Stack and these distributions, they build the packages and
we are trying to build packages that are as compatible as possible with like
pretty old machines actually.

and so you can install the packages that we're building and conda forge and robo
stack with machines that are like 10 years old and have like old CPUs because
we're making sure that we set the right compiler flags and stuff like that to
build, executable binaries that are like very compatible. And the only thing
that we need from the host system usually is like a version of let's say glibc
on Linux and some Mac Os, SDK on Mac os, et cetera.

But that's like technical details. But the thing is like you get a binary
package that you can install rapidly on your computer and imagine you would
have, like a room full of students and everyone would have to build ROS from
source that would. Would be pretty annoying and would take a long time and
everyone would probably have some pretty, yeah.

Annoying difficulties.

[00:11:15] **Audrow Nash:** Yeah, I was at, ROSCon last year at a workshop and
everyone was trying to download the software for the workshop at the beginning
of the workshop, and it was on the hotel wifi or a conference venue wifi. And it
was a total nightmare. And it was supposed to take a very, they budgeted a very
small period of time for everyone to be set up, and it took like hours, like it
took like half the workshop to get everyone set up, which was nuts.

Like the whole day workshop took like half of

[00:11:44] **Wolf Vollprecht:** yeah,

[00:11:45] **Audrow Nash:** Um, that's a big pain.

[00:11:47] **Wolf Vollprecht:** that is exactly what we had. we've had people
use Pixi at workshops before, not specifically for robotics, but it's usually a
pretty good success.

[00:11:57] **Audrow Nash:** Yeah. And so jumping not exactly ahead. Wolf, you
and I have talked before. at length. And one of the things that I thought was
really clever about the thing you guys are doing is, so in the way we do things
now in ROS, it'll require a specific version of CMake or some other software
libraries and these ship with the operating system.

So we are very, we use Ubuntu 2204 and that ships with this version of CMake and
that version of something else. And we use those system dependencies. And that's
nice because we just say, you use this operating system and it will, you don't
have to worry about installing all these things. or you just install the default
one that APT is pointing you to, But one thing you're doing is you make it so
that you download a binary for the dependency that you have, which might be c
make when you need it in Pixi, and you're leveraging what Conda does already
because all these exist and are maintained by other people than you.

You're just grabbing the appropriate ones. And to me, this was a very, clever
approach and made it so you didn't have to do a lot of things, but you get a lot
of crosss platform compatibility because you're just downloading the resource
you need. Is that correct? I'm sure I didn't say it all correct.

But, what

[00:13:28] **Wolf Vollprecht:** that, yeah, no, I think that's a very good
example. right now, if you want to get CMake, let's say, in a crosss platform
fashion, like I wouldn't even know how to do that outside of the conda ecosystem
because on Mac Os you would maybe use Brew on, Linux, you would use apt get, or
DNFI don't know what, and on Windows maybe Wing it.

I don't know if it even has cmake, right. And, so we are working on top of that
ecosystem that's called Conda Forge. And that is like 20,000 git repositories
that are running, package bills in CI pipelines. And over 5,000 individuals that
are maintaining all of these packages. and they are maintaining cmake, they're
maintaining meison, they're maintaining Python and c plus compilers, et cetera.

So all these low level stuff, like we have a big community that is already
helping us with building it. And then what we are setting, what we are putting
on top of that is the robo stack, which is like the ROS specific packages that
we are building out.

[00:14:30] **Audrow Nash:** Yes. So tell me about Robo Stack with this. So what
is it at a high level and, how, does it work? how do you manage the artifacts
you build from it? And how does all the, that work?

## [00:14:43] Robo Stack and crosss-Platform Compatibility

[00:14:43] **Wolf Vollprecht:** Yeah, so the idea of Robo Stack is to basically,
take the two ideas like the ROS distributions and the conduct packages and then
merge them together somehow. And what we have is, we have CI pipelines that are
building these thousands of packages that exist in the ROS Universe, into
conduct packages.

And, we are leveraging, one thing that's really nice about ROS is that you have
pretty good metadata. So every package comes with a package XML, it comes with a
cmake, usually, et cetera. And like they have a very nice, infrastructure to
build Ubuntu packages. And we are doing something similar. We have our own
infrastructure that's a bit different, that is automatically, converting the
packages from ROS Distro, to the Conda format and then running it through CI to
build everything using our tool chain.

And so you have I wouldn't wanna say 80% maybe on Linux of packages available in
Robo stack repositories. And it's also, we try to make it very easy to
contribute and, add new packages. Let's say if you're missing something, we have
every, we try to automate as much as possible and ROS infrastructure is making
that possible.

[00:16:04] **Audrow Nash:** Yeah, it's very clever. This was another thing when
we talked last, how you guys are leveraging the existing ROS infrastructure to
make it so you don't have to build the jobs again, and you also get a lot of
metadata or maybe you do have to build the jobs, but you get a lot of metadata
from the jobs that are set up on the ROS 2 build farm, for

[00:16:24] **Wolf Vollprecht:** we do have to build all the packages ourselves
with our compilers. And we also have to do that for Mac and Windows, which is
like there, like I think Mac isn't supported really anymore and Windows is

[00:16:37] **Audrow Nash:** saying by ROS 2?

[00:16:38] **Wolf Vollprecht:** by ROS. Yeah,

[00:16:39] **Audrow Nash:** We, it's a tier three, so it's from source. but no
one guarantees it's working. So from the official ROS, I don't know, like from
open robotics, open source robotics foundation, we don't guarantee it's working
on Mac. so yeah. You're saying bad, but it does work with your, with

Pixi, Or most things

[00:17:01] **Wolf Vollprecht:** Most things work pretty nicely actually.

[00:17:04] **Audrow Nash:** I, hell yeah. And so you were saying, I, just to
make it clear what you were saying earlier, you were saying about 80% of the
packages that are available on Linux are available on other operating systems
with Pixi. Is that correct? Did I

understand

[00:17:20] **Wolf Vollprecht:** not quite.

[00:17:21] **Audrow Nash:** Okay.

[00:17:22] **Wolf Vollprecht:** I think a good chunk of packages, from ROS are
available on Linux, but then a different subset is available on Macs and
Windows. On Robo stack. so it's not, equal because sometimes, sometimes you have
things that are very Linux specific. Sometimes you have packages that just don't
build on windows for reasons, and we would have to go and patch them and things
like that.

we do that for some of them. and we also try to upstream patches from time to
time. but a lot of, like one, like a lot of people don't really care so much
about Windows as we do, in the ROS world, I wanna say. and testing is not as
widely, done. And sometimes the MSVC compiler has different bug than the GCC
compiler, et cetera.

And so

[00:18:11] **Audrow Nash:** I know. Yeah. It's so funny. For sure. Okay, so you
have, I just wanna see if I understand everything. this will be a real test to
see. So we have Pixi, Pixi is a package manager. Pixi makes it so you can
download pretty arbitrary code artifacts, but it's very useful for robotics. you
have conda, which is metadata, that you have four packages that make it very
easy to, have some artifacts, but then have it very clear what it depends on for
this kind of thing.

Then you have Conda Forge, which is a place that a lot of like operating system
level dependencies, like CMake are stored and the community maintains that and
you can put more things there. And then you have Robo Stack, which is a very
similar to Condo Forge, but for ROS packages. so it's basically a big list of
all the artifacts that you have access to and probably where they work.

is that correct or where am I wrong?

[00:19:19] **Wolf Vollprecht:** That's a very good summary. I.

[00:19:22] **Ruben Arts:** That

[00:19:22] **Audrow Nash:** Okay. I just want to make sure that I'm there.
Ruben, did you have anything to add?

[00:19:25] **Ruben Arts:** No, that, that works. That.

[00:19:28] **Audrow Nash:** Okay. Hell yeah.

## [00:19:30] Prefix and Business Model

[00:19:30] **Audrow Nash:** and then so the next thing that I wanna see before
we get into our demos is I just wanna talk about Prefix. so Pixi, the way of
downloading arbitrary artifacts that's really useful for robotics tasks is
maintained, built by you guys at Prefix.

Let's see, Wolf, will you tell me a bit about prefix and then I'd love to also
get into the business model and just all the details about you guys real quick.

[00:20:01] **Wolf Vollprecht:** Yeah. So Prefix is a small company. We're six
right now. It's a startup. we have some VC backing, let's say. and, we are
working on package management in general, not only for robotics, but also for
like data science or essentially any other applications where you need packages
and, yeah.

we've been working very hard on building out a platform and Pixi is our open
source tooling. So what we're doing currently is build the open source tooling
that everyone hopefully will love and use and it's supposed to make dealing with
conduct packages so much better than it ever was. and that will be like, it is
100% free.

We are like total open source people. but, obviously what we're trying to do is
build an awesome platform as well where you can like, deal with packages and
build some enterprise products that are interesting, like security stuff like
CVEs package signing. Getting, packages that are like signed by an entity like
us, for example, like a trusted sort of minimal distribution of your core
tooling that you wanna make sure that you, is secure and, safe.

That's something that we are like working towards, but we are not there. And
right now we're working a lot with the open source community on getting better
packages and yeah, just improving the overall ecosystem.

[00:21:37] **Audrow Nash:** So are there, I'm sure that there are. but what,
companies are similar in business model? Is it like a Red Hat or,

[00:21:47] **Wolf Vollprecht:** yeah.

[00:21:48] **Audrow Nash:** like what would be a fair comparison to like the
model that you guys are trying to achieve?

[00:21:55] **Wolf Vollprecht:** I think like there are definitely some,
companies that are basically in the Linux space that are. Making money out of
software packages, canonical Red Hat openSUSE. and then you have a new company,
for example, that's called Chain Guard. They just raised a series, I don't know,
B or c 120 million.

So we are not at that stage yet.

[00:22:16] **Audrow Nash:** Wow.

[00:22:18] **Wolf Vollprecht:** but we are to some degree generalizing ideas
that these other companies have, right? Like we don't only deal with Linux
packages, but we also deal with Mac Os and Windows packages. And so there is a
pretty big market for Windows people that is often overlooked.

And so I think there's, 80% of developers are using Windows and then don't have
a good package manager. So that's, something that we're trying to fix.

[00:22:45] **Audrow Nash:** Yeah, very much. Okay. And I love the idea, I am
often programming in several languages, rust, TypeScript, Python, c plus, and
sometimes projects will have multiple of these languages all in the same
project. And so the idea of a simple setup is so appealing and just, I know it's
been such a pain for different ROS, for just general ROS development, so I
really like what you're doing.

What's, for the, let's see, for, you mentioned that you are venture backed. did
you have, is it like a seed round or did you have, like, how would you classify,

[00:23:23] **Wolf Vollprecht:** we are, we are at the seed, stage, let's say.
Yeah, that's correct. So we have two VC investors that are believing in our
ambition, and so yeah,

[00:23:36] **Audrow Nash:** Hell yeah. And then, I wonder, are you're currently
not ren re revenue generating because you're focusing on community buy-in at the
moment. Is that correct or I

[00:23:48] **Wolf Vollprecht:** focusing on community right now. Yeah, we are.
just, there's. So Conda at its core is good, but there's a lot that we are
currently fixing. And so we are very happy that we have investors that are also
supporting this mission of really trying to really, do the right things in the
ecosystem and making the package management experience nice.

And also the package building experience, which is another thing that we are
like really investing into right now. So that's current that, that's like step
one for us. And then step two is like the rest.

[00:24:29] **Audrow Nash:** Yeah, for sure. what do you, where are you guys
located? I think you're remote. and where are your investors located?

[00:24:38] **Wolf Vollprecht:** Yeah. So I'm in Berlin and Rub is in the
Netherlands and we have a team in the Netherlands, let's say, and two people in
Germany right now and one in Moldova. And our investors are like. American
German mixture,

[00:24:55] **Audrow Nash:** Oh wow. You said two investors, or two? Two
investors. So one, one American, one German. Hell yeah.

[00:25:01] **Wolf Vollprecht:** yeah.

[00:25:03] **Audrow Nash:** Okay, that's awesome. very happy to hear that. And
happy you found some good investors 'cause it seems like a really nice mission.
So with that, Ruben, I know you'll be talking a lot in the later parts when we
do demos and things, but do you have anything to add or Wolf also, if you have
anything to add before we jump into, I.

Demos.

[00:25:25] **Ruben Arts:** I think Wolf explained it pretty well. I, I. Ex
having so much fun with the fact that we are open source and we're focusing on
that part so hard right now. So it's just an amazing experience, would advise
everyone to do that with their company. From a employee standpoint, it's an
amazing experience.

[00:25:46] **Audrow Nash:** yeah, It's nice being open source. hell yeah.

## [00:25:50] First Demo: Setting Up Pixi

[00:25:50] **Audrow Nash:** Okay, so with that Wolf, you wanna jump into our
first demo?

[00:25:53] **Wolf Vollprecht:** Yes. let's do that. let me try to share my
entire screen. Do we have the infinity? Yes.

[00:26:03] **Ruben Arts:** We did.

[00:26:04] **Wolf Vollprecht:** Infinity, achieve. so yeah, I am, we've been
talking a bit about Pixi and how to use conduct packages and I'm gonna show you
guys, one Pixi project now. so if I look@thePixi.il file, oh, I don't,

[00:26:23] **Audrow Nash:** the font nice and big?

[00:26:24] **Wolf Vollprecht:** is it not big enough?

is this big enough?

[00:26:30] **Audrow Nash:** If you could make it a little larger? 'cause people
may be watching on smartphones, you never know. I think that's probably Okay.

[00:26:39] **Wolf Vollprecht:** Okay, so I was trying to look at the Pixi to
file and it didn't work. So I'm gonna do one thing that Pixi can do, which is
globally install me some tools. So I want to have that globally installed. and
now I can look at the Pixi to file.

[00:26:55] **Audrow Nash:** the, so what's the significance of that? Why is that
impressive? Because I could just apt get it,

[00:27:02] **Wolf Vollprecht:** yeah,

[00:27:03] **Audrow Nash:** Why is BAT installing it? Or why, is, Pixi
installing it a nice thing?

[00:27:08] **Wolf Vollprecht:** can you app get it on, on Windows? Yeah.

[00:27:15] **Audrow Nash:** need to figure out whatever Windows does for

[00:27:18] **Wolf Vollprecht:** yeah, so, with Pixi you can just globally
install some tools. And these tools, they don't come from first of all, con
Forge moves faster usually than a PT get. So you'll get newer versions much more
quickly with Conda Forge.

[00:27:34] **Audrow Nash:** Oh, that's always such a pain. Yeah.

[00:27:37] **Ruben Arts:** No more ripple stories,

[00:27:38] **Audrow Nash:** then also there's a crosss Go ahead. Sorry,

[00:27:42] **Ruben Arts:** okay, so no more setting the repositories and
figuring out which version you need and all that

stuff that you need to do.

[00:27:51] **Audrow Nash:** I as a, completely selfish. Yeah, wondering, can I
install Neo Vim to an arbitrary version pretty

[00:28:02] **Wolf Vollprecht:** Yeah, you can do Pixi Global Install En Vim.

[00:28:05] **Audrow Nash:** because Neo Vim is such a pain to install on. 'cause
it, gets the wrong version for, the plugins that I want to use when I try to use
Apt and I

[00:28:15] **Wolf Vollprecht:** There you go.

[00:28:16] **Audrow Nash:** Oh, that's awesome.

Yeah. Space Vim. Oh, so cool. Hell

[00:28:20] **Wolf Vollprecht:** I don't know why.

[00:28:22] **Audrow Nash:** be using Lazy Vim, but that's

[00:28:24] **Wolf Vollprecht:** but basically here you see the version that was
installed and you could do something like Pixi Global

[00:28:28] **Audrow Nash:** Yeah. 10 is what I want. Oh, that's so cool. Yeah,

[00:28:31] **Wolf Vollprecht:** and then whatever, I don't know what versions
are available, but you can set it and then you get a different one. but back to
our ROS.

[00:28:41] **Audrow Nash:** me.

[00:28:42] **Wolf Vollprecht:** so what we're doing here is we have a Pixi TOML
file that, just defines the project.

And so this is something we copied from cargo, for example. we are using these
channels that I was talking about, and, we have some dependencies and in this
case we depend on turtle bot three gazebo, and we also have a task, which is,
called start. And that's this entry point that I can use. So I just do Pixi
start, and that's everything, right?

that's everything you need to do or your users have to do, to set up all the
dependencies, to install everything and download everything from the internet.
And it starts gazebo and it starts, rvu as you can see. So getting to that
point, usually I think, on Linux or other operating systems usually takes quite
the time, And, now this, works by first setting a post estimate. So I'm just
doing that.

[00:29:40] **Audrow Nash:** ba

[00:29:40] **Wolf Vollprecht:** then I can do the NAF goal.

[00:29:41] **Audrow Nash:** thing to highlight this

[00:29:44] **Wolf Vollprecht:** This is on Mac. Yeah.

[00:29:46] **Audrow Nash:** that's super,

[00:29:47] **Wolf Vollprecht:** me also get the robot model activated. this is
using all of these robo stack packages that I was talking about and, yeah.

[00:29:57] **Ruben Arts:** Yeah, so maybe could to elaborate,

[00:29:59] **Audrow Nash:** cool.

[00:30:00] **Ruben Arts:** So maybe could you elaborate on why this specific
example is not working on the windows. So we can package any package in theory,
but the package itself needs to support the platform that we build it for. So in
this case, I believe some of the plugins of the Turtle SIM didn't have an
buildable project on Windows, so we're not able to support it there yet.

But if this community gets more interest in getting projects, also working on
Windows, this tool allows you to easily test on it as well.

[00:30:35] **Wolf Vollprecht:** Yeah, and especially also like having more
projects using, for example, robust stack packages in CI to test against
Windows. That would be one thing that would help a lot. but generally speaking,
I'm, you can run Gazebo and Rviz on Windows as well, and you can connect Rviz
to, your remote data source or your Linux on Windows and then, get your data and
visualize it and stuff like that.

yeah.

[00:31:07] **Audrow Nash:** Love it. That's so super cool. and it looks like the
performance is very good

[00:31:12] **Wolf Vollprecht:** Yeah,

[00:31:13] **Audrow Nash:** Like I'm impressed by how things are moving around
so quickly.

[00:31:17] **Wolf Vollprecht:** while doing a video call.

[00:31:18] **Audrow Nash:** faster factor in, realtime one. Wow. So your gazebo,
real-time factor is one That's amazing.

[00:31:26] **Wolf Vollprecht:** Yeah, this is on an M two, MacBook Pro, and I'm
apparently not able

[00:31:32] **Audrow Nash:** very performant, but still.

[00:31:34] **Ruben Arts:** It's also interesting about how we do things because
we are just using packages directly on your host. There's no docker layer in
between. There's no virtual machine running anywhere. It's just.

hard metal that we're running this on while it's also isolated from the rest of
your system. So if Wolf throws away this folder, you don't have ROS on your
system anymore.

If you move to another folder, you don't have ROS there. It's like super
contained while using bare metal.

[00:32:01] **Audrow Nash:** Yep.

[00:32:02] **Wolf Vollprecht:** and so I also want to put, yeah.

[00:32:05] **Audrow Nash:** to NPM or something like that. So you have your
working directory and then you're gonna install all the dependencies as a child
directory of that. So like your NPN projects has their node modules folder,
which is joke to be the heaviest thing in the universe 'cause it's normally has
a lot of stuff.

but then, so you're doing something similar where you put all the dependencies
in there and that's really nice because your projects are very isolated,

[00:32:30] **Wolf Vollprecht:** So one of the things that is, maybe mind blowing
for some ROS people is that you can have a noetic project and a humble project
at the same time, on the same machine without having to like, use any docker
without having to use any, like virtual machines and whatnot. yeah, and that,
that's the magic of, these, environments that we are building here.

And you can totally, so you can basically, if you make that reference to, to
NPM, then the Pixi TOML would be a package, json essentially. And then the
package. json, you can also define some tasks like, and then we also have the
log files. So that's one of the other key features that I also mentioned
already.

So you have this whole list of exact versions of packages that you're using.
It's very long.

[00:33:24] **Audrow Nash:** And it's not really meant to be read by humans, but
it's something you can do to get the exact version of all the packages you need.

[00:33:31] **Wolf Vollprecht:** And while the whole lock file may be not be read
by a human, but the diff is something that's pretty nice, to have, like someone
makes a PR or changes the version of something and you can see exactly what
changed and you can also roll

[00:33:46] **Audrow Nash:** You're like, why are you changing this? Yeah,

[00:33:48] **Wolf Vollprecht:** Yeah. And, like the ability to be able to roll
back is something that you would maybe otherwise only have with docker
containers.

but we also give you

[00:33:58] **Audrow Nash:** is a giant pain though, to do pinning all your
versions in a Docker container, in your docker file. Oh, it's so painful. Okay,

[00:34:07] **Wolf Vollprecht:** So yeah,

[00:34:07] **Audrow Nash:** love this, I love all the different approaches or I,
and then one thing to make very clear, so when you do your tasks dot start
online 10, what you can do, I assume, is you can write Pixi task start or
something to that effect and it'll use that run

[00:34:25] **Wolf Vollprecht:** run starts. Yeah.

[00:34:27] **Audrow Nash:** And so then what that does is that calls that
command and you're setting your environment variables to be these things that
you're defining there. And that's really nice because a lot of times you'll have
very long ROS 2 commands. especially if you're doing like specific things with
specific packages and I don't know, these kinds of things.

So this is a very nice way of doing it and we can often do this kind of thing in
a make file, but your representation is very nice and clean and make files. You
have to do your dot phony and stuff at the top and it gets weird and it's not
totally clear to new developers. So I like this a lot better.

[00:35:03] **Wolf Vollprecht:** maybe another motivation is to, you know how you
often have readmes that's say pseudo apt gets installed, yada, yada, and then
run this and then run compile and cmake and this. And like you can encapsulate
all of this into this one file. It installs all your dependencies and it runs
all your tasks.

And so everything, the user, everything you need to put in your README is just
pixi run start, ideally.

[00:35:26] **Audrow Nash:** Love it. Yeah, that's super, super

[00:35:29] **Wolf Vollprecht:** this, we haven't really dove deeply into these
task system, but you can also have tasks that depend on other tasks and you can
also have some caching so that you can skip over, the task if it has already
executed and fulfills the conditions.

So the whole system is pretty powerful if you, really get into it.

[00:35:51] **Audrow Nash:** I bet hell yeah. And this looks very cargo like,
which is, it's really nice to see you took a very good design and just applied
it more broadly. So I really, I like, I really like the design decisions of
cargo. It's a very nice way to develop and I really like how you guys are doing
this, so hell yeah. anything else to add?

I think this is the first demo.

[00:36:11] **Wolf Vollprecht:** Yeah. That was the first demo. And I think we
can go over to Ruben to give more of a ROS developer experience, like dive.

[00:36:22] **Ruben Arts:** Yeah, of course.

[00:36:25] **Audrow Nash:** All right.

[00:36:26] **Ruben Arts:** If there's no more questions on this part, I can go a
bit deeper, so

[00:36:31] **Audrow Nash:** Yeah, definitely.

[00:36:33] **Ruben Arts:** say A few First things, I'm gonna share my screen,
which is only gonna be a VS. Code instance. I hope you can see it. I,

[00:36:42] **Wolf Vollprecht:** We do,

[00:36:42] **Audrow Nash:** So one, one note with this is, we were having
trouble sharing the full screen Ruben. And so what we're doing is we're gonna
share the window and it's gonna be a little bit clunky, but we shouldn't, there
shouldn't, you'll be able to share a turtle sim,

[00:36:57] **Ruben Arts:** Exactly.

[00:36:58] **Audrow Nash:** when it's up

[00:36:59] **Ruben Arts:** Yeah. So what I want to do is, share the experience
of a world workspace. you guys listening to this will probably all know what
they do on a daily base, but we are gonna go in depth on how you could use pixi
and some other tools to improve that workflow. And I'm gonna do it on Linux
because my main machine is Linux, but this should work on also Mac Os, and,
windows.

I'm just gonna do it because I prepared the demo and that's why Wolf's not
running it on Mac. and I'm gonna go a little

[00:37:31] **Audrow Nash:** some weird Linux, right? what? What were you, it's
Debian based, but what were you

[00:37:36] **Ruben Arts:** I'm on Pope OS like it because of the Nvidia support,
but it's,

[00:37:41] **Audrow Nash:** Ah,

[00:37:42] **Ruben Arts:** it's an improved version of Ubuntu if you would ask
me. But let's not get into that, conversation.

[00:37:48] **Audrow Nash:** Ah, okay.

[00:37:51] **Ruben Arts:** so I started with this, folder, which, I already
prepared, but it's an empty folder and I'm gonna start a picture project in
there and I'm just gonna copy in some, oh, this is already going wrong, but I'm
gonna copy in, command, that's called Pixi in it, which Initializes project,
which gives you these three files, just some gi information and the Pixi to
itself.

I will, it'll add the name and the platform that I'm running on to add a version
and an empty tasks and dependencies, list what Wolf just showed. And the first
step you would normally do is start with adding some more dependencies. You
could add them here yourself, but you could also add them through the CLI as
well.

I'm constantly doing the Ctrl C without the Shift Classic. Which is gonna add a
list of, some ROS, dependencies. It's gonna, add some compiler information. And
that's basically an initial setup of a source, workspace in ROS. What you
normally do with APT get I just did with Pixi. And it shows you what versions it
added.

It adds it to the fall for you. we really like to have upper and lower bounds to
make sure that your package isn't suddenly gonna break if you update. but you
can yeah, define any way of, of defining a package in there. I also added

[00:39:13] **Audrow Nash:** you know if you wanna, so

[00:39:15] **Ruben Arts:** go ahead.

[00:39:16] **Audrow Nash:** I see that, you have you have ones where it's saying
don't go into the next major version. Version, and then you have other ones
where it's saying, don't go into the next, I. Minor version. how does it decide

[00:39:29] **Ruben Arts:** Yeah, that's a good question.

[00:39:30] **Audrow Nash:** So like your package config is 29.2 and anything
less than 30 and your for minor version.

And then you have other ones that I see the major version like, ROS, humble
Turtle Sim 1.4, and anything less than two should be fine. How, does it decide
that? 'cause that seems smart to me.

[00:39:50] **Ruben Arts:** Yeah, so good that you notice that it's actually
relatively simple. We, adhere to the sim fair, way of versioning, which means,
if you break your, application or API, you bump the first, number, which is the
major one. this counts for all the numbers except the zero versions, which means
these are in development mode, which means that if you are in development mode,
you don't have a major version yet, so the minor can also break.

And that's the reason we decide if you have a minor, you only depend on the
minor specifically.

[00:40:27] **Audrow Nash:** Hell yeah. That's a smart heuristic in my opinion.
That seems great.

[00:40:31] **Ruben Arts:** Yeah. So that basically gives you a start and. I am
going to run Turtle Sim already, because it just installed Turtle Sim for me.
Let me do this and you will not see the Turtle Sim running, but for this
example, I will, I'm going to make sure that you trust me on that the little
turtle sim, window opened and we already have a full ROS installation here.

you might see this as familiar, logs,

[00:41:01] **Audrow Nash:** Yeah,

[00:41:03] **Ruben Arts:** because I can share that right now. I'll continue
with making an actual package, so I,

[00:41:08] **Audrow Nash:** And so the one thing, so you did Pixi run and Pixi
run was how we called tasks in our, in our. Pixi instance or Pixi workspace and,
but then what you're doing is you're giving it an arbitrary ROS 2 command, which
is the ROS 2 run turtle sim, which is the package and then turtle sim node,
which is the executable

[00:41:32] **Ruben Arts:** Yeah, exactly. So Pixi has,

[00:41:34] **Audrow Nash:** that's cool that it's scopes your command for this
kind of thing.

[00:41:38] **Ruben Arts:** Pixi has multiple commands that can run, run your
environment. So because the environment is in, this folder, we need to activate
it before we can run anything in it. And Pixi Run will activate your environment
and run any arbitrary task in it. it'll just spawn it in its own little shell,
which is also cross-platform.

So all the tasks you define, in Pixi, are cross-platform. if Wolf runs the same
command, it should work the same way, as it did for me. But, there's also
another thing that you can do, which is more used if you're developing hard on a
project, this Pixi shell. And that starts an actual shell, a new shell, which
now has ROS to available in, in that specific shell.

And, I don't have ROS to in the system apart from that. So if I exit that again,
I don't have ROS to,

[00:42:31] **Audrow Nash:** That's really

[00:42:32] **Ruben Arts:** I do, oh, sorry. I have a VS. Code plugin that
actually activates it in a shell for me already. So if I would do another
terminal that wasn't in VS. Code.

[00:42:42] **Audrow Nash:** I think it's still true.

[00:42:43] **Ruben Arts:** Yeah,

[00:42:44] **Audrow Nash:** It's fine. So one thing with this, when you were in
the shell, so when you did Pixi shell, it looks like you get auto complete. Do
you get auto complete when you do the Pixi run command? I think Wolf and I were
looking at this before and I think that because he was using the ZSH shell, it
was difficult to set up.

and he didn't do it before we were talking last time, but, I don't know what
shell you're using. It looks like it could be ZSH,

[00:43:13] **Ruben Arts:** I am.

[00:43:15] **Audrow Nash:** do you get auto complete with your Pixi run command

[00:43:18] **Ruben Arts:** Yeah. So if

[00:43:19] **Audrow Nash:** you do Pixi run ROS? Two

[00:43:21] **Ruben Arts:** Oh, so that, that's a, there's two different things
here. So Pixi run, ROS 2 will currently not auto complete because to turn on
auto completion, you would have to forward that to an activated environment,
which is, too slow. So we cannot activate the environment while you're tapping
away on your command line.

but what you can do if you have, let's quickly add a simple task. So Pixi task
at, let's call it, hello? and we just echo, hello. So this now added a task
called Hello, which will just echo. Hello?

[00:44:00] **Audrow Nash:** Oh, and you will get auto complete with this. I see.

[00:44:02] **Ruben Arts:** Yeah. So now I can do h and it will autocomplete.
Hello for me. So then,

[00:44:06] **Audrow Nash:** it's in your task. I see. that's nice that you do
that.

[00:44:10] **Ruben Arts:** So yeah, so that's what, what does autocomplete for
me?

and auto completion. Turning it on is just one script that you have to add to
your bashrc or zshrc or whatever shell you're using.

[00:44:21] **Audrow Nash:** it is. Yeah.

Okay,

[00:44:25] **Ruben Arts:** so yeah, just fire more questions, but I'm gonna
continue with actually building a project. So I will do this command, which is a
ROS 2 package, create command that you might know.

We're gonna do a Python version of it, and the destination is gonna be in an src
folder, and we're gonna name it talker for those listening in. And this is the
basic roll two creation of a package. So we have a, yeah, the, just the normal
workflow of, of a ROS packages includes the package m and the Python package.

So also the setup of the pie, which is simple enough. Let's, let's see if we can
build it. I'm constantly doing the control C.

[00:45:06] **Audrow Nash:** Oh, whatever. It doesn't matter.

[00:45:08] **Ruben Arts:** So we are using Colcon. We previously installed it.
so that already works and now we should be able to, should be able to run it.
There's one caveat in the ROS world.

You need to add this little, setup dos h to your bashrc or zshrc to make sure
that, that the environment knows where to find your, ROS project. So I'm gonna
quickly run this echo command into my, pixi toml with which adds an activation
script and it make sure when the, when Pixi activates an environment that also
runs this script, which is now, in the install because of colcon.

And if I then do Pixi run,

[00:45:51] **Audrow Nash:** I like that you did that from the command line as
opposed to just putting it in your file.

[00:45:55] **Ruben Arts:** yeah, I prepared it to be a command line example.

[00:45:59] **Audrow Nash:** love it. So with activation, is that a special,
that's a special thing that it knows as like a, like, that's a key word in your,
Pixi tomal file that says, run this so you can set up your environment when
you're in the Correct, when, you're doing Pixi run and stuff, it, does this all
first.

Is that

[00:46:21] **Ruben Arts:** yeah. No, that's exactly, the way it works. you can
also define an end. Oh, it's actually autocomplete. That's great. which you can
define, for instance, Python Path or whatever, which is just an environment
variable. But the scripts is for, ROS very important because you, it's more than
just an environment variable that you have to set.

[00:46:42] **Audrow Nash:** Mm-Hmm

[00:46:43] **Ruben Arts:** we just built, the package and we now can already,
run the talker, which is hello from talker.

## [00:46:49] Quick Setup with Pixi

[00:46:49] **Ruben Arts:** This is the basic code from, the ROS examples. but,
so I'm not sure how long this took me, but it's probably didn't take me much
longer than five minutes while explaining it. So this is a good show of how
quick you can get set up with the Pixi.

I do have to say that this is of course, with a cached download speed.

## [00:47:08] Understanding Package Caching

[00:47:08] **Ruben Arts:** So I have done this before, which means Pixi caches
all the packages that I've installed, and so it only has to verify if there's
new stuff available and otherwise it pulls it from my cache. So my machine has
probably, a few hundred, installations, different environments, but it's all
pulled from the cache and hard linked into your environment.

So this folder might look big, but it's all hard linked files to the cache
folder, which makes this much easier to use.

[00:47:38] **Audrow Nash:** So you're, this is a bit like yarn or something, if
I understand, which is, an alternative to NPM. So you are in, like your home
directory, you're caching your packages, and then when you have a project that
uses those, it goes and looks for them in your home directory and downloads them
if you don't have them.

But if you do use them, you just link to them and it puts that into your. Your
workspace effectively, is that exactly what's going

[00:48:04] **Ruben Arts:** Yeah, a hundred percent.

[00:48:05] **Audrow Nash:** Very clever.

[00:48:06] **Ruben Arts:** Yeah. And depending on your machine, it de it decides
which version of linking is the fastest for you. there's, I don't, I'm not gonna
go in depth, but there, there's some smart things going on there. Yeah. Sorry.

[00:48:19] **Audrow Nash:** Yeah, I don't know anything about the different
types of linking. I just like symbolic links. I got that, exists, but I don't
know if there's more variants,

[00:48:28] **Wolf Vollprecht:** now,

[00:48:28] **Audrow Nash:** don't have to talk

[00:48:29] **Wolf Vollprecht:** now that we're talking about it, so there's one
cool link that's called copy on write, which is nice because then.

[00:48:35] **Audrow Nash:** Oh,

[00:48:36] **Wolf Vollprecht:** you don't like, you link it, but when you modify
it, it becomes a copy.

[00:48:41] **Ruben Arts:** Yeah, so I could modify this environment and then I
don't break all the other environments that are also linked to the same file,

[00:48:50] **Wolf Vollprecht:** yeah.

[00:48:51] **Ruben Arts:** is sometimes a problem.

[00:48:52] **Audrow Nash:** Oh, that's clever. Okay. What an interesting thing.
Then you may go outta sync, but that's a very neat feature for this.

## [00:49:00] Building and Running ROS Packages

[00:49:00] **Audrow Nash:** Okay, so now you've activated, so now you've run, so
we're running a ROS 2, node on this. That's great.

[00:49:09] **Ruben Arts:** This just this, this simple code from the example,
that it's created. I'm gonna add another thing. the c plus package. So this is
doing the same thing again, just creating a package now based on CMake. it has
some dependencies and the note name is gonna be navigator. I will get into it
that later, why that is.

And now it created another package called Navigator with some source. And also
here is just a simple hello world thing. what we need to do now is build this
package, with a cool command. I'm gonna run it really quickly. Shouldn't be too
hard to build.

[00:49:53] **Audrow Nash:** the ninja?

[00:49:54] **Ruben Arts:** Oh, that's a different, I have to say this correctly.

Different tool to configure CMake. Believe I say that correctly. Otherwise,
Wolf, please, please tell me how I should say it otherwise,

[00:50:07] **Wolf Vollprecht:** cmake generates ninja file or cmake generates
the make file, right? so it's an alternative to make. That was written at some
point.

[00:50:17] **Ruben Arts:** yeah, I just like to use that one better.

[00:50:21] **Audrow Nash:** Huh? Why?

[00:50:23] **Ruben Arts:** because it seems to be faster and tests some more.
Yeah. How do we get into

[00:50:29] **Wolf Vollprecht:** line output is a bit nicer. I would say like the
console logs are

[00:50:33] **Ruben Arts:** that's definitely already my

[00:50:34] **Audrow Nash:** are hard to. I understand. Okay. Hell yeah. Oh, the
command line output is nice. Okay. Hell yeah.

[00:50:40] **Ruben Arts:** so I will Oh, yeah. So I just built that one, that
was super plus instead of Python, and I should now be able to also run that
package, so we just,

[00:50:50] **Audrow Nash:** Oh, and I saw the activating. That was cool. So that
was, sourcing your environment for this kind of thing. That's great.

[00:50:56] **Ruben Arts:** so it was like starting a new shell, running the
command and then getting back to you.

## [00:51:01] Handling Activation and Features in Pixi

[00:51:01] **Audrow Nash:** Now, one, one question with this is, I think
sometimes when you build, you don't want to have your script sourced, or you
don't wanna have your workspace sourced. some people say that this reduces
different classes of bugs, especially if you're doing symbolic linking and these
kinds of things.

is there a way of making activation only occur when I'm running a certain. Type
of commands or have you guys handled this kind of thing or you don't see these
bugs 'cause there's no reason to symbolic link or what? any thoughts?

[00:51:38] **Ruben Arts:** Yeah, so I, I might get, a bit quick on the features
of, Pixi. But Pixi has a thing called a feature, which is like how you could
think of it as an optional dependency or an optional thing, in, in Pixi. So I
could do feature dot, let's call it act of activation. And this now lives in a
feature which is not used, but if I would want this feature, I could build an
environment that specifically only uses the activated, stuff.

And then I could do act what GitHub copilot is helping me with. And now if I run
the activated environment, only then is my ROS environment activated?

[00:52:27] **Audrow Nash:** How do you run the activated environment?

[00:52:30] **Ruben Arts:** so if I now do Pixi run the e act, I can do ROS.
Yeah. So the rest of the examples would run there.

[00:52:39] **Audrow Nash:** okay. I love it. That's great. I love that you guys
have a very simple workaround for this. That's super, super cool.

[00:52:45] **Ruben Arts:** Yeah. I'm gonna remove it for now because I do need
the activation in my example, but.

[00:52:50] **Audrow Nash:** Yeah, and rather than doing the Dashie Act
everywhere, so that makes sense.

## [00:52:55] Creating and Managing Tasks

[00:52:55] **Ruben Arts:** so what I just showed you was two different types of
packages, a C package, C plus package, and a Python package and a ROS workspace.
but you already saw me with pretty long, commands that I need to run. you've
already seen it. But I am gonna add the tasks through the CLI. So I'm gonna add
a task for just running the sim and I'm gonna add three more tasks for build and
for actually running the nodes that you've seen me do already.

So now I have, can I make this, should I make this smaller or bigger or,

[00:53:32] **Audrow Nash:** I like it how it

[00:53:33] **Ruben Arts:** cool. Then I have,

[00:53:34] **Audrow Nash:** it's a little cumbersome, but still I.

[00:53:37] **Ruben Arts:** That's good. The tasks are now added. So now Pixi Run
has these five tasks, including the hello one, which I can run. So I can run the
simulation of the turtle sim node. I can build this, workspace. I can run the
talker navigator separately.

And these now also how to complete on my command line. So Pixi run, navigator,
just the end tap completion and the navigator starts, running. And that makes it
just easier for someone that coming in and is oh, how does this p project work?
You can just do Pixi run, tap, and he sees all the available tasks that he has,
or task list, of course.

And then those will work as well. I'm gonna copy some code that I prepared into
the packages. is just to make the example a little bit more interesting, which
is gonna be. dock is gonna accept the CLI command for an x and a y position for
the turtle. And the navigator is gonna, listen on a topic which the talker is
talking to, and then interpret that information and putting it to the, CMD valve
of the turtle.

This is all prepared, so you don't really have to look into it, but it's just
the most basic simple, ROS example of a, topic and sending it to another server
that's listening to that topic and then sending it forward to the topic of the
turtle sim that's running. I can now also still build this package, so if I do
Pixi run built, that will start building the package.

Both of them actually, 'cause it's in a workspace of two packages. It's gonna be
a little bit more time because we have to rebuild with actual dependencies. Es

but it should just take a. Few

[00:55:33] **Audrow Nash:** This is super cool though.

[00:55:36] **Ruben Arts:** So now it did

[00:55:37] **Audrow Nash:** I'm very impressed.

[00:55:38] **Ruben Arts:** And I'm thinking now because I cannot easily share my
screen, what I will do, I'll

[00:55:44] **Audrow Nash:** Yeah. Don't worry about it. we'll see the, we'll see
the positions, right? Aren't you echoing the positions with the talker or

[00:55:51] **Ruben Arts:** I

[00:55:51] **Wolf Vollprecht:** I actually like, while, Ruben was demoing it, I,
made sure that it works on, the M1 chip as well, so I could show it if you want.

[00:56:01] **Ruben Arts:** if you wanna do that, then we could, definitely,
share it on your screen and, come back for the actual building of, package for
on my screen. I can prepare that to go ahead.

[00:56:13] **Wolf Vollprecht:** that's a good idea. then let me share my screen
again. same thing as Ruben had, but what I did was,

[00:56:23] **Audrow Nash:** make it nice and big too.

[00:56:25] **Wolf Vollprecht:** I just added, OSX, arm 64 here as a
additionally, supported platform. And, everything else is pretty much the same.
And, what room was about to show? So I ran Pixi Run Build, which is using Code
Con on s to build it.

And now I can do Pixi run sim. This is going to start the turtle sim. And then,
I'll bring it to the front in a second. So we have the navigator, which is
controller and the talker. So I, let me try to get the window here.

[00:57:09] **Audrow Nash:** You can pin it. I think if you can you right click
or something.

[00:57:13] **Wolf Vollprecht:** no, this is not Linux.

[00:57:15] **Audrow Nash:** or maybe that's, oh,

[00:57:16] **Ruben Arts:** a Linux thing?

[00:57:17] **Wolf Vollprecht:** make is not so good.

[00:57:19] **Audrow Nash:** I guess so. Yeah. That's funny.

[00:57:21] **Wolf Vollprecht:** And, but now I, we have to talk a note that room
was showing so I can give some coordinates, I don't know, three, five. and as
you would expect, it sends a message and the controller does its job, et cetera.
So let's try some more.

[00:57:40] **Ruben Arts:** Yeah, so the, example itself is super basic robotics,
which you're gonna experience your first day learning ROS, I assume these days.
the great part from this standpoint is Wolf runs it in his terminal, which
doesn't have ROS. but if he uses Pixi, this all gets activated and run just like
a normal ROS experience on Mac.

[00:58:06] **Audrow Nash:** amazing.

[00:58:07] **Wolf Vollprecht:** and this is on Mac,

[00:58:08] **Audrow Nash:** 'cause I've,

[00:58:09] **Wolf Vollprecht:** is not,

[00:58:10] **Audrow Nash:** yep.

[00:58:11] **Ruben Arts:** No.

[00:58:12] **Audrow Nash:** Oh, I've done so

[00:58:13] **Wolf Vollprecht:** it hit the war.

[00:58:14] **Audrow Nash:** with virtual machines and all this adding to this
just. oh, it's so much easier now. It's so crazy. Okay. and then, yeah, then you
have your tele op at the bottom,

[00:58:27] **Wolf Vollprecht:** yeah. This

is,

[00:58:28] **Ruben Arts:** teop could be run, but that's another command.

[00:58:31] **Wolf Vollprecht:** yeah.

[00:58:32] **Audrow Nash:** Oh,

[00:58:32] **Ruben Arts:** These are just two simple, nodes that we run.

[00:58:35] **Audrow Nash:** Oh, I see. The navigator's just, publishing it to

[00:58:39] **Wolf Vollprecht:** the talker, is publishing and then the navigator
is like a PID or whatever control thingy.

[00:58:44] **Audrow Nash:** and then showing you, yes. Okay. Very, cool. Okay. I
love it. That's super, super cool. Thank you for,

[00:58:55] **Wolf Vollprecht:** back to Ruben,

[00:58:56] **Ruben Arts:** Yep.

[00:58:58] **Audrow Nash:** yep.

[00:59:00] **Ruben Arts:** I can share my window again. so Wolf just showed you.
My little example works, which is great also on Mac s next to Linux. but now
you're in a situation. I developed this project. I can run it locally. I can
connect to another robot. I can do all the things that the developer does in
this machine.

Now I need to start deploying it, and my colleagues need to also start using
this package. And I want to be able to easily fetch it in my 20 different CI
jobs that I'm running. you don't want to do the build everywhere. You don't want
to, rebuild for every workspace, every time.

## [00:59:37] Building and Using Conda Packages

[00:59:37] **Ruben Arts:** So what we can do is we can start, building a conduct
package.

And for that we built our own tool, which is called rattler build, which is a
version of Con Build. and this command will install it and add it to the feature
build just as I showed you with activation earlier. It's gonna add another

[00:59:57] **Audrow Nash:** Oh, that's what the def Dutch F does.

[01:00:00] **Ruben Arts:** I could write it

[01:00:01] **Audrow Nash:** very cargo like too for this kind of thing. But I
think you're using features a little bit differently than cargo,

[01:00:07] **Ruben Arts:** A little bit.

[01:00:08] **Audrow Nash:** in this case.

[01:00:09] **Ruben Arts:** Yeah, no, that's true.

[01:00:10] **Audrow Nash:** features will often give you different access to,
you can get the derive module in something that you want to then inherit from in
some part of your code.

But here it's like you're adding it to your project in a sense. Is it?

[01:00:24] **Ruben Arts:** Yeah, no, that's correct. although the feature itself
now doesn't do anything, so it's just in existence in my configuration file. But
it,

[01:00:32] **Audrow Nash:** a star.

[01:00:33] **Ruben Arts:** it just doesn't, it hasn't downloaded anything right
now. I did that thing again. I. So now what I'm gonna do, I'm gonna add a
project, the project built, and it has no default features in there because, and
what that means is I don't need any of the features that I just defined now.

So no dependencies, no tasks, all not necessary in this environment. I just want
to build environment. So just the build feature in there. You could also have a
test feature or a documentation feature or a linting feature. And this way you
can separate the concerns through different environments, which makes it super
easy to install in ci.

So if you just wanna do formatting, just install formatting and you can split
that up.

[01:01:13] **Audrow Nash:** Oh, that's so cool. Yeah, because I, it's always so
silly when you run CI and you have to set up the whole thing just to run clang,
tidy, or whatever it is.

[01:01:22] **Ruben Arts:** Yeah. Yeah, exactly. So if I now do Pixi install,
write it out, it'll start, updating my log file with a new in installed package
and it will start, making that environment for me. Now, I'm going to teach you
another thing, which is called recipes. This is pretty conduct specific, and we
are working on making it easier to do it through Pixi itself, but currently we,
don't have that feature in yet.

It'll be coming soon, but I'm gonna show you the old way.

[01:01:56] **Audrow Nash:** I, I want to just, ask one question about where we
are right now. So whenever you do Pixi install, it's going to set up all the
environments. Is it Correct?

[01:02:07] **Ruben Arts:** Actually,

[01:02:08] **Audrow Nash:** so you set up,

[01:02:09] **Ruben Arts:** I actually misspoke and it only did the default
environment again. So it didn't actually install Rattler build it only locked
it, into my log file. If I wanna install, either, sorry, install either all or,
I can do also dash e and then build. So now the built environment is installed.

[01:02:33] **Audrow Nash:** So that makes sense. So you can select which
environment, or you can do dash, all. this is really nice 'cause you can only
install what you want if you wanna install only a subset of it. Okay. But
otherwise it just updates the lock file with these, you don't actually do the
downloading.

Okay.

[01:02:51] **Wolf Vollprecht:** This is also how we deal with like development
dependencies and production dependencies and things like this. Like you don't

[01:02:56] **Audrow Nash:** Oh, I love that. That's so clever. Yes. That's
really nice. 'cause it's such a pain. a lot of projects you end up shipping your
development dependencies for these things and there's no reason to.

[01:03:09] **Ruben Arts:** yeah,

[01:03:09] **Audrow Nash:** A lot of times

[01:03:10] **Ruben Arts:** Yeah. The show there even one more. Now we're just
talking about it. One more amazing feature that I wish I had before I was
starting on Pixi. You can also make a prod environment called and then do
basically the same thing as you did before. So this is already completed by gt
and if you don't do the no default features.

You get all the dependencies in this one environment. and so this would be your
dev environment actually. So dev this depends on all the features of your own
environment, but if you then do, prod environment, which I was actually gonna
explain and you say, I want this to be in a solve group of food, doesn't matter
which solve group a, solve group, you can define other environments that are
also in the solve group, for instance, the test environment.

And then you could, you, you make sure that while solving all the dependencies
are exactly the same. And then when installing, you only install what you need,
which makes it super easy to

[01:04:18] **Audrow Nash:** so

[01:04:18] **Ruben Arts:** it up.

[01:04:20] **Audrow Nash:** And when you say solve, you mean in terms of how it
solves for dependencies or what's, what are we solving?

[01:04:26] **Ruben Arts:** No, it's just the dependency puzzle that it solves.

[01:04:30] **Audrow Nash:** That's super, super cool. I really like that because
it's often, I, I've worked with some things where you have different
environments and it's very tedious to set them up generally.

'cause I end up copying all of the things from production that I want to, all
the things in test that I want to, all the thing. And then, grabbing a, like a,
all of that is a subset of the dev environment for this kind of thing. And it's
so nice that you have a nice way of doing that.

[01:04:57] **Ruben Arts:** Yeah. Yeah. I was really excited about this myself as
well. I didn't come up with it. We had some great, contributors that thought of
this. I'll delete this for now because we don't need it.

[01:05:09] **Wolf Vollprecht:** one of the other pain points is also like
sometimes you have a dev dependency that may be only available for, I don't
know, Python three point 10, and then your pro environment might be on three
point 12, but that's not what you're testing against. And so that's also one of
the things that the Solve group makes sure of.

you're testing exactly against the same stuff that you're using for deployment.

[01:05:29] **Audrow Nash:** That's really cool. Okay. Yeah, you guys have made a
lot of this is a very user friendly approach. This is very nice. I could solve
so many problems that I've had while coding and different workspace environments
like this is just wonderful. Okay. Hell yeah. So you have your build environment
and let's see, back to you, Ruben

[01:05:50] **Ruben Arts:** Yep. Yeah. So the next step would be to make a recipe
for a project. So I'm gonna add a simple file that's gonna be called Remo, and
this is a com lab package recipe. And I'm gonna copy it from what we prepared,
because otherwise it's gonna be too much of an typing problem. but the navigator
has this recipe and it's a bit bigger than you want, but sorry.

[01:06:19] **Audrow Nash:** okay, so you have 40 lines. I don't know anything
about recipes for this. I'm imagining it's kinda like a Docker file, docker,
script. Is that fair or are they something because you're saying all your, just
different, dependencies or what, I guess what is the, is that what it's doing or
what,

[01:06:36] **Ruben Arts:** maybe Wolf should explain

[01:06:37] **Audrow Nash:** do I understand this? Okay, Wolf, go ahead.

[01:06:42] **Wolf Vollprecht:** Sure. Yeah. So it's a little bit like a Docker
file, but. most package managers have a concept like this. Also, like you have
for Debian, you have some sort of I don't actually know what they're called, but
files like this that define the dependencies of the things that you need at
build time at link time.

And then you have some script that does some arbitrary commands like CMake
install, blah blah, blah, or PIP install. And that installs things into what we
call the prefix. And that's also where the name of the company comes from. and
it installs that into the prefix. And then we take the diff and the Diff is
basically your new package.

And that's how the packages are made.

[01:07:30] **Ruben Arts:** Yep. So this defines all the required metadata that
you're gonna put into your project and also how you built your project. So in
this case, we define a script. The script doesn't really matter for you right
now, but it just runs some either C make or commands or whatever to build your.
Project, and then it's gonna move it into the output.

It's gonna add some other metadata, like in description, in this case, the
version. And, yeah, the conda tooling, ecosystem understands this file. So

[01:07:59] **Wolf Vollprecht:** Yeah, maybe you can compare it. Also, it's the
package XML, actually, like the package XML is more or less what this does

[01:08:06] **Ruben Arts:** yeah,

[01:08:07] **Audrow Nash:** One, one thing just to point out. Yeah. So it's very
similar to the package at the mail. That's great.

[01:08:11] **Ruben Arts:** I have one of these recipes as well for the talker,
which I'm quickly gonna add. this is something as I said before, that we want to
fix within Pixi itself, so that we don't need an extra tool, but for now we
still require it.

So it's gonna be exactly the same. Only that this one does have Python and no
CMake stuff in there. this is all we require to build the actual packages. And
for that I'm gonna add some commands, tasks again, which are just a little bit
long and that's why I'm actually making em a task in Pixi.

So you see here I added the LER build and the recipe, yamo. In there you define
some of the robo stack and conda forge things, and that extra build project is
coming from our own, channel. Which is, open and public to everyone to use. but
it's just to make this a little bit, oh, sorry, that was not the correct place.

I also have the one for the navigator. So now I have two more tasks which can
build the actual coma packages. So let's do that now. Xi run, build Docker, and
this, oh, this is a bit small for what it usually as an output framework can
have really nice output, but your terminal should be a little bit larger.

And that was the build for package. what you'll see in your folder, actually
it's maybe the best way to look at it is you have an output folder. It had a
build, directory where it did the actual build. then you get a general directory
with your Linux 64 in my case. And it has this artifact, which is a.

Total package for the talker. this contains everything that package requires to,
to be installed and run. So I'm gonna also do that for the navigator. This one
is gonna take a little bit longer because it has to do some compiling.

[01:10:16] **Audrow Nash:** It is bigger

[01:10:17] **Ruben Arts:** Yep, exactly. but.

[01:10:19] **Audrow Nash:** and Wolf added the dependency of, or, said that this
could be built on OSX. So you are currently on Linux and so it, you didn't add
that OSX one, but if we did this, would it also build it for all the other
supported platforms?

[01:10:37] **Wolf Vollprecht:** the best way to do that is actually on, let's
say GitHub actions, for example. And then you would just have your ci and we
have very nice CI integration as well with a red label build action and the Pixi
action and all that kind of stuff. So that would just go and build it on all the
platforms that you're defining this on and then upload it to a channel.

And from a channel, you can just use it in your Pixi TOML again. So once you
have the package, it's just, very easy to install.

[01:11:05] **Audrow Nash:** Nice.

[01:11:07] **Ruben Arts:** I am quickly gonna do a little hike on the side of my
screen. I just made another folder called ROS Workspace Production because now
we have two packages that we built and, I can open our workspace that is closed.
You can see the rest of my screen, But, now that we have built those packages,
we can actually use them.

We somewhere else. do you see this screen? Yes. So this is a new Pixi project.
It's completely empty again. let's simplify it even more. we, Don't add any
other dependencies, but I should add the ROS. Sorry, roll stack st. Staging here
as well. And we can also add the dot slash and then the other ROS, workspace,
where we had that

[01:12:10] **Audrow Nash:** so your path on your local system,

[01:12:12] **Ruben Arts:** Yeah, so now I have it on my local system. We can
also push it online. I also have the example prepared online, but in this case,
that shows exactly what we're running, from the other, folder. And I already
added these things

another.

[01:12:30] **Audrow Nash:** Yeah, the online one is probably just downloading
it, downloading the artifact, and putting it somewhere for you.

[01:12:35] **Ruben Arts:** Yes, exactly. I'm not sure what I just copied why
this is coming in. This shouldn't come in.

[01:12:45] **Wolf Vollprecht:** It looks like somewhere there's the.

[01:12:48] **Ruben Arts:** Sarah.

[01:12:49] **Audrow Nash:** You can just undo stuff,

[01:12:50] **Ruben Arts:** Yeah, I actually copied it from Markdown, so I've
expected it to copy. Let me try again. Yes. So pretty simple. We have Humble
Desktop, humble Turtle Sim, and the Navigator and the Docker. And we again have
this sim navigator and talker command. So I could start a new,

[01:13:14] **Audrow Nash:** star, you're saying whatever version, because so
navigator equals star and talk or equals star because it's on your system.
You're just saying whatever version it happens to be is totally fine. And that's
what that star indicates.

[01:13:27] **Ruben Arts:** So the solve that we do is a satisfiability solve
with the inclusion of get the highest version we can get. So it takes these two
packages, it says, okay, I need specifically between these two versions. And
then for the navigator and Docker, get whatever you. Can get, and from those,
the latest one.

and if we then run the Pixi run sim, you already start that, thing. What did I
do now? I,

[01:13:59] **Wolf Vollprecht:** think maybe just try the dot and

[01:14:05] **Ruben Arts:** oh, sorry.

No, the example went wrong. Actually. Think I mis missed it. This I will quickly
use the, example that we prepared online. So what you can do with these
packages, they're just artifacts, just single files. You can drag and drop them
into our website, and then you would have them available under your own channel,
which is exactly the same workflow that you would have, except that you move
them to a, channel online.

And if you then install that, this should actually. Solve it and, build the
environment and run the node. So you will not see my ROS the turtle sim, but it
is

[01:14:51] **Audrow Nash:** Same reason as before.

[01:14:52] **Ruben Arts:** exactly, it is on my system. It's already running. I
can show the navigator as well. sorry, I'm mixing the commands, navigator. so
this runs navigator and I can also start, the talker pixi run talker.

And that also, that also runs the command.

[01:15:16] **Audrow Nash:** Yep.

[01:15:16] **Ruben Arts:** I added,

[01:15:17] **Audrow Nash:** Very cool.

[01:15:18] **Ruben Arts:** oh, I need to add some numbers.

[01:15:22] **Audrow Nash:** Yep.

[01:15:23] **Ruben Arts:** Yeah. So you see that the navigator got it. And my
little turtle is moving, as we all know. I just, I can maybe share that screen
quickly.

[01:15:33] **Audrow Nash:** Yeah, for sure. I trust you with it, we saw it
working earlier.

[01:15:38] **Wolf Vollprecht:** Yay.

[01:15:39] **Ruben Arts:** But, Please go ahead and ask him questions while this
little turtle is doing its thing

[01:15:47] **Audrow Nash:** Let's see, Wolf, so these demos are awesome and it
really shows me how to get started with it. I think for all of my new ROS, two
personal projects, I'll be using this.

## [01:16:01] Future Vision and Community Involvement

[01:16:01] **Audrow Nash:** what, I guess for both of you, what are, some of the
big takeaways from all this? if some, Wolf, I'll have you go first, but what do
you hope someone takes away from this demo and this, like what we've shared
today?

[01:16:16] **Wolf Vollprecht:** so I think, I hope we were able to demonstrate a
different sort of approach to. Installing ROS, which in my opinion is one of the
bigger pain points in the ROS ecosystem. And while like this works, and we are
really happy about it, there's still a lot to do, in the Robo Stack project.

For example, we would want to support the latest, like we are currently
supporting ROS, humble very well, but then, we want to get ROS Jazzy done and
like all the new things and maybe even rolling. And so if we would have, like we
want to grow the community, help people to get started much more easily with ROS
and get all the latest and greatest packages on to this form of distribution and
get more maintainers to also buy into this technology so that we can just make
it easier for everyone.

I think that's our goals and that's one of the reasons why we're here.

[01:17:19] **Audrow Nash:** Hell yeah. Ruben, do you have anything to add for
takeaways?

[01:17:22] **Ruben Arts:** Yeah, the, hardest thing for us now is we are
currently, we, were all robotics engineers. Almost everyone in the company has
been a robotics engineer. And we are now all not running robotics from anymore
on a daily basis. So it's really hard to test these things and it's really hard
to make these examples.

We would love to work together with more of these companies that saw this as an
issue and now fix it, can fix it through Pixi, but might need some help where we
can, take them as examples and improve the product as it is right now. just one
simple example where I previously worked, we did the whole integration with
Conda and we went from an hour and a half of just op pip and installing it from
a readme.

it was one command and it would is equivalent to Pixi install, which to. 10
minutes to download all the packages and you would have an isolated environment.
So that's, my goal, to share that with everyone, that experience.

[01:18:21] **Audrow Nash:** Hell yeah. Okay. I love it. Alright, thank you both.
This was so much fun. Like what a cool thing that I got to, see how all this
works. And it's a wonderful tool. Like I, I'll be using it and it's exciting
also, it's it seems wonderful in the robotics space. It seems like there's a lot
of other potential too for using this.

just thank you for sharing.

[01:18:43] **Wolf Vollprecht:** Yeah. I think a few things that we haven't
highlighted yet is that we have very nice Cuda support as well, so Oh, wow. It's
the apple thing, so if you,

[01:18:53] **Audrow Nash:** that's a really good thing to highlight. Yeah. Yeah.
anything we missed

that in?

[01:18:59] **Wolf Vollprecht:** yeah, like Cuda support or optimized binaries is
also something that's coming. there's already a lot like big ecosystem of
scientific libraries on this Conda forge distribution because we have a lot of
like data scientists, machine learning, AI physicists, whatever, People that are
doing number crunching. very similar fields to robotics and that also, yeah,
it's just a nice community to be active in. And, speaking of community, one
thing I also wanted to highlight is that, we have some, like Robostack is not a
project that's only done by me or Ruben, it's a group of people and, especially
Tobias Fisher is doing a lot of work and Sio Zaro is helping a lot with making
sure that gazebo and other tools are running smoothly on Windows.

And so that's really a, community effort.

[01:19:54] **Audrow Nash:** Okay. That's great. one thing that I feel like it
would be good to cover too, what kind of limitations, like why would someone not
choose to use Pixi? like what, are some of the things you would run into or, I,
yeah. I guess why would you not choose to use it for different things?

[01:20:14] **Wolf Vollprecht:** That is a tough question.

[01:20:16] **Ruben Arts:** Yeah, I

have

[01:20:17] **Wolf Vollprecht:** like myself, it's very hard for me to imagine a
life without Pixi right now. I think if you, like sometimes maybe Ubuntu or
something like this, they have maybe a smaller set of packages that might be a
bit more sort of battle tested by, more engineers or something like this because
they have a larger like paid staff to do things, let's say.

[01:20:50] **Audrow Nash:** optimize only for, say, an Ubuntu target,

[01:20:52] **Wolf Vollprecht:** right? Yeah. So they have one distribution and
one set of like versions that they might test that they're working together
while we support, like going back in time and stuff like this and mixing
versions and everything. but obviously I don't want to say that things cannot be
stable. So they are stable usually, but, Yeah. You live a bit more on the edge,
I would say, with, with our solution.

[01:21:18] **Ruben Arts:** I am not,

[01:21:18] **Audrow Nash:** And that might not be as true with lock files and
things like

[01:21:22] **Wolf Vollprecht:** So lock files also save you from that problem.

[01:21:27] **Audrow Nash:** Okay. Ruben, you were gonna say something.

[01:21:29] **Ruben Arts:** oh yeah. The living on the edge might not be the best
way of saying it, but you live on the edge of what computer stuff is doing, as
in the latest, greatest, might be a better way of saying it. which sometimes
brings some, some, pain of being the latest, greatest worker.

[01:21:50] **Audrow Nash:** But, so I guess with the question about limitations,
is there any reason that a company wouldn't choose to use Robo Stack for like
their developer use? if, I'm a developer at a robotics company, is there a
reason that I would choose not to use Robo? not Robo pre Pixi.

[01:22:09] **Wolf Vollprecht:** So I, think if you are really at the robotics
company, like one of your problems might be that we don't cover all the packages
right now. intrinsic is only, or Open Robotics is only building the packages for
Debian. I'm not sure if they're doing for Fedora these days or not.

but yeah, basically like Upstream is only building it for Ubuntu, right? and so
that's, we would love to get there. So we would love to work with, those guys
and make sure that this is like officially supported and maybe the build farm is
building the packages instead of our own CI that runs some GitHub actions and
things like that.

[01:22:49] **Audrow Nash:** Ah

[01:22:50] **Wolf Vollprecht:** so having, I think that would be one of the main
reasons why you might want to hold off is that Yeah, the offic, it's not
official yet. I hope

[01:23:03] **Audrow Nash:** Yeah. I also think this conversation, like I'll
bring this to some of the open robotics folks and I hope for more official
support too. 'cause it seems like a wonderful tool. okay. Any, anything else to
add, Ruben or Wolf?

[01:23:19] **Ruben Arts:** I think there's one thing that I walk into sometimes
myself, which is we use this cached sim linked version of the packages, but we
don't force the cache on environments. So if my environment has Python three
point 12 and Wolfs environment he updated has three point 11, and I install them
both, I will get both versions of python, at least cached on my system.

So if you do need to think about sometimes, do I need all this cache? then you
can just remove it. Basically clean cache and, it'll download everything you
need again. But it at least is something to think about. It's, not a why not to
use it, but it's more of a. Make sure that you understand what it's doing.

[01:24:07] **Audrow Nash:** I feel like you could make that nicer

[01:24:09] **Ruben Arts:** Oh, yeah.

[01:24:10] **Audrow Nash:** through, so like additional info in the lock file or
something like that, potentially, or something else. But I. All right. So that
seems great. what do you guys, so Wolf thinking about the next year, and then
maybe three years, where do you hope you guys will be?

[01:24:33] **Wolf Vollprecht:** that is a good question. so first of all, we
have our immediate roadmap, right? For Pixi. One of the big items that Rub
already talked about is Pixi build. So we wanna make sure that you can build
packages right from Pixi to files. And we have our first prototype of that ready
since this week.

then we have other items that are more about software security and supply chain
securities. so we wanna integrate something called Six Store. I don't know if
you know it, but it's basically cryptographic signing of packages. So if Open
Robotics would decide to publish their own, Conda packages, then they could
attach a little, secret, cryptographic thing and, that would then make it, add a
check mark to the, package that would say, okay, this is officially built by
open robotics.

Or we, as prefix could say, this is officially built by a prefix. And users
could make sure that yeah, they only get authentic stuff. so that's on the
immediate roadmap I would say for Pixi and our projects. We are also, Ruben
showed you Rattler Build. And so we are currently working extremely hard on
getting that into this distribution so that they can make use of all of these
improvements because Rattler Build is also re-engineered on top of our low level
library that's called Rattler.

And it's much better to build Conda packages that way. And we have an amazing
community that's already trying it out. For example, folks from Nvidia or QU Co
or different companies are like starting to use it. And so that's also really
exciting to see. and then lastly, we would just hope that, we have much more
distribution of Pixi itself, because I wanna see, research papers, for example,
if you have a robotics research paper, right?

Like it's usually maybe you have a link to GitHub, but then can you actually
execute it like. What, like you have to pip install this or APT get installed
that and then it's pretty tough usually. And we would love to see more like
research being done with Pixi and make it more reproducible as well.

if, you have a paper that says PIP install this and will it work in 10 years
from now? I don't know. But like with the lock file you at least. Yeah.

[01:26:55] **Audrow Nash:** Like many research things, it's six months later
they're completely impossible

[01:27:01] **Wolf Vollprecht:** And so with

the

[01:27:02] **Audrow Nash:** get running

[01:27:03] **Wolf Vollprecht:** yeah, and with the lock file, we're trying to
solve that problem as well. And we're currently a anchoring ourselves a little
bit in that scientific community.

there and then, three years out, instead of people like doing GitHub releases,
we would love to see them push conduct packages and make that the universal sort
of format. ideally it would be standardized, like screws or I don't know, things
like that so that everyone knows what they're getting and it's one format.

You don't need to use brew, you don't need to use APT get, at least not for your
like, user level software. yeah, we would love to replace all of them.

[01:27:47] **Audrow Nash:** That would be amazing. Hell yeah. Big plans. I love
it. Let's see. Ruben, anything to add?

[01:27:54] **Ruben Arts:** No, I follow that vision completely.

[01:27:59] **Audrow Nash:** Hell yeah. said. so I. That's all for today. Thank
you guys. This was a blast.

[01:28:05] **Ruben Arts:** Thank you very

[01:28:06] **Wolf Vollprecht:** you.

[01:28:07] **Ruben Arts:** It's great to have you, or great having us.

[01:28:12] **Audrow Nash:** Yes, for sure. All right. Bye everyone.

​

[01:28:15] **Audrow Nash:** That's all for today's episode. I hope you enjoyed
this format and learned something new about Pixi and how it can help your
robotics projects. If you're interested in trying out Pixi or just wanna learn
more, be sure to check out the links in our description.

As we wrap up, I wanna leave you with a question. How do you currently handle
package management in your robotics projects? Are there any specific challenges
you're facing and do you think Pixi could be the solution you're looking for?

Thanks again to Wolf and Ruben for joining me today. Don't forget to like and
subscribe for more content and we'll catch you in the next episode.
