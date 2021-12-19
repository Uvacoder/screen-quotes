import styles from "./github-corner.module.css"

const GithubCorner = (props) => {
  const { customHref, bannerColor, fillColor, direction } = props

  return (
    <div className={`fixed ${direction}`}>
      <div>
        <svg
          viewBox="0 0 24.812499 23.8125"
          width="98"
          className="-mt-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <a
            className={`${fillColor} ${styles.sourceContent}`}
            href={customHref}
            target="_blank"
            rel="noreferrer"
          >
            <path
              id="banner"
              d="M 1.3051492,0.09273373 H 25.152786 l 1e-6,23.81146527 z"
              className={`fill-current ${bannerColor}`}
            />
            <path
              d="m 17.56946,3.2292631 c -0.6957,0.2991509 -1.006404,0.7044663 -1.212992,1.1333673 -0.577869,-0.159128 -1.915301,0.9446971 -2.176059,2.1983743 -0.260758,1.2536771 0.782095,2.2602146 0.782095,2.2602146 -0.242524,-0.00577 -0.51491,0.044882 -0.863378,0.3004604 l -0.616689,0.595984 -1.047243,1.0576743 c 0,0 -0.213658,0.227692 -0.516106,-0.08165 l 2.645087,2.637963 c 0,0 -0.231798,-0.202006 0.105446,-0.500332 0.450868,-0.499606 2.005563,-1.642466 1.861867,-2.441823 0.355444,0.260185 0.883238,0.759154 2.109338,0.648751 C 19.866928,10.927841 21.074395,9.5942063 20.9952,9.0005274 21.378569,8.8157768 21.759657,8.5621931 22.123207,7.7826636 21.90954,7.4463118 21.290353,7.2229877 20.464837,7.0571671 19.932538,6.0980716 19.168229,5.4255914 18.29511,4.8875302 18.137666,4.2030794 17.972947,3.5299217 17.56946,3.2292631 Z"
              className="fill-current"
            />
            <path
              d="M 14.103365,9.125919 C 13.66435,8.9780732 13.32884,8.7008454 13.174521,8.1971125 13.102542,8.0140677 13.155502,7.7695858 13.199599,7.5064609 13.254688,7.1776305 13.329547,6.8720778 12.980804,6.3854829 12.726587,6.142736 12.619695,6.2043323 12.686319,6.6245376 c 0.04521,0.2068994 0.105345,0.3916318 -0.105382,0.9790115 -0.243569,0.4729329 -0.204204,0.8940604 0.05829,1.2743258 0.219799,0.3917908 0.536183,0.6126948 0.845728,0.8456926 z"
              className={`fill-current ${styles.githubCorner}`}
            />
          </a>
        </svg>
      </div>
    </div>
  )
}

export default GithubCorner