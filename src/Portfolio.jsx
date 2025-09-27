import { useEffect, useState } from 'react';

export default function Portfolio() {
  const [bgPosition, setBgPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgPosition(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen text-white font-sans flex flex-col items-center justify-center p-8`} style={{
      background: `linear-gradient(${bgPosition}deg, #1e60ff, #000000, #1e90ff)`
    }}>
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Hello, it's <span className="text-blue-400">Yuhei!</span>
        </h1>
        <p className="text-blue-200 text-lg">23 years old, Born in 20/10/2001</p>
      </header>

      {/* About Section */}
      <section className="max-w-3xl text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-300">About me</h2>
        <p className="text-blue-200 leading-relaxed">
          ผมจบการศึกษาจากมหาวิทยาลัยโอซาก้า และปัจจุบันทำงานที่ Deloitte Japan<br/>
          เคยมีประสบการณ์เรียนที่ประเทศไทย สหรัฐอาหรับเอมิเรตส์ และสหรัฐอเมริกา<br/>
          นอกจากนี้ยังเคยเดินทางไปกว่า 50 ประเทศทั่วโลก
        </p>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl w-full mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-blue-300">Studied at</h2>
        <div className="bg-gray-900/80 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition text-left">
          <ul className="text-blue-200 leading-relaxed list-disc list-inside">
            <li>The University of Osaka, Japan</li>
            <li>Chulalongkorn University, Thailand</li>
            <li>California State University, USA</li>
            <li>English Path Dubai, UAE</li>
          </ul>
        </div>
      </section>

      {/* Work Section Combined */}
      <section className="max-w-4xl w-full mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-6 text-blue-300">Work experience</h2>
        <div className="bg-gray-900/80 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition text-left">
          <p className="text-blue-200 leading-relaxed">
            ปัจจุบันผมทำงานที่ Deloitte Japan ในฐานะที่ปรึกษาด้านบัญชี การเงิน และการควบรวมกิจการ (M&A)<br/>
            โดยมีส่วนร่วมในงานตรวจสอบสถานะทางการเงิน (Financial Due Diligence)<br/>
            การประเมินมูลค่าธุรกิจ การวางแผนโครงสร้างองค์กร และการสนับสนุนการบูรณาการหลังการควบรวมกิจการ (PMI)<br/>
            ประสบการณ์ดังกล่าวช่วยให้ผมเข้าใจทั้งมิติด้านกลยุทธ์และการปฏิบัติจริงของธุรกิจ<br/>
            นอกจากนี้ผมยังสอบผ่าน USCPA（Certified Public Accountant）และมีประสบการณ์ลงทุนส่วนบุคคลในการซื้อขายหุ้นรายตัว<br/>
            รวมถึงการบริหารจัดการพอร์ตโฟลิโอด้วยตนเอง ซึ่งเสริมสร้างมุมมองเชิงลึกด้านการเงินและการลงทุน<br/>
            นอกจากนี้ผมยังเคยเข้าร่วมฝึกงานที่ KPMG Japan มีความรู้ด้านภาษีระหว่างประเทศและการกำหนดราคาการโอน (Transfer Pricing)
          </p>
        </div>
      </section>

      {/* Horizontal Sections: Languages, Interests, Values */}
      <section className="flex flex-wrap gap-6 max-w-4xl w-full mb-12">
        {[
          { title: "Languages", desc: [
              "・ญี่ปุ่น : Native",
              "・อังกฤษ : Advanced（TOEIC970 | มีประสบการณ์แปลที่บริษัท）",
              "・จีน : Intermediate（HSK5）",
              "・ไทย : Intermediate",
              "・เวียดนาม : Beginner",
            ]
          },
          { title: "Interests", desc: [
              "・การลงทุนในหุ้นและการเงินส่วนบุคคล",
              "・การเดินทางและสำรวจโลก",
              "・วัฒนธรรมและประวัติศาสตร์",
              "・ธรรมชาติ",
              "・ปรัชญาและแนวคิดชีวิต",
            ]
          },
          { title: "Values", desc: [
              "・รู้จักพอพอเพียงและเดินทางสายกลาง",
              "・ไม่ยึดติดกับอดีต",
              "・ซื่อสัตย์ต่อตนเอง",
              "・มีความทะเยอทะยานและวิสัยทัศน์ที่ชัดเจน",
              "・บรรลุเป้าหมายด้วยตนเอง",
              "・เคารพในความสามารถ",
              "・เป็นอิสระ",
            ]
          }
        ].map((section, i) => (
          <div key={i} className="bg-gray-900/80 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition flex-1 min-w-[250px] text-left">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">{section.title}</h3>
            <p className="text-blue-100">{section.desc.map((item, idx) => <span key={idx}>{item}<br/></span>)}</p>
          </div>
        ))}
      </section>

      {/* Horizontal Sections: Favorite countries, Future Goals */}
      <section className="flex flex-wrap gap-6 max-w-4xl w-full mb-12">
        {[
          { title: "Favorite countries", desc: [
              "เกาหลีใต้","ไทย","ลาว","เวียดนาม","สิงคโปร์","สหรัฐอาหรับเอมิเรตส์",
              "อิตาลี","ฮังการี","จอร์เจีย","อาร์เมเนีย","นิวซีแลนด์"
            ]
          },
          { title: "Future Goals", desc: [
              "・ทำงานที่สิงคโปร์",
              "・เป็นผู้บริหารธุรกิจและนักลงทุนมืออาชีพ",
              "・ซื้ออสังหาริมทรัพย์ในภาคเหนือของไทย ภาคใต้ของเวียดนาม และดูไบ",
              "・บริหารอพาร์ตเมนต์และโรงแรม",
              "・ทำงานจนวันสุดท้ายของชีวิต",
              "・มีรายได้มากกว่า 25 ล้านบาทต่อปี",
              "・เดินทางไป 100 ประเทศ",
              "・มีครอบครัวที่อบอุ่น"
            ]
          }
        ].map((section, i) => (
          <div key={i} className="bg-gray-900/80 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition flex-1 min-w-[300px] text-left">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">{section.title}</h3>
            <p className="text-blue-100">{section.desc.map((item, idx) => <span key={idx}>{item}<br/></span>)}</p>
          </div>
        ))}
      </section>

      {/* Contact */}
      <footer className="text-center mt-8">
        <p className="text-blue-300 mb-2">ติดต่อ</p>
        <a href="mailto:yourmail@example.com" className="text-blue-300 hover:underline">
          ymkwyh1@gmail.com
        </a>
      </footer>
    </div>
  );
}
