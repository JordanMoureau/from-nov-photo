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
        backgroundImage: `url("https://lh3.googleusercontent.com/pw/AP1GczNT3ROssJ3xg0yV0_ndKrMB-YGc3X0zjawIxIMvL7uhAOu7Cesso4PFiFx-rcPrlirGeiSxKL3FRfxPc3TFrtIF98TGGLd2wFkRVa1EshOSIcexqIv0lhgVW59r5U6DT5Azq5Pb94leDQksaSzrlQ9cD_tKzDoYC-0FTIgLva2A9cI4c5wWE4kQbdXhvXfEmRrlP_dPWfZ7GrI3mrJt4y3u0OIAZywExFhs5FeQ5woF5H23SUc-V4kwjSBX8H8Yuib252DoqwCA6c0swfD2x7JJmjcK9-iCi5JQTjLBUWP6q1E278JnrRZy57zVk0j-wnOlZPx6eBY209L1_tug3Pa2ohKj4_KDaJuIKaIoHaJ6l0HQ3WaKtoZpLDrdjV91pECh3Qcq2JWLMk_P5CPNEM4eePZU_WHCmug4XhLnLAz5EXhqUmstXJWOK54VqzM_-teEm9xIId1E_0AzycZQ8-awY0B07sCGRDQyo_OUln-Hs5iDgR8fzlyPOIXLPJih1kASvbwaljfxOA7XVpxfNkmKQmSDeGB0-UTZPBr0rmKQ63BKA9g5n8r9bBGK9W1JLflj9UgWuS_NlccC5Q_yE2hj8tdLX3Za4N20vO-Xr1phP1Mhj2JjhFT-YbK1I0sWRKFQ14mEeMXsKM2P29mfFyy7AsrASv6bWAqtNOU6HYQv4U5ewGgzGk43vx6jADB786uy1kpHzTsjxPh8xbvhFG43b8yh37O-KQ5LVeXqz8wecIU2vhqhtLs1WCpcoQQVaoZIm0sX6wiwGhzFRM4ClM74Jid49lgLcx8ul1OPzPxZ2WrjIlgoARiEXU65HV3RAqDe7HsFLRK2xm15ynA8pNOjWyFjGQlP0OqDFAPwaiDR8FE5rLp5QMjAW1SmmC46bL1p-QQ_X0-_Udak-s9tgJc=w883-h1210-s-no-gm?authuser=0")`,
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
      <img src="https://lh3.googleusercontent.com/pw/AP1GczNcWVy2zs1qwL_8EvuhF_GVnrXx4ymYLOCeepJkS9bjkdJJkcmkXIeHVS_ngBncIXa06ydmGlikRnAK0DxzHq69oI9MS71I-mHQzM_DW2A7VGFDDwnkpQCT3hV6LaE6V0YNeZ_2F3x40f5wMiHNgYYrlyZ_DCgxjJTWefaFaek_7pvZXniMMCSkn9XNn08JcB8FXADtovHcSWcBCQNwVVP-egaw1nq4vabAJa9kA63JL7oMUjqhkjy1DLF5YTDYKKPy1kAJbd4fxS81zpKVQWYNLY3gmRJH3nUglCZjlqSK268Vg2lzi1Hc0Hopw16ZcrMuswUAU2oS3kSp9ZCqT9tRjA0v3fm9fjxyQiBjmDZ3O2qPatbh14q_CSwBk2CfF6y8BcERPEcEmUM_SIB1t-Otr6OQg_aAKfM0xxj6zfMddywzO-RPTBWDqdVjI2A_U_kDc2kqrFeu83lBX-XPk1j4tmoHYVH6IzwCMbue4odOLzPYaUZrDV0C3mG4AYVhGLddzJRsIru9o8niGASPAWfmcQDg3_OgmiOEoi7VtgqHoZxbuwIZ2o7D7ePad8yFQSk1fGu56mrnFSFtyG6SYi9crwX8NVBwFuOnJq6rG1CEiV3Mf8FLw_ghqZJQ_vI779JUIm9wxKcTseXga-aSJKOYI6MjEINTCIxp7hfs35xfmTLTTvIsgGSDd_KB9QlDGD6JkGXEPAegsmxL3fUPzJI7VMLb2ZO0l-BznEp-ZyzrrmZZWayt3Zt4Az2qG7HJ4ZigdA4rCXsnbDtAumkJuOCR61Ndt8rE11ipW6x5sVV8IQYC9pmW4GzPVLky999ScVmeDU0gFVp7-Zmdeo10jRPQlBQo7e0o2fZbME1OBEg-LDcXcNKgsvkaCMv0zr1oXFJaiFIR4wnJqwtN7L7iG5c=w2258-h1506-s-no-gm?authuser=0" />
      <h2>A touch of whimsy for your everyday.</h2>
    </div>
  );
}

function MiniMe() {
  return (
    <div className="mini-me">
      <img src="https://lh3.googleusercontent.com/pw/AP1GczOhcO-AYfwC4sta64yVCfgXTFuy5KnR6dXVZ_51cO_6CakggXmAuVaKGQRA5mcTAi1haWg_O7tgK86N1tIUCynJOWMIOt4IakMEDdIc6B8aWzxg38NqzA8dvtOFsDyvE1qWkwhFD9gt6ANm6kFxNFNMs-7qwcbZNRc45SsP8ZjqBB_g0rm7PW1i85TlWAxj0tr1rxm7uXBikgoDSUV1tEdElPzvoXACdUzsztxl3FHoaQ6hGQQJ1zZDnmUyQGTZNUDZXuoaY3lqfY0rpwIAFxa3M3K29LOQ2VqHLeqb1NZyYXP5Mz_VW1eACr5bGdye5GCn5Q9ikjQBHkCyVmVgNnKVabNCECRcF7XZ4HlMsVmwKPJB8aZaOnsa3e43NmFI0B4SMqY6GBV1s-sgX6Al8lolfyivZMAF0gOdbXQzD02gxd8Mg7yKo6o9voeLT3cw881isUgMj6X7XuUG7SpMfaMIj4U3DxND1cuzAD7oMExZzvRjzVfHVq7mgDIf-49N7LK9Hi9vRt7eIGF-5riHGaSo0u3f3hvsJxpqAMvCwD5DB3CzteaThA1vxsQ9D-UNyXcaVQx9rmNyWD7XU0pywmuwQzC8vD2W5tjD2jjPtQDsKjX97M62lt3D-zi7_SmvMcazT_nmItar787LsV7HNA7zDe_No5MSIAImjO9BJyft8-51ZzrQDXdyIiI9zVsnxDTifg2b3JcMPqcdQcascsODj__R9qzncnCxuB4wKJEoXi-s5tLaznS58jCX_25Pw-Ev6UE3bq8U0lgK_doKplId82ojCfDutF8oZS9uDDRLSixnCyXuAJX_VURXQ2_H97Gw31Bi9nYN1h-_YYQMGtMwdPlS5LMSY313FPhdj6qyEcjYU4RmX7_5l2VU-a5TvnpkxWXYmXu4kXjvCFFUrtE=w1445-h963-s-no-gm?authuser=0" />
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
