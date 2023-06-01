import React from 'react'
import { useEffect, useState } from "react";
import Faq from "react-faq-component";

function Faqs() {

    const data = {
      
        rows: [
            {
                title: "Features & Benefit",
                content: `Here is a quick look at many great features My Ufone App carry:

                Create a UPaisa account and pay via UPaisa to purchase Super Card, pay bill or Recharge.
                'Pay Bill for Postpaid number or Recharge your Prepaid number using Credit or Debit card.
                Purchase Super Card, Super Card Mini and Super Card Plus
                Subscribe to awesome Internet, SMS, Voice Bundles and Add Ons.
                Check your current balance and expiry for Prepaid number or your monthly limit for Postpaid number.
                Change Access level and Credit Limit of your Postpaid number.
                Check your subscribed bundles and remaining resources against each bundle.
                Check subscribed VAS / Add Ons, and change status for selected ones.
                Email Duplicate Bill or Tax Certificate to your registered Email.
                Change your package for Prepaid or Postpaid Numbers.
                Check your Call, SMS and Internet usage history.
                Get a Duplicate SIM or shift to Ufone Network.
                Guest access for quick SIM purchase and booking with discounts.
                Activate or deactivate your number.
                Get notified for new and latest offers by Ufone.
                Check International Roaming rates.
                Language selection between English and Urdu.
                Locate Ufone Franchise, Business Centers and Self Service Booths.
                Check Ufoneâ€™s 3G and 4G Network Coverage.
                Associate your friends and family mobile numbers to perform all activities for them.
                Live Chat â€“ Get 24/7 assistance from a Ufone customer representative.
                Submit a complaint, Request for a Call back or give your valuable feedback.`,
            },
            {
                title: "How to begin?",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "FAQs",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Privacy Policy:",
                content: <p>current version is 1.2.1</p>,
            },
            {
                title: "Terms & conditions",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: " #737373",
        rowTitleColor: " #737373",
        rowContentColor: 'grey',
        arrowColor: "orange",

    };
    
    const config = {
        // animate: true,
        arrowIcon: "+",
        // tabFocus: true
    };

  return (
    
    <div className='mt-5'>
         <Faq
                data={data}
                styles={styles}
                config={config}
            />
    </div>
  )
}

export default Faqs