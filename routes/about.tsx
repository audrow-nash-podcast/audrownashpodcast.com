import { PageLayout } from "../components/PageLayout.tsx";

export default function About() {
  return (
    <PageLayout title="About" currentPage="about" includeSubscribeCta={true}>
      <h2 class="text-4xl font-bold mb-8">About the Audrow Nash Podcast</h2>

      <div class="space-y-6">
        <p>
          In 2014, I started interviewing roboticists because I was fascinated
          by the field and hungry to learn from the people shaping it. Today,
          I'm still at it—but now I get to bring you along for the ride. On the
          Audrow Nash Podcast, I draw on my background as an engineer and my
          years of experience in the trenches of robotics to have in-depth,
          technically meaty conversations with the entrepreneurs, engineers, and
          visionaries working on the frontiers of intelligent machines.
        </p>

        <p>
          My guests range from startup founders to corporate CTOs to academic
          experts, and our conversations cover everything from the latest
          algorithms and technical architectures to the thorny business and
          societal challenges that come with deploying robotics and AI in the
          real world. I don't shy away from the hard questions or the messiness
          inherent in any cutting-edge field. Instead, I strive to embrace the
          complexity and paint a nuanced picture of the robotics and AI
          landscape.
        </p>

        <p>
          Ultimately, my goal is to create the podcast I wish I had when I was
          starting out as a roboticist: one that demystifies the technologies,
          reveals the human stories behind the breakthroughs, and grapples
          honestly with the implications of the intelligent machines that will
          increasingly shape our future. So whether you're a curious student, a
          grizzled robotics veteran, or just someone who wants to better
          understand this transformative field, I invite you to join me on the
          Audrow Nash Podcast. Together, we'll explore the exciting,
          challenging, and sometimes bewildering world of robotics and
          artificial intelligence.
        </p>
      </div>

      <div class="mt-12">
        <img
          src="/audrow-and-eve.jpeg"
          alt="Audrow Nash with Eve, the humanoid robot"
          class="w-full max-w-2xl mx-auto mb-4"
          loading="lazy"
        />
        <p class="text-center text-sm text-gray-600">
          Me with Eve, the humanoid robot I worked on during my internship at
          Halodi (now 1X) in 2019.
        </p>
      </div>
    </PageLayout>
  );
}
