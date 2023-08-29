import TestCard from "./TestCard";
import tbg from "../../public/dronebackground.jpg";
import "./slider.css";
const testdata = [
  {
    content:
      "I attended a workshop conducted by Kiit Robotics Society in my first year, and I've wanted to be a part of it ever since. Then, in my second year of college, I joined Kiit Robotics Society. It's certainly much more than 'just a society', and has helped me in a myriad of ways, from building my confidence to gaining hands-on experience at inter-college fests and so much more. The KRS room and its members will always hold a special place in my life.",
    Name: "Bitata Ghosh",
  },
  {
    content:
      "Grateful to KRS which provides us a great way to learn and grow practically as engineer in our respective domain and explore other interests.",
    Name: "Rohan Singh",
  },
  {
    content:
      "My Time with KRS was one of the greatest highlight of my college life. The learning, the teaching and the experience was an eclectic one. Feelings and experiences which I shared  with all the members gonna be with me forever. I would also like to mention my team Error Bots. Nights spent working on our combat robot are a core memory in its self. I am honored to be a part of such great Family. I wish all the very best to the future of KRS. May the society achieve feats beyond imagination.",
    Name: "Navdeep Kumar",
  },
  {
    content:
      "I am very much grateful to KRS as it helped to enrich my technical skills and got to learn much more from the team and the events we conduct. All of these were useful in my career. I hope KRS maintains the same zeal and enthusiasm as it has been for so long.",
    Name: "Patnana Sai Sandesh",
  },
  {
    content:
      "I joined KRS when I was in the 1st year of my college  , having no knowledge of any technology what so ever, the seniors ,the teachers helped me to learn a lot, gain knowledge in various department along with this I also made great friends and peers, been to various colleges and participated in various tech fests, all these memories has a very special place in my heart which I Will cherish for a very long time to come",
    Name: "Saptadeep Banerjee",
  },
  {
    content:
      "KRS is the best place to theoretical skills into practice problems solving projects .",
    Name: "Utsav",
  },
  {
    content:
      "KRS is a great place to meet and interact with technical minds and grow in all aspects.",
    Name: "Vandana Shekhar ",
  },
  {
    content:
      "It has been an amazing experience to be a part of KRS. I have received ample guidance from my seniors and learnt a ton of new stuff. I will forever be grateful for the learnings that I have gained at KRS. ",
    Name: "Sagnik Roy",
  },
  {
    content: "Great place to learn skills that you can't learn from classrooms",
    Name: "Advitya Dutt Kaushik",
  },
  {
    content:
      "KRS was my first society that I joined. It helped me to be who I am today. It was a great learning experience from the seniors as well as from other members of KRS. I really feel blessed to be able to be a part of this family. I also met a lot of really good people here who are now very important part of my life. Finally, I wish everyone all the best for the future and hope KRS will go a long long way.... Cheers to that. Thank you",
    Name: "AVIK SIKDER",
  },
  {
    content:
      "A hub for wonderful gathering of technical skills and innovative ideas..A wonderful potential development of skills from helpful seniors overall..",
    Name: "Raushan kumar",
  },
  {
    content: "Everyday is a new opportunity to learn in KRS",
    Name: "Rajdeep Das",
  },
  {
    content:
      "KRS is not just any society, its like a family , a very big family where you can come any time you like but you can never leave... Nostalgia hits upon inward eyes everytime while trying to share memories of KRS, words fall short.. lots of love and best wishes for all my juniors , keep up the good work and make KRS shine always..",
    Name: "Arijit Dutta",
  },
  {
    content:
      "KIIT Robotics society is the best thing that happend to me in my college life...it gives me the opportunity to excel myself in every field...I am always thankful to it ♥️",
    Name: "Ayush Dishu",
  },
  {
    content:
      "KRS to me is family. From robotics to learning life lessons, from seniors' guidance to juniors' love, from having fun together to crying on getting separated, bond that KRS has given me is priceless. And i miss u all. Stay together, Grow together❣️",
    Name: "Ipsita Patra",
  },
  {
    content:
      "KRS may be a technical society but for me KRS was more than a society I came across...KRS not only give knowledge but give beloved brothers sisters and friends in college..A family I miss every day in my life",
    Name: "Sourav Misra",
  },
];
function Testimonials() {
  return (
    <div
      className="bg-cover bg-black py-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${tbg})`,
      }}
    >
      <section className=" text-gray-700 ">
        <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto  py-6">
          <button
            className="p-2 rounded-full bg-zinc-800
                border border-solid border-zinc-800"
          >
            <h1 className="text-center font-poppins text-xl font-bold text-amber-400">
              TESTIMONIALS{" "}
            </h1>
          </button>

          <p className="font-WorkSans text-2xl text-white pt-3">
            What ❤️️KIITians say ️
          </p>
        </div>
        <div class="slider">
          <div class="slide-track">
            {testdata.map((testdata) => {
              return (
                <div class="slide">
                  <TestCard data={testdata} />
                </div>
              );
            })}
            {testdata.map((testdata) => {
              return (
                <div class="slide">
                  <TestCard data={testdata} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
