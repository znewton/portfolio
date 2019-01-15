import React from 'react';
import DadBikeRide from 'assets/about/DadBikeRide.jpg';
import MaloneFixie from 'assets/about/MaloneFixie.jpg';
import StigmataSFCoast from 'assets/about/StigmataSFCoast.jpg';
import HomemadePasta from 'assets/about/HomemadePasta.jpg';
import HomemadePizza from 'assets/about/HomemadePizza.jpg';
import PestoPasta from 'assets/about/PestoPasta.jpg';
import ComputerAtCoffeeShop from 'assets/about/ComputerAtCoffeeShop.jpg';

const about = [
  {
    title: 'Biking',
    slides: [
      {
        body: (
          <div>
            <p>
              Currently my greatest passion, bikes and the culture involved with
              bicycling are often my greatest motivators for finding direction
              and community.
            </p>
          </div>
        ),
        image: {
          src: DadBikeRide,
          alt: 'My dad (right) and I (left) on a bike ride in Minnesota',
        },
      },
      {
        body: (
          <div>
            <p>
              In the fall of 2018, I built 3 bikes from the frame up. A fixie
              for myself from my old Salsa Chili Con Crosso frame, an all-around
              cross-style bike for a friend in Portland from a Surly Cross-check
              frame, and a single-speed commuter with a friend from only parts
              found at the Des Moines Bicycle Collective. Bringing bicycling to
              more people is one of the most rewarding things I've done!
            </p>
          </div>
        ),
        image: {
          src: MaloneFixie,
          alt:
            'My friend Malone (left) and I (right) standing next to his new commuter bike',
        },
      },
      {
        body: (
          <div>
            <p>
              Does it get better than exploring the world with the power of your
              own 2 legs? I think not.
            </p>
          </div>
        ),
        image: {
          src: StigmataSFCoast,
          alt:
            'My Santa Cruz Stigmata on a cliff looking out over the Pacific Ocean off the coast of California',
        },
      },
    ],
  },
  {
    title: 'Cooking',
    slides: [
      {
        body: (
          <div>
            <p>
              In 2018 I started cooking for my friends significantly more
              frequently, with guest counts increasing from just my 2 roommates
              to 10 people for pizza night or 8 people for homemade Ramen night.
            </p>
          </div>
        ),
        image: {
          src: HomemadePizza,
          alt:
            'A pesto base pizza on homemade crust topped with roasted red peppers, chevre, and mushrooms',
        },
      },
      {
        body: (
          <div>
            <p>
              The community aspect of having large groups of friends, some of
              whom are meeting for the first time, is one of my favorite parts
              of cooking. Being surrounded by the happy chatter of friends
              building new friendships around the kitchen counter and the dinner
              table is something truly special.
            </p>
          </div>
        ),
        image: {
          src: HomemadePasta,
          alt: 'Some homemade noodles with mushrooms and bread',
        },
      },
      {
        body: (
          <div>
            <p>
              My other favorite part of cooking is serving up delicious meals to
              smiling faces and impressed praises.
            </p>
          </div>
        ),
        image: {
          src: PestoPasta,
          alt:
            'Pesto sauce on fusilli noodles topped with mushrooms and tomato with carrots on the side',
        },
      },
    ],
  },
  {
    title: 'Coding',
    slides: [
      {
        body: (
          <div>
            <p>
              When there's a problem to be solved or just something mildly
              inconvenient, my first solution is to qhip up a web app or shell
              script to make life easier for me and/or friends/family.
            </p>
          </div>
        ),
        image: {
          src: ComputerAtCoffeeShop,
          alt:
            'My Surface book running Ubuntu off an external HDD at a coffee shop in Minneapolis',
        },
      },
    ],
  },
];

export default about;
