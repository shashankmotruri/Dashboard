import React, { Component } from 'react'
import "./header.css";

export class Header extends Component {
    render() {
        return (
            <div>
                <div class="user-info">                
                    <div class="hello">Hello</div>
                    <div class="shashank">Shashank!</div>
                    <div class="wavingHand"></div>
                </div>
            
                <div class="user-container">                
                    <image class="photo2" src="../../assets/photo2.png"  width="37.00px" height="34.00px" alt="Profile Picture"/>
                    <div class="user-gmail">motrurishashank000@gmail.com</div>
                </div>

                <div class="notification-icon">                
                    <svg preserveAspectRatio="none" viewBox="14.701190948486328 28.3359375 6.5833740234375 3.7265625" class="path6"><path d="M 20.36953163146973 28.3359375 C 19.94062614440918 28.3359375 19.56796836853027 28.63125038146973 19.4765625 29.05312538146973 C 19.40625 29.36953163146973 19.28671836853027 29.62968826293945 19.125 29.81953239440918 C 19.03359413146973 29.92500114440918 18.76640701293945 30.23437690734863 17.99296951293945 30.23437690734863 C 17.21953201293945 30.23437690734863 16.95234489440918 29.91797065734863 16.86093902587891 29.81953239440918 C 16.69922065734863 29.62968826293945 16.57968902587891 29.36953163146973 16.50937652587891 29.05312538146973 C 16.41797065734863 28.63125038146973 16.04531478881836 28.3359375 15.61640739440918 28.3359375 L 15.61640739440918 28.3359375 C 15.02578258514404 28.3359375 14.59687614440918 28.88437461853027 14.72343826293945 29.45390701293945 C 15.07500076293945 31.02187538146973 16.20000076293945 32.0625 17.99296951293945 32.0625 C 19.78593826293945 32.0625 20.91093826293945 31.02890586853027 21.26250076293945 29.45390701293945 C 21.38906288146973 28.88437461853027 20.953125 28.3359375 20.36953163146973 28.3359375 L 20.36953163146973 28.3359375 Z"  /></svg>
                    <svg preserveAspectRatio="none" viewBox="6.7748332023620605 3.930469036102295 25.532470703125 25.88433837890625" class="path7"><path d="M 31.98695945739746 27.30605316162109 C 30.75689315795898 25.70455551147461 28.33669662475586 24.76574516296387 28.33669662475586 17.59449577331543 C 28.33669662475586 10.23390769958496 25.04586601257324 7.275473117828369 21.97868537902832 6.565447807312012 C 21.69113540649414 6.494446277618408 21.48346328735352 6.399775981903076 21.48346328735352 6.099987983703613 L 21.48346328735352 5.87120246887207 C 21.48346328735352 4.821944236755371 20.62081909179688 3.930469036102295 19.56647491455078 3.930469036102295 C 19.5584888458252 3.930469036102295 19.55050086975098 3.930469036102295 19.54251480102539 3.930469036102295 C 19.53452491760254 3.930469036102295 19.52653884887695 3.930469036102295 19.51855087280273 3.930469036102295 C 18.46420669555664 3.930469036102295 17.60156440734863 4.821944236755371 17.60156440734863 5.87120246887207 L 17.60156440734863 6.099987983703613 C 17.60156440734863 6.391886711120605 17.39389228820801 6.494446277618408 17.10634231567383 6.565447807312012 C 14.03117370605469 7.283361911773682 10.74833297729492 10.23390769958496 10.74833297729492 17.59449577331543 C 10.74833297729492 24.76574516296387 8.32813549041748 25.69666481018066 7.098069190979004 27.30605125427246 C 6.30731201171875 28.33953094482422 7.058132171630859 29.81480598449707 8.368074417114258 29.81480598449707 L 19.58245086669922 29.81480598449707 L 30.74091720581055 29.81480598449707 C 32.02690124511719 29.8148078918457 32.76973342895508 28.33164596557617 31.98695945739746 27.30605316162109 Z M 28.87185478210449 27.76362419128418 L 10.24512577056885 27.76362419128418 C 9.94160270690918 27.76362419128418 9.781853675842285 27.41650199890137 9.981539726257324 27.18771743774414 C 10.54066181182861 26.55658340454102 11.15569496154785 25.72822189331055 11.65890407562256 24.55273628234863 C 12.42569923400879 22.7697868347168 12.80110836029053 20.48981666564941 12.80110836029053 17.59449577331543 C 12.80110836029053 14.6518383026123 13.3602294921875 12.3482027053833 14.47048568725586 10.7467041015625 C 15.46092796325684 9.310876846313477 16.69898223876953 8.766523361206055 17.5616283416748 8.569295883178711 C 18.23257255554199 8.41151237487793 18.71182060241699 8.111722946166992 19.04729270935059 7.740932941436768 C 19.30289077758789 7.456923007965088 19.7421989440918 7.441144943237305 19.9977970123291 7.725154876708984 C 20.40515518188477 8.174837112426758 20.9562931060791 8.443069458007813 21.49943733215332 8.569295883178711 C 22.36208152770996 8.766523361206055 23.60013771057129 9.310876846313477 24.59057998657227 10.7467041015625 C 25.70083808898926 12.3482027053833 26.25995826721191 14.6518383026123 26.25995826721191 17.59449577331543 C 26.25995826721191 20.48981666564941 26.63536834716797 22.76978492736816 27.40216255187988 24.55273628234863 C 27.92135047912598 25.75188827514648 28.5523567199707 26.59603118896484 29.11946487426758 27.2271614074707 C 29.29518890380859 27.44017028808594 29.15141487121582 27.76362419128418 28.87185478210449 27.76362419128418 Z"  /></svg>
                </div>
                
            </div>
        )
    }
}
