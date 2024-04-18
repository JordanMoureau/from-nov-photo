import Nav from "./Nav";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="hero-container">
        <div className="hidden">
          <Hero>
            <h1>From November Photo&shy;graphy</h1>
          </Hero>
        </div>

        <Hero>
          {" "}
          <h1>From November Photo&shy;graphy</h1>
        </Hero>

        <div className="hidden">
          <Hero margin={0}>
            {" "}
            <h1>From November Photo&shy;graphy</h1>
          </Hero>
        </div>
      </div>
      <Blurb />
      <Whimsy />
      <MiniMe />
      <Booking />
    </>
  );
}

function Hero({ children }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("https://lh3.googleusercontent.com/pw/AP1GczPDQWnBY7_0fTrdS3ZCPEbqCtYC1n5ohbVBpqDtb84UcLs9mv-vWaEnO7-kwp65gQxhf7MmOSwpc9ZHacfUow6RWu8OST5g3zIiAkZVc3MtoyyN9KaPv-gRpaUP_xumrkxj8RuSqiVK4xR3fTY1VwOzkVsPlGdIoQYcGWiUkZ4ImAmJOkeTRi97EhsjOEcggDbNWCMzYk5NX2yE6aXfqlgATe-e1OoAZULbrpRlYBOmE1ViL0OxfX68OCDP6y4gm7OqU1KlZJDIPs1Vc9lrU7PvyEfALIkQ5ZHtZlgS_ghnEQwjlh6S5obWar6mmHUVzZ8JzBPZYO9Lm90x6_MCN1Jd72lrArR4ERgUxPVIsTu8KpEJQjddN1BKIR-PdoY5VW16dxX9P1GijkzYfXoDIepqFiv0_Hs7RA3W_u4pwMXwMbTUKZR82iYdepYZnXgLAUOFH8KupAkUeVfhu-I8sSZPKhN8ffPXdNI7PuX0tZtGHZ54qZsHhTaEw_BeTrhMjFUlUi3HZuCPB6jG952qKr0KuTAx1lVXh8crWM5GjraPQRnQmImIC0VEEl7FmWcsDakX_7PqXbSKKEvdUi3V7qixyxofvOR6No_Nc1TI77cE-YlYPZ3CcARX99A0v9E-jfPuwq5uiZs41HX8ikpE0kIEqGjb4hb1OiZ4XzNelnKnxwB3JVNdfYt5Xxt9tjC8B3fUy_y8LdmcGqYOFF6ycGoR32yHzlqn96yGjlxneFzMzMo2ArO5PTDd0uMe6caQdWXXIPCl23ZHxt3MpDDHJywuWxaTP0k9E2f6MEEQxVmU0Cpo-Z6K9l1EYEVi0djI6NszQI881RPwjKc0OstSmNx2q3wD1YdUGolO5tNzDwaQipXrHtiAioSB9X6GrDKfhD0sZsZCuLBOnORLUS6Pfqo=w883-h1210-s-no-gm?authuser=0")`,
      }}
    >
      {children}
    </div>
  );
}

function Blurb() {
  return (
    <div className="blurb">
      <h2>It's a tender, sweet, warm love. </h2>
      <h3> That's my vibe. That's what I'm here to capture.</h3>

      <button>Read More About What We do</button>
    </div>
  );
}

function Whimsy() {
  return (
    <div className="whimsy">
      <img src="https://lh3.googleusercontent.com/pw/AP1GczMc3cDQYlcu4it69ZfEm2us7uUC7vjf773aTFe2f5DKq5LGM1U__3Wp8xSImMVHWz0tKwbUs2h8W_xWIMAzxP9qy6t_OcRCSjNSg65LA1P-o1zowcXsdX9pUu3fUAGNIhVPu9HXQxOHURTHIu9CEQ60vmQyqt9RtKOPDUKmH3oJZUe9OZ4L16piHp8p81UdOzjH3sIToxgYyGpvFVa0ScieaMe4UR5s-iSqjFxkp93Mxi1iPTGGu4fU5g_WrIOJSuqcYpKJHd71Kwk2wCOjM9InNOHy013wowKevDIvRgg6FRRKMtpMSzlleQ4VeXYldkm3T5eqBDi8cvLXWoTTIQIZdlvFDIlqcEAvA-5DIPticrozMkvD8TfETbjba8LgIxBcqCiF3vkiHFF9FblqEr5B4z-LtCsD6dM7dCmgbvzxtmzrZl0wwKtzjc4eHR2XyxMAOQk9kqOBijjSwocyBsUj-aIuSpB--8D0oBLgW0NoTn1Y2T3PV0DWrkNwc5Ei-SpFq4yC28Y8XAbnQIDrVZF5-C2YI2rLQE1sRbh6_q3jqeYe5HouVLL2sv5wGgxUH0ASfKVwWoHSQHXeW38Syf_gJSqPxdt0rpsQkQ9DQfkdSVzTOyqh-Jq2-zJB1YC3h5SKS88udYll2BQi0ycWUE4_0aCmmTwwuZnllb6HL9Au3FRLAGqM_miufl52_9U6aXvnsto9j1OptcaFZnMkgFq4k4YhASHzj0PYwwN4tU7IDKYib3_ZVKZhE705bHl_gGo1lZJUfStEZv2yvhsQf5A1jkvR4PAuHeGroDOQ7OUTBMifkKV4P78TYnRlZblKViKZtLSWpoZTxXibjQARsiUepuUYP4qUjGtap2CBrjffFxmKqdU_ZYxHdv1H6DDeOQv4zZC1a5NtP-Yu7G59TRE=w2170-h1446-s-no-gm?authuser=0" />
      <h2>A touch of whimsy for your everyday.</h2>
    </div>
  );
}

function MiniMe() {
  return (
    <div className="mini-me">
      <img src="https://lh3.googleusercontent.com/pw/AP1GczOaK49safNQY-5w2GCSmys2x1_nR5rG7VE2uDXagzJxFXzilDDc_aWxpTj0Bb0tZzRIkTvmx4q0D-gDQ1CNxWdZ7ayqUWI-WDZemOEF5bf_ed7nk-x4hUKhR3XfiPWxMhOHrJG8jreCsQl7OcJoOLkDcYJpt-U3QNLR6LVHhGxZBOKyE86jJSwF5P4JBB8E16HjHyIt_E7MGBbjxERaYPi3689kOFKCkDgeAzduM48k610EftSMrD7F2HMgbSoLj_njqkcsXzz2_9ADyk4doAT42uSz8gPktTYNNpVkuWD0fEGJnC9I9XQW_BTz1vN1ZyXfg3vPk8zidjEvN_QsIscNGn6-ltHM5EwCYq2mdxhcv_jpGjvEFJyJK6FAQFefnwhX9uGToTjZmI07wVjDQpWgg3tInBj8kdYbfzQM3AgAntxlCMCM_k-l1F5Q8NnOjVjeHF2PrUV3hHi-fYhzTCTesUPq50Ug9_tvTqJFYYfwnlLM06fBCEfGbouA2vdMuGwCLt13nr-nJtc8kyPuJoILIoQD7enKRfh8w2soVKNSaPMj1RPg8ZRAyb6lDn-bNww8j9KLS6Uh5I-HUGmEXLEILqoaJqhgR0E3078dyxSxpA3WVxqd1SwC8UD7EbCyPI47WaF6l58bJGPuNxznkAs5jk6XGTBtDBNJGu0zZzkgcZ6N1emHiVmOq4p-Pk_1_tpA8mK_ej-iPCv30EZdbyj0cHBIjeRPsJBPM6UpkMI5bFthjwtCXHPVN8peouwZh8CsHGrqGQvRTBTPIwsih2_XYHt_E5A2FnZZmaKObVvgrNEuXNXZPSeXdbV2vXApXOgqoaaeE4-q8M5VzbrDWNPZEtSuWGw8gLHulPKVxvrnr4wiCDyCQrIpHJgzvI_nyQWHpoSsZOE49eEJr2dQXgo=w1445-h963-s-no-gm?authuser=0" />
      <p>
        My name is Jordan and I've been looking at the world through my rose
        colored lens since I was thirteen years old. I studied at a liberal arts
        university in deep southern South Carolina, on a schoarship to be part
        of their photography program.
        <br />
        <br /> Travel and lovers and friends and family were captured in the
        years to come until I found myself here. In the same place I feel I've
        always been, doing what I always have. <br />
        <br />
        <em>Surrounded with love.</em>
      </p>
    </div>
  );
}

function Booking() {
  return (
    <div className="book-home">
      <h2>
        Families | Maternity | Newborns | Weddings | Couples | Events |
        Portraits
      </h2>

      <p>
        From November Photography is a professional, (very glamorous)
        photography service home based in Liberty Lake, Washington, but
        photographing all over Northern Idaho, Eastern Washington and even
        ocassionally Seattle. Families are my bread and butter from
        weddings/elopements to maternity, newborn and on. I also cover every
        kind of event with photography and HiDef videography. <br /> <br />
        So reach out, tell me about what you're thinking and lets make it
        happen.
      </p>

      <Link to="/book">
        <button>Lets Make Some Magic</button>
      </Link>
    </div>
  );
}
