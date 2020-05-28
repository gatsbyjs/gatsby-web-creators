import React from "react"
import Layout from "../components/layout"

export default function Home({ data }) {
    return (
        <Layout>
            <div className="home-page">
                <section>
                    <h2>
                    Kitties
                    </h2>
                    <figure>
                        <img src="https://cdn.glitch.com/ed4401b4-63ba-4d6d-9a5b-8d29ce101a74%2Fbagley.jpg?v=1585809474414" alt="Bagley the Cat with her tail floofed up and rear legs back" />
                        <figcaption>Bagley the Cat</figcaption>
                    </figure>
                    <p>
                        <a href="https://codepen.io/_massimo/pen/ZpdXjm" rel="noreferrer" target="_blank" title="Opens in a new window">Cat CSS loader animation example on Codepen.io</a>
                    </p>
                    <p>
                    Roll on the floor purring your whiskers off. Hack. Experiences short bursts of galloping after going to the loo i love cuddles. Stare at guinea pigs cats are the world love to sit in a box for hours cat snacks, yet sleeps on my head always ensure to lay down in such a manner that tail can lightly brush human's nose.
                    </p>
                    <blockquote className="clippedText">
                        Cats are mysterious.
                    </blockquote>
                    <details>
                        <summary>More cat ipsum</summary>
                        <div>        
                        Cats secretly make all the worlds muffins jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed but kitty poochy and spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce and the door is opening! how exciting oh, it's you, meh sit on human prance along on top of the garden fence, annoy the neighbor's dog and make it bark. Knock over christmas tree cats making all the muffins slap the dog because cats rule, and soft kitty warm kitty little ball of furr claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? good now the other hand, too. Ignore the human until she needs to get up, then climb on her lap and sprawl destroy house in 5 seconds.
                        </div>
                    </details>
                    <hr />
                    <h3>
                    And here are some cat videos
                    </h3>
                    <iframe title="Video: Cats and Domino" width="100%" height="315" src="https://www.youtube.com/embed/7Nn7NZI_LN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
                <section>
                    <h2>
                    Doggos
                    </h2>
                    <figure>
                        <img src="https://cdn.glitch.com/ed4401b4-63ba-4d6d-9a5b-8d29ce101a74%2Fmajestic-rainier-mccheddarton.jpg?v=1585809479760" alt="Rainier the labradoodle in his black snowsuit in the snowy ski backcountry" />
                        <figcaption>Rainier McCheddarton</figcaption>
                    </figure>
                    <blockquote className="clippedText">
                        Dogs are excellent friends.
                        <cite>- Someone, definitely not the dog</cite>
                    </blockquote>
                    <p>
                    Doggo H<sub>2</sub>O snoot extremely cuuuuuute big ol pupper boofers, shooberino doing me a frighten. Doggo long woofer ruff long water shoob shooberino borkdrive ur givin me a spook, smol borking doggo with a long snoot for pats boofers doggorino boofers. Borkdrive very good spot fat boi thicc sub woofer, heckin good boys thicc adorable doggo. Shibe adorable doggo woofer length boy borking doggo tungg very hand that feed shibe, the neighborhood pupper long woofer such treat snoot.
                    </p>
                    <details>
                        <summary>
                            More doggo ipsum
                        </summary>
                        Doggo ipsum snoot extremely cuuuuuute big ol pupper boofers vvv, shooberino doing me a frighten. Doggo long woofer ruff long water shoob shooberino borkdrive ur givin me a spook, smol borking doggo with a long snoot for pats boofers doggorino boofers. Borkdrive very good spot fat boi thicc sub woofer, heckin good boys thicc adorable doggo. Shibe adorable doggo woofer length boy borking doggo tungg very hand that feed shibe, the neighborhood pupper long woofer such treat snoot. Super chub much ruin diet noodle horse very taste wow, pats length boy. Bork vvv aqua doggo length boy long doggo heckin good boys and girls, snoot shibe borkdrive very taste wow. Many pats shoober noodle horse big ol, snoot long bois borkf, puggo super chub. Heckin angery woofer puggo long woofer you are doing me a frighten aqua doggo super chub, doing me a frighten long bois yapper. Long woofer aqua doggo heckin angery woofer vvv, snoot. Borkdrive heck fat boi, long water shoob.
                    </details>
                    <hr />
                    <h3>
                    Dog videos
                    </h3>
                    <iframe title="Video: Doggo and egg" width="100%" height="315" src="https://www.youtube-nocookie.com/embed/K2GpGB6NXzI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
            </div>
        </Layout>
    )
  }