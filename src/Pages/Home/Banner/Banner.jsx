import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Banner.css';

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={4000}
      style={{ height: '600px' }}
    >
      <div >
        <img
          src="https://i.ibb.co/5nVWzpZ/Photo-by-Luis-S-nchez-on-Unsplash.jpg"
          alt=""
          className='w-[1500px] h-full relative'
        />


        <div className="textOverlay">

          <h3 className='text-4xl text-red-700'> LIVE UPDATES</h3>     <br />
          <h3 className='text-4xl font-extrabold border-l-8 border-orange-600 pl-7'>  Israeli captives handed <br /> to Red Cross, Thai nationals <br />also freed amid truce</h3>
          <p className='mt-6 text-xl'>  Freeing of Thai workers comes as 39 Palestinian <br /> prisoners and 13 Israeli captives set <br />for release after Gaza pause.</p>

        </div>
        <div className='flex justify-between items-center absolute bottom-9 left-16 gap-6'>
          <h3 className='text-xl font-bold text-white'>Who are the Palestinian prisoners Israel released on Friday?</h3>
          <h3 className='text-xl font-bold text-white'>Hamas frees 10 Thai citizens, one Filipino under separate deal: Qatar</h3>
          <h3 className='text-xl font-bold text-white'>Nice footballer Atal detained for sharing alleged anti-Semitic content</h3>
        </div>
      </div>
      {/* 2nd one */}
      <div >
        <img
          src="https://i.ibb.co/mvMMp8L/cdc-Tnrpx-He-N3-OM-unsplash.jpg"
          alt=""
          className='w-full h-full relative'
        />


        <div className="textOverlay">

          <h3 className='text-4xl text-red-700'>China grapples with respiratory illness spike</h3>     <br />
          <h3 className='text-4xl font-extrabold border-l-8 border-x-cyan-500 pl-7'>China is grappling with a spike in <br />respiratory illnesses as it enters its first full winter season <br />since it lifted strict Covid-19 restrictions in December  </h3>
          <p className='mt-6 text-xl'> China called for vigilance yesterday as a surge of<br /> respiratory illness hit  schools and hospitals and the  <br />World Health Organization,which has asked the<br />  government for disease data, said no unusual <br />or novel pathogens had been detected.</p>

        </div>
      </div>

      {/* 3rd one */}
      <div >
        <img
          src="https://i.ibb.co/nL5nnFp/22344842-2184-4392-ba79-818cd90820a2.jpg"
          alt=""
          className='w-[1500px] h-full relative'
        />


        <div className="textOverlay">

          <h3 className='text-4xl text-red-300 font-semibold '>Pakistan seeks BRICS membership, despite India roadblock</h3>     <br />
          <h3 className='text-4xl font-extrabold border-l-8 border-x-red-300 pl-7'>The grouping, which criticised Israel for <br /> the Gaza war this week, is increasingly seen as the <br /> leading voice of the Global South.</h3>
          <p className='mt-6 text-xl w-1/2 text-slate-200'> Islamabad, Pakistan — Pakistan has formally sought membership in BRICS, the grouping of five emerging economies that includes rival India alongside Brazil, Russia, China and South Africa, at a time the body is fast gaining the status as the leading bloc of the Global South.
            Calling BRICS an “important group of developing countries”, Mumtaz Zahra Baloch, spokesperson for Pakistan’s foreign ministry, disclosed that the country has made a “formal request” to join the group.</p>

        </div>
      </div>
      {/* 4th one */}
      <div >
        <img
          src="https://i.ibb.co/0Dkp6YN/Steve-Smith-follows-in-steps-of-Michael-Clarke-by-bringing-New-Zealand-to-heel.jpg"
          alt=""
          className='w-[1500px]'
        />


        <div className="textOverlay4">

          <h3 className='text-4xl font-extrabold border-l-8 border-x-amber-300 pl-7 '>Australia World Cup winning campaign in India.</h3>
          <p className='mt-6 text-xl '> The Australian teams clarity of thought helped them recover from a sluggish start to the tournament and the several gutsy calls they took during the competition set them on course for triumph.</p>

        </div>
      </div>
      {/* 5th one */}
      <div >
        <img
          src="https://i.ibb.co/R0zStLT/huw-edwards-m-Cx-Rb-Yufj-ZA-unsplash.jpg"
          alt=""
          className='w-[1500px] h-[500px] relative'
        />


        <div className="textOverlay5">


          <h3 className='text-4xl font-extrabold border-l-8 border-x-cyan-500 pl-7'>World largest iceberg breaks free, heads toward Southern Ocean</h3>
          <p className='mt-6 text-xs'>Since calving off West Antarcticas Filchner-Ronne Ice Shelf in 1986, the iceberg — which once hosted a Soviet research station — has largely been stranded after its base became stuck on the floor of the Weddell Sea.Not anymore. Recent satellite images reveal that the berg, weighing nearly a trillion metric tonnes, is now drifting quickly past the northern tip of the Antarctic Peninsula, aided by strong winds and currents..</p>

        </div>
      </div>
      {/* 6th one */}
      <div >

        <div className="textOverlay6">

          <h3 className='text-5xl font-bold text-black mb-8'>Oil edges lower in choppy trade as OPEC+ delays meeting</h3>
          <h3 className='text-2xl font-semibold text-black border-l-8 border-x-slate-500 pl-7'>

            Oil edges lower in choppy trade as OPEC+ delays meeting
            Oil prices fell nearly 1 percent in a volatile session on Wednesday as OPEC+ producers unexpectedly delayed a meeting on production cuts, raising questions about global crude supplies.
            Brent futures settled 49 cents lower to $81.96 a barrel, after falling more than 4 percent to a low of $78.41 earlier in the session. US West Texas Intermediate crude settled 67 cents lower at $77.10, after declining more than 5 percent to a session low of $73.79 earlier in the day.OPEC+ postponed the meeting, originally scheduled for Nov. 26, to Nov.30, it said in a statement, a surprise development that drove prices sharply lower in early trading. The group was expected to discuss whether to expand oil output cuts.Prices bounced back after news that the disagreement was related to African countries, which are among the smaller producers in the group, rather than the top oil exporters.</h3>

          <p className='mt-6 text-xl w-full  text-black'> China called for vigilance yesterday as a surge of respiratory illness hit  schools and hospitals and the World Health Organization,which has asked the government for disease data, said no unusual or novel pathogens had been detected.</p>

        </div>
      </div>
    </AutoplaySlider>
  );

  return (
    <div>
      {slider}
    </div>
  );
};

export default Banner;

