import React from "react";

const ArticleCard = () => {
  return (
    <div>
      {/* Designing Component */}
      <div className="container" id="articleCard-design">
        <h3>Most Recent Articles</h3>

        <div className="row" id="align-design">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card" id="padding-card">
              <img
                src="https://www.guvi.in/blog/wp-content/uploads/2024/06/Feature-Image-The-Role-of-Database-Administrators-Important-Skills-and-Responsibilities.webp"
                className="card-img-top"
                alt="img"
              />
              <div className="card-body">
                <a href="#" className="article-link-design">
                  <h2 className="card-title">
                    The Role of DataBase Administrators
                  </h2>
                  <p className="card-text">
                    Important Roles and Responsibilities...
                  </p>
                </a>

                <div className="article-card-footer">
                  <p>29 June 2019</p>
                  <p>5 Mins Read</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mb-3">
              <div className="row g-0" id="padding-card">
                {/* <div className="row" id="align-design"> */}
                <div className="col-md-4">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFRUXFxUVFxcWGRUYFhgWFRUWFxUXFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mHyUyLS0tLS0tLy0tLSstLS0tLy0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAD0QAAEDAgQDBgMGBQMFAQAAAAEAAhEDIQQSMUEFUWETIjJxgZEGUqEUQrHB0fBigpLh8SNDchUzU5OiB//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAsEQACAgEDAgUCBwEAAAAAAAAAAQIRAxIhMRNBBCJRYfCBsTJxocHR4fGR/9oADAMBAAIRAxEAPwDCm6u51tFY09SAh9qAF7VHxHPASm9ogkSeS7iaoIsAOQSYqXV+091SH097KPfGhQatUmESrESPVAcEqN4pHHP5qZQReBy6rtUzdDL0UaIC+lBul3i6cyqOdaMoKWk1U6M91NCNGdE6KBOgR6dDKJd6c1Ok16ukyG4UlBrYQgrZfM2CQxRMqHE1x5ZNmc6kQuBpTTmlCLlm4nSpNl6WHc5FphzLImBqED8EOrWMkpUZNttoSxFElL1KJC0HPlCqMLlLR0Qm1yZ8KQjPokKuRTRupIGAnH0G5UFtIlSCLIoiW/DA5VyEUqQlRdgoXIRci6GIoeoGxkladXAMDJ6apPRVLyd00jOWqT2YCFIVyFyFNGtlIUhXhSEUFlIUhXhSEUFlYUhWhSEUFn0f7XtEIVWJshuIcBFnb9Van1XpnyiilujgCmdWNOTZcfQIvqEDtFearNon0RaQumqODnUIFKajyIsfaDcDZUhhItCcxmHA0Q6WCfIBY7vad0ybA2EXsRpzRaLg01qQg+xjZNYO82Xr+CcApCjVbWonO7/tvcQ2PNtyEFnwswDvYhregZMzpEvCSfsZz8Vhe2pWeZrPc0cuSUNRxEkC269274VokWxIaLf7LSbTeXVCRPS1ktiPgbPHZV6DotB7SmT1vLZ9gk5F4suF7alZ4N1Z8zM9FR1eT3myFu8a+FcTh256lFzWfOIcz1c2wCQ4fw+vWJNOn2mUScokADcwpbVXZ3VXYSbgw+SHBvTmkcRhsp1nyTdV5a6+oOmyE4knN78lLRrByXfYu2sMsdPZIvcQMuybbinCRAh2vNG+xFzZF+ahqxpqD3MmgJMSB5o9MkbLuIcZBI0sozECRIkKaNm3JcBmYXMVzG4EASIK59ojojvqgtBLhfbl5p0jK5p2ZhshCkSVo1abMtpzT6QrYbAk3/BTpNuqkrMqrRIVAxbNbCRZ1kg+neFLiXDLqAQm8LQaRdA7IrSwPBnPvmhCQsklXJk4mlBIGiEAtHF4fKY9Ev2coaLjktCzgqwnH4R0TCWhKjSM0+CkKQrwpCVDspCkK8KQigspCkK8KQigs9thQC4AmPNGqUIJ5TZZ9NxmU/iG1GtaXCA64K9FHzk4vVsyOOU6z5aLraslVaJGitRLbzPSOaZm1sanDWNe4Nd3Sd9vVezwHwtmbcT1XiuEE5gY3H4x+a+o8M4yylTAJGn+T5fovO8XLJH8Br4SGGU6yfQ8rxL4dp0zmqOytEk8z0bKY+EWUq9R1OnlYAB3tXnW0n92RvimqzENljr8tvdfPTjquHLmAZKk6tkOtMiUsWWeSFJ0ysng4LJ5lcfThG98X1quGxDmirmAEAWi43HNeRxWOqVXCSTGhnbyRO2NWp4nvcfx3vKmKw7WR3r7Dcc/RdcVLTuOEMeOVKKT7exqv+GcT9kGLB7vhsbm5uQSb+XRIcO4zWpavmHAFpAt5mOkLjuL1Oz7AVHFszlnuz5BK06TCZcInUDxfXZPGpb2y5xjONTjf0R9I4T8VH5sogWJBF5kcoWlh6tGoHmg9uFrPBZnYAaTuj2bb3EL5/wQYc9qa9VzYYSzKJzPmQHBD4djiHAt+aHCwJHOYvrqZSyqMm1Xz9zhhiy4N8ctvR7r+V9KM/4l+Hq+HqltVkONwRdjx81N246aiVjw5t7fvmvsfDMbSxNLsMQ3PRPPxU3aZmHUG/1Xkfi74WOFJlwc1xJZH3mbHzG/7lJ70zuw+KWWNpcbNen9ejPDCrE2F+iewnEyGBuUCDrueiG7AkiRBQW4MzdNo31Qkg8U3uLj5xzWaaEm0AEx5SVpfZspB+ie4vwc0XDOIJaHDkZUtBHJp4M3j3Bvs72s7VlSWh0sMgTseqz26LQNF3eAvIulmYdx29dlNGyyWt2KOcZWlwniPZuvol8NlkzFkLHFoNkinUnpo1OM4xr4LdVkGUDOVp8IrUg8GuwvZBkAwZ2ukPRoRnGoUVnEKgEArQbTpkmLCTA6bJfE4PcIpgskG6aETmdclUBIRgCDBR+zCVGjlRwYwxBF0k5qfaRoE/wL7MKoOKDuyvIZ4p2TaJjJR4RgZDyUyrZxBpZnZAcknLOsbSlS0JaRrN7CdOgSj1MAQJVhUg2TTsSYunSJlOd7GaMMVx1ApwVCuElFFdSRtU6qN25/yhNqtiw156rmfMbnSy7DynG+xr4N/bOaxtOTEQzU9Us93ZugtuDofzVuHU4OZriDzBgojcE6tUgSTIBOup+u59EPYwSjq0mlw18NNer3WRmA+bUNAA5kEe/NYfEPih1Sq7K6xPkIB7ttucKfFWOJHZtByU2y6xjNHdaY8o9CvDis6Yvflp77rlySTdHpeD8EpLqP6fl/Z7vBfELmTJmbXvM7QkMZxIOdJJI2G49dlhNqRpYbTr6q3aC2+/L0RCKRq/Db2z0GAeS+aRubEWzXtabb6qjqdTtXB/3Zv4mggZonS/5oHDszT4SJsYtrJGnl9V6jAF1RmUwB4mtc7LLpOZ0u8ZMEnX8E8mXQk3VGccW7pb16ehjUcC8HPGRsFoJ1d+f4LrKQzEu11EXE8nct+aZr187CJuOWkTAAFreSSxdYMcGkRaYHPqReSVvGKaOfzye4NryDIt/ndM4YOnMAdyY03OnKAl6Tw4d0iYnfWOt01wtwcIM5mxmkRfpFoXRjhB7E5bUW6PTcErxEmJ846SF7JuGbjMOcNU8Q71JxPhcLgHfKdDHPmAV4LB2IJ/fn9V6XAYo2LTcRBHNY5cKqkeLLLLw+ZZF9fdeh864hhHUqha4ZBme2D91zDD2HyMe4Wb2pnoD7r6H/APqPCsxZjGCBWbD9LVqYjTm5tv5F88r2AuDN4G3msYu0fQ1F01wy1WpngDUxor8RrEw0vLy0AAyTbkJQ+GcQdQqtqsAJGgcJHsqYzvONT5iSY2J1CTGo00ir6kWJtHNBe1wETLdo0VK4ur4cPI7rcwbc2t6pGqVKylfAOa1r7Q7SDp58kt2RWpQpl/dJA3haOBwbXUqrQKYMSM/jMfIpaDrVszzGQo9XDvYGl1swkXGivUYAYiD1QHUjzSo2UrLPfEEI1LGkaqUsC7s3VJblBjUT7JUiUhaYy2HXPa5V+z9YCVaI0HqUanXg94z5JkuLX4ToBG1uaDVfJW3xfFYeoW/Z2OYMozB5mXbkFZLmAICMvXkE5S6P2QIVWAzCKK1CoemPtMiIVsRhCBKWylLgryy3DMqXR+16JJpTba4TRM4jrHwrh6WNQlEaV0pnK4jdGoZsV774M4xQo4euajGkhsgnxXsA23Q3XzljlqYI/wCjXc5zgwBgdlbm1eCL2DbgakTKjNFShTM1Dzpo8x8QY0VcRVqESHOdEm4JJgyBzPK8FZ1OqWg7ONv5TYh25nztG82viXtN3CCAAA0WdcyXEnW9rX6bgguDiBoBMTrmEH8vRcN+h70IqMVENhzNvpy/t++qdpNALTGa4tzvpAvfRZdMOEDK7bYzGq9FwLAOfUaPvGwtuTv16reKbRhnah5mabq7nAwCXOvJAABdlnMXWIHK6A7C1qU1HAAyHh2ZrgO8Lw3UGRt6L2HGvgurhKTar4IPLrCwi5rxDgCLSNJjyuunFjWRXF7HmvxGltSjXHz3Au4k01czm075s7m5gwuN5A189Lk8lt/CuFwuIdlrvaxwDoLmxpduUzO+h5LIo8GYahP3D9zvWO15kjX3TmC+H6OfvGplMggOaDcWglpTngnHE2r2XtexnLPhlkq9333+fmHfgqQcckZSTfLaxImLE6KruHhj3Pgh3hibQCBedxZWo1m2padk0U72PME8yS4mU7WFTIIdABzSbtcSLNfFxp1iDzWstUYRb39f+9q590c8Xc5Rur4b9K739+3cXBkjnb66L1HB8IarHHdgzEgwYm/mvHV6j2Uu0hk7iTLZJA/5WANtJhMcF4uTDHuEutNxHIEAb9Od0s7WSPl2a9vm33OTJ4ea3dNd91/f8nseLgVeH4hsGaJbiGzqA098f05vdfIuJYU0qr6ZiWmLGQRqCD5EL6vwI53YmiSYdRqs9HUiZXzPEcPL6kUjnBZTMkQf+20wRzHRc0Y06+p2eCyLoebatv3/AHMlN8OpF7sgiDzMBUr4cs1QJKqjs2kthzifDn0nZajSDEiRqCk2VntBDSQDYxuOq2f9avBqPLoAAJvAGgWdjsKWG4ScWRDJFvS+RbDugy4EjlMXUbXdP99Fzs50UNDmpo28t7l31mmc7fIzoqswmaIIA5/2V3sc8yG9JhVbhnAydkqEmktnRr8Q4XSoZctTtWkAucGkNaTqFl8UpUg+KL8zYBkti+4W3w/4rqMwj8GWtLXnxEd4eqwGUXE92/QJUwWztsXNEndMYDhnaVGsLwwOIGZ2gncoNUOBMggoTmneUqNk2+56HjnA8PhTUpOr9rUEFhpwWGdZKwWOOhuOqoynJifUq9XDEGJB6hCQbcNjeAwj6jwymC5zrBu/opjWupPLHjK9pgg6gpWhnaczC4Ft5E29VKznVCXOJLjck6nzQTpV7sI+uXWXHNEIDaTpsDKKKD+RsmNpLuDdSKplKaY12hC0sLwoPbJqMb0c6CihPLp5B8PwsugrbxfDQGys6lYyNUzWxjyIXUkkeZlc5TTizL7EytXBYh1GhWLHFrnZASJt3paQZsQ4MOh01G4Kd0wa7exewyG2c6NcrCC4gT3iGl5CzyryM6MeR9SP5nhMU4k94AQI7rWt0kCzQATA1NzuVSmCQ4DQgC3mIn1haPxC3K/s2lxDC+A5rLHM7NBa5wcDAMzrm2gnNw7pDhMSBbY95uo32Xmxdnv3tZ3Bs70re4biyx7XC0X9t1mYcxqP0/sjPcdPU/l7SfddeOaSo5My1ume74v8b1sTTbTqGWhY1B91h0HCNTP099lpYOoBfMI+q6cE4Q2R5+XC92bdLEXhb+MwtNlKlUbVD3PBLmDVpGxXlaFaTyHXW+xT7awHdBjrO3T2K7eopNUzy8uLeqOY95a4VwC4izwDBew63jbVPNqjK1zHZmuAc3yuCHDYgiPRY2Ixl4GnT8xzQhQN2sdkabmLkTFmqFWu4fVfavn9dGnVj0z57P72N4/Etf8A6QI8Qk7TsPr9EXjfCHYSq2m57XEsDwWGQJ5nnZYmUNcQ3QGBPQCT7pukAZc432HS956QPfosm5OdstY1CNI+ifBL31XkgasIJItZjmgzymdOSzuMYA4auLgFtOiwA3IDKLGmdjcFX+EsSadI1Jy6NBMw0OdB05Ak2XnPiLjrqlV1R5LiSY5xNvpCw0tZL7UckPPCWON3q/RILxHAh40ErGq8Jcww5sb+i28PjJbcJeu6TrJWzimRhyZIeUc4WKQYQ4nMBaNJ6pLGV6UOa9mckd28ZTz6qlLHdnPcDpBF9p3EbpBgJuk/QvHiak5sVGH6LrcL0T7XDcLgcEtKOrqyC8MaAIPstPG1KJotY2kBUBkvnUbCFkI2FpFxVaTmmt3KzPxuGmOaaw2E0gx1TOMw2S5ug4Sr3oKWlF9RyhsKYinBuCb6o9TCte2LTtC0MWG5OqzaDyDI23S0II5HKNrZoWqcJLTzHkhtoN8JH83L0XohirXvOqSJa51h6JdNFR8RN/iMrsokNJj8VfE0KtnECIgGFosoDkZnRMO06I6aG/ENNbGHh2nMCSRBExYr0FGm06DXd1z6rJcBKao1joNU4xSJz3NbAOL4aHWI9Fmdg5alcyb6ocJOCZrjyOMUjLpY0juvsfounEHQPEeiLj6YDiyxPymx9CsrO0OyuZB0Mk2WTk0dsIxmrSNcYh1ODGYc9R6p52KFMZnQQ7YCZB1b66LEc8tHdYXNO7XEjy6FFLHOaCwubEd14P0MXCrV2M3iVp/P3oRx9GHlhBF4BdrlsabvMty+3ksl9ItJO0fmF6es91dmV7AHE2fYaWA0lviJiYPmAsBtU0wQ4B1xBN4ymSWc9IvzIidPMyx0vY9nDPVHcmGfaHGJuDE32FrwVf7SR92euv8AZKPJmd/X3H6KdqRpoeUQrjOxuCHqVUOiRfSJ32OmnRNltu6ZA3iFlUiMpMkO2G0bmef91fD4lwkW53VqRlPE3wbFHEuEGStBmIkZgb2tqd9PdefbUki9vVOhw2sB9Y2W0ZM4smFGgxwJkkymX4rs2xE7DeCdCs+i4ajU890KgXkkgjc3IA8hOp6C910rJpW3Jj0dT9kFo1Dfnce+qfwvehsXJF7zAmwvB1B9EvUFhlN472aBBJOg5aXK3uAYUMHaVBbxAmQSLtht4gm0826i6cWZ55KMG+5q8axf2fDMpgXMwANSRz3iSfULy+Bwpc7O/wA781o8V4iHFry27vA0XcR838LSRbmAlOIVHzkpjvCM8aNJGhcbSj3OLFGUY6Vy+X9/p2D4ivBDG+I/QcypiO63NN1zhWDgFznd4+J2oa0bTuShVCXOL3SKbbNG7nHT1VWJJaqXbn3+f2LU87nXED6pl7HaNEgalUxeMFOBEuIkjYLS4VhjWYXF0Doheg8s9MdbVIQ7IRLkNscvquuE1C1ug1JQqdYEw2/X/KLLSdDOZcGIymQVUgTEqj8OOaZKUe5etiy7UoQeFPs45rtkblpRWyOmsoK1omyYw+Ec7vAWCpin5nTAb0CCU4t0hc1VykS4wFZzQj4F7WulIptKLaRfLUp3lAdjAR1+i0+IYprmwFjiiEP2M8T1K5rcMyuDEgEdNVysfvN0+qoaYCNh6+WZAIIi6Ny2kt0McOwTqwqOL2NyNzHM6C7o3mUpCgLVYBnNCA8qauZ0ioM2wcIBPmbSl6z3B5Lx3pkh370XalQju1Wg8iIDh5EWI6FEaTlgRVp8r5m+mrPSQuCz3kq+fZkw9dzjla1oJ6EabmDp1V6eOdOUBrthGb8ygxEhraoB/h/NUpjKZBLTp3290g6gnaR+wlqaHoix7/qAY8Zbt+9BME/eyzePNE4lW7RlJrxDm04sQZBqPcCWizXQ6+++8DKNGTYFp3AIcPQz+vmmcRReIcdeZaL+Zm6znclZUNMGku5s/DPBcJUp13YqsabmszUwJhx/ELzQpAkiRE6m3uNb80cVhqCGHVvi1B+6Zlmpv/ClzU5j309wsOGbpbtlHA6jnZHbSMgiwPeEmYjXS8z0VhSBElt/EYINotIjcubeedkNmIJABNgTaw1jSB0Tt2Mdo0QG2MmYjkB+Mz9EalA3v7oANg4TEmC64tE+fkiUazYIBbcjXKBaZubjUb+a600cslZodqxpBA3tMEm9raI3aS57+bnETlEAkxYWB+iQw9TO5pLiCIAc46AWueQA+gR8NQLgYMhtz7gX5a6LWLOecaNTDuL3gxFgDlAE+QAtIgWHXUr0owbiW0QG5tXAh3+mLawYcSI2MC26x34sYekwBpNd1mZgcw2ADH0yHADKNdbDee8K4wMOcviIM1HDQu+UHkDvuZ2hbRa4Z5XiVkmnKC37fyTjuBNOoX5eQDnvLYAECQCCdDYHptfJc4vbBJc2ZhjQynOkmo/fzC2eJ8XFY5g0O08IL3Dz2b7hY1XHAXLgDzzFzo6Fhn0NQpSavYvw0cnTWtb/AD5sPU3vEeFvKZe70LyGn+VVqlsgvcXO2zk/Rlj/APJSH2hxaSA6Du4imw+eWJ9XFBGIy/7gF/DSbY9HEZc3uUay1g3v5/JoAgeIN/ma1n0MuPsjUuJxbMAOTWv/AESZaWucC8tYxsvyAMhxFmWPedMb8+SRdiqhuHPA27zj9U9VB0VPn5+hsDEM56/wn9F1zY0bI5iIWbRxVocak7OBJ+hXe1/jqeyesXRa+fwPR/AVdjXGwaUhTJJjO/zIstjhGKyHvlrlSdmWVOEbW7+onVtY2QSSdE5xCsHvMNSTpH3UMrHulfI7g8c9jS2xS7ySZS+d/wAv79lbOd0rDpJO1W4eVAUFzxuqZxzRY9A1nXM6XzBPcMohxgp2TNKKtgSVUpvi2HDPCVl5yk3QY6nG0NNpk6Ib6bgYhHwWJDdVarjGkoC5qVUeONP+Bvq4z+KuyhOrWD1cfzUpUxmmJ6nRFe/UzDRvuT0XCkj23J8ID9laNcx8gfwH6hVJH/jd/SPzn8V1jibxA5uJKnaN8/Q/qlsVb7kpVA0zkP8ASB+Sex/EWvpju20A3ceXlzWWSC4AyG7xMpqnUAdniYENEOGUdIRFumiZwi2pNboF9n5wXnygD8kI04uDYeVz05p04ix2J1JLgT01Ve2EjSALDM6B11UvGilOXoKNzAxOuonbrzXQDlIziDBIFpIkDa+p+qYzW1EnU5nX6a+isyoJGkDQZnWPMX6qemvUvqP0Ay50A7ADUaDSJsLW9FcNcW+Pu6QXTJGmUeibwjM5yA3MZjL79NfROVaJY+DeB3QHPtrJF+VlosVmMvE067i9PDTDZvuQWBoaABFt+XqfPTpVaYbnMdmzwtApy92mYj720e/JZtPHtAykmSRnM1QXbEET5DyCviOI03kFxJa0S1nfLZ5kuOnTpC1TS7nPNZJOmnXz57II6u6c5tVqC0AxSpm2aBoSDbkCTq4K7KZaABnEfKazbwAdKRG2yQdUcCXEB5cT3r77GCI0RsTh+6xwBa9x8EkiOYm48imnYOKW3z/A1VzDGeo50bF7yRzsaQv6hR7mimaje5eG90S4/eMuLi0Abg6kDnFK4z5WOdPZialQ3P8AwB3jQSlhxAdoHlstaIYzZoHh8+fUpt1yKMW1t8/37Doo2h93wX1Hul3Z047o6vOsdQOcCwtSDmptJcNHPIsYsQ3SdxJOipVqdm7NL85ue8JvztddZXDhYhruTmtg+RATtWKnXt+n+DfD8PVMsyhzSZLXEG/MEGQeoKLXpvp93IfSoR+aXwWPdSMkN9AFzG8RFV0lipNJGLjkeThafnuE7Z/yn/2H9Vx1Z8TkP9RKEGN+T6KzDGghOx0vT5/0qcTP3Xe5XBkcLS0+4RS88vw/RAdXAN7JN+pSXohim+BdxKt2o5lAbiWn9hVfWI2lGonQ2xntepXM4S7jOllp8M4ZnaSSmm2RNxxq5CwqDkpnbySmKYWuIlCulrNFjTV2P5xyXaWIymQkBKsKiNQPEh+ri3O1K7RaXaBICsE9gcYGpqVmc8bjHyopiJbYoGco2MrhxS6TZcFtuVwGFzIWPwwFkLC4otUr4jMsbVHQozU77AXNkRsuhisxdL4So1t8EbT5BSoABc2Vata07JB1UuIJ0CmU0ti4Y3LdjWKgDT3lAptzA6ALr25o5fimXMhse6mtTvsXq0pLuZoMGYlO4mm3KHEZTuFV7Ig8tkRxzdI/FJQSTKlK2mM5C1rcnqd0XMfvd7ruELDkgQr51ujkfIbuv1AJG5Q20qfhywQh1NiCuOryOv5obEovsaOCojMPltY6LV4uWMAeL2Xn21CBM3R6GJ7Tuu/Z2KtSSVI5smFympt7IVJLT3TZ2rSlsaGhwy2TL2wSDqEqWTrqspHZDmwxxTtxPVdbij8oSpkbrmYpamV04mmyqeQVxUO0LMDzzRKVWFamZPEM1Krp8SqKrvmSdRxcZVmUzzU63ZfTSW42zEPB1BRzVa4XhJZVMqrUyHCLD9k1WJCWhcgo1Bp9xwAdEejjC0QCs19NyFB5o10LpKS3Y+8gmZUSF0Rr0tZXT9xjtFJCA0SVpMwzYTTsibUROQqmqFSu2CgPClyNIxTGDXXQ9IZjKYFQpKZUsdAwVC9RRRZrRVj0VRRNMUkVqmfJDpsUUS7j4Ro4XByj1cNAUUW1bHnyyyc6M6o1UYVFFkd0eAuayBUqbKKIkwgtw1N9lwayuKJ2JqgvaKjXxooohsVB8RWzAH0PogZgoohsFFJFSVxRRKyqOypZRRFhRM4VTWXVErGoooXroeooix0d7RO8OcM11FE09zPLFaWbOLyZV5yo+6ii0yM5vCR2ZQ1V3OoosbO1xRQvR248gQooi2hOEZcgjXJK7nUUTsHFFSpK6ogKP//Z"
                    className="img-fluid rounded-start"
                    alt="img"
                    id="article-img-design"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <a href="" className="article-link-design">
                      <h5 className="card-title">
                        The Role of DataBase Administrators
                      </h5>
                      <p className="card-text">
                        Important Roles and Responsibilities...
                      </p>
                    </a>
                    <div className="side-footer-design">
                      <p>29 June 2019</p>
                      <p>5 Mins Read</p>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
            <div className="row">
              <div className="card mb-3">
                <div className="row g-0" id="padding-card">
                  <div className="col-md-4">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSlIUmu7xmP1NPIyj-W8oDgEd06Q3HBLi8OA&s"
                      className="img-fluid rounded-start"
                      alt="img"
                      id="article-img-design"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <a href="" className="article-link-design">
                        <h5 className="card-title">
                          The Role of DataBase Administrators
                        </h5>
                        <p className="card-text">
                          Important Roles and Responsibilities...
                        </p>
                      </a>
                      <div className="side-footer-design">
                        <p>29 June 2019</p>
                        <p>5 Mins Read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card mb-3">
                <div className="row g-0" id="padding-card">
                  <div className="col-md-4">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLGKnSk49tnPJCW2ft-gz0m1La6l_NctidA&s"
                      className="img-fluid rounded-start"
                      alt="img"
                      id="article-img-design"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <a href="" className="article-link-design">
                        <h5 className="card-title">
                          The Role of DataBase Administrators
                        </h5>
                        <p className="card-text">
                          Important Roles and Responsibilities...
                        </p>
                      </a>
                      <div className="side-footer-design">
                        <p>29 June 2019</p>
                        <p>5 Mins Read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
