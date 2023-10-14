import { useState } from 'react';
import './Lamp.css';

interface LampProps {
    customName: string;
    status: 'On' | 'Off';
}

const Lamp: React.FC<LampProps> = ({ customName, status }) => {
    const [isLampOn, setIsLampOn] = useState(status === 'On');

    const handleSwitchClick = () => {
        setIsLampOn((prevIsLampOn) => !prevIsLampOn);
      };

    return (
        <div className="lamp-box">
            <div className="lamp-icon">
                {isLampOn ?
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#0AE194" fill-opacity="0.3" />
                        <path d="M16.6645 5.85L16.6759 5.85179C16.7275 5.85983 16.7795 5.86774 16.8317 5.8757C17.2053 5.93263 17.5928 5.99169 17.9676 6.11227L17.9677 6.1123C20.6856 6.98852 22.4188 8.82399 22.9962 11.6454C23.4445 13.8366 22.9024 15.8364 21.5087 17.579C21.0996 18.0905 20.7322 18.6019 20.507 19.2035C20.3162 19.7141 20.2439 20.2461 20.2291 20.7968L20.2291 20.797C20.2243 20.9695 20.225 21.1427 20.2262 21.3183L20.2265 21.3619C20.2275 21.5227 20.2286 21.6856 20.2257 21.8485C20.2192 22.2388 20.1231 22.5814 19.9378 22.8722C19.7526 23.1628 19.4837 23.3934 19.1439 23.5678L19.1437 23.5679C19.0871 23.5969 19.0542 23.6244 19.0315 23.6532C19.0084 23.6825 18.9886 23.7222 18.9709 23.7859L18.9708 23.786C18.6554 24.9131 17.9458 25.7021 16.8088 26.0243L16.8087 26.0243C15.684 26.3424 14.6789 26.0478 13.8451 25.2437L13.8451 25.2437C13.424 24.8373 13.1461 24.335 13.0121 23.7633C12.9993 23.7089 12.983 23.6757 12.9641 23.6516C12.9452 23.6275 12.9166 23.6034 12.8657 23.5777L16.6645 5.85ZM16.6645 5.85H16.6528H16.6502H16.6475H16.6449H16.6422H16.6396H16.6369H16.6343H16.6316H16.629H16.6263H16.6237H16.621H16.6184H16.6157H16.6131H16.6104H16.6078H16.6051H16.6025H16.5998H16.5972H16.5945H16.5919H16.5892H16.5866H16.5839H16.5813H16.5786H16.576H16.5733H16.5707H16.568H16.5654H16.5627H16.5601H16.5574H16.5548H16.5521H16.5495H16.5468H16.5442H16.5415H16.5389H16.5362H16.5336H16.5309H16.5283H16.5256H16.523H16.5203H16.5177H16.515H16.5124H16.5097H16.5071H16.5044H16.5018H16.4991H16.4965H16.4938H16.4912H16.4885H16.4859H16.4832H16.4806H16.4779H16.4753H16.4726H16.47H16.4673H16.4647H16.462H16.4594H16.4567H16.4541H16.4514H16.4488H16.4461H16.4435H16.4408H16.4382H16.4355H16.4329H16.4302H16.4276H16.4249H16.4223H16.4196H16.417H16.4143H16.4117H16.409H16.4064H16.4037H16.4011H16.3984H16.3958H16.3931H16.3905H16.3878H16.3852H16.3825H16.3799H16.3772H16.3746H16.3719H16.3693H16.3666H16.364H16.3613H16.3587H16.356H16.3534H16.3507H16.3481H16.3454H16.3428H16.3401H16.3375H16.3348H16.3322H16.3295H16.3269H16.3242H16.3216H16.3189H16.3163H16.3136H16.311H16.3083H16.3057H16.303H16.3004H16.2977H16.2951H16.2924H16.2898H16.2871H16.2845H16.2818H16.2792H16.2765H16.2739H16.2712H16.2686H16.2659H16.2633H16.2606H16.258H16.2554H16.2527H16.2501H16.2474H16.2448H16.2421H16.2395H16.2368H16.2342H16.2315H16.2289H16.2262H16.2236H16.2209H16.2183H16.2156H16.213H16.2103H16.2077H16.205H16.2024H16.1997H16.1971H16.1944H16.1918H16.1891H16.1865H16.1838H16.1812H16.1785H16.1759H16.1732H16.1706H16.1679H16.1653H16.1626H16.16H16.1573H16.1547H16.152H16.1494H16.1467H16.1441H16.1414H16.1388H16.1361H16.1335H16.1308H16.1282H16.1255H16.1229H16.1202H16.1176H16.1149H16.1123H16.1096H16.107H16.1043H16.1017H16.099H16.0964H16.0937H16.0911H16.0884H16.0858H16.0831H16.0805H16.0778H16.0752H16.0725H16.0699H16.0672H16.0646H16.062H16.0593H16.0567H16.054H16.0514H16.0487H16.0461H16.0434H16.0408H16.0381H16.0355H16.0328H16.0302H16.0275H16.0249H16.0222H16.0196H16.0169H16.0143H16.0116H16.009H16.0063H16.0037H16.001H15.9984H15.9957H15.9931H15.9904H15.9878H15.9851H15.9825H15.9798H15.9772H15.9745H15.9719H15.9692H15.9666H15.9639H15.9613H15.9586H15.956H15.9533H15.9507H15.948H15.9454H15.9427H15.9401H15.9374H15.9348H15.9321H15.9295H15.9268H15.9242H15.9215H15.9189H15.9162H15.9136H15.9109H15.9083H15.9056H15.903H15.9003H15.8977H15.8951H15.8924H15.8898H15.8871H15.8845H15.8818H15.8792H15.8765H15.8739H15.8712H15.8686H15.8659H15.8633H15.8606H15.858H15.8553H15.8527H15.85H15.8474H15.8447H15.8421H15.8394H15.8368H15.8341H15.8315H15.8288H15.8262H15.8235H15.8209H15.8182H15.8156H15.8129H15.8103H15.8076H15.805H15.8023H15.7997H15.797H15.7944H15.7917H15.7891H15.7864H15.7838H15.7811H15.7785H15.7758H15.7732H15.7705H15.7679H15.7652H15.7626H15.7599H15.7573H15.7546H15.752H15.7493H15.7467H15.744H15.7414H15.7387H15.7361H15.7334H15.7308H15.7281H15.7255H15.7228H15.7202H15.7175H15.7149H15.7122H15.7096H15.7069H15.7043H15.7017H15.699H15.6964H15.6937H15.6911H15.6884H15.6858H15.6831H15.6805H15.6778H15.6752H15.6725H15.6699H15.6672H15.6646H15.6619H15.6593H15.6566H15.654H15.6513H15.6487H15.646H15.6434H15.6407H15.6381H15.6354H15.6328H15.6301H15.6275H15.6248H15.6222H15.6195H15.6169H15.6142H15.6116H15.6089H15.6063H15.6036H15.601H15.5983H15.5957H15.593H15.5904H15.5877H15.5851H15.5824H15.5798H15.5771H15.5745H15.5718H15.5692H15.5665H15.5639H15.5612H15.5586H15.5559H15.5533H15.5506H15.548H15.5453H15.5427H15.54H15.5374H15.5347H15.5321H15.5294H15.5268H15.5241H15.5215H15.5188H15.5162H15.5135H15.5109H15.5082H15.5056H15.5029H15.5003H15.4976H15.495H15.4923H15.4897H15.487H15.4844H15.4817H15.4791H15.4764H15.4738H15.4711H15.4685H15.4658H15.4632H15.4605H15.4579H15.4552H15.4526H15.4499H15.4473H15.4446H15.442H15.4393H15.4367H15.434H15.4314H15.4287H15.4261H15.4234H15.4208H15.4181H15.4155H15.4128H15.4102H15.4075H15.4049H15.4022H15.3996H15.3969H15.3943H15.3916H15.389H15.3863H15.3837H15.381H15.3784H15.3757H15.3731H15.3704H15.3678H15.3651H15.3625H15.3598H15.3572H15.3545H15.3519H15.3492H15.3466H15.3439H15.3413H15.3386H15.336H15.3333H15.3307H15.328H15.3254H15.3227H15.3201H15.3174H15.3148H15.3121H15.3095H15.3068H15.3042H15.3015H15.2989H15.2962H15.2836L15.2712 5.85211C15.1945 5.86508 15.116 5.87741 15.0363 5.8899C14.8604 5.9175 14.6794 5.94589 14.5035 5.98384L14.5033 5.98388C12.6091 6.39527 11.1103 7.4173 10.0369 9.0335C9.02167 10.5599 8.67871 12.2561 8.92796 14.0653L8.92796 14.0653C9.12299 15.4801 9.71744 16.714 10.6429 17.786C11.2157 18.45 11.5797 19.2095 11.7049 20.0788C11.7667 20.5083 11.7647 20.937 11.7627 21.3784C11.7621 21.5273 11.7614 21.6776 11.7631 21.8299C11.7631 21.8299 11.7631 21.8299 11.7631 21.8299L11.9131 21.8282L16.6645 5.85ZM18.6817 19.9245L18.6819 19.9245C18.7202 19.9249 18.7448 19.9222 18.7605 19.9185C18.7679 19.9168 18.7723 19.915 18.7747 19.9139L18.7769 19.9127L18.7776 19.9123L18.7779 19.9119L18.7791 19.9104C18.7802 19.9088 18.7824 19.9052 18.785 19.8988C18.7905 19.8852 18.7967 19.8622 18.8012 19.8244L18.8012 19.8243C18.8513 19.4135 18.9707 19.0216 19.1076 18.644L19.1077 18.6439C19.4014 17.8356 19.9094 17.1713 20.415 16.5277L20.415 16.5277C21.42 15.2488 21.7952 13.7892 21.5635 12.1786L21.5635 12.1785C21.3515 10.7022 20.6494 9.49392 19.4861 8.57349L19.4861 8.57347C18.2217 7.57255 16.7775 7.19748 15.1812 7.40598C13.9268 7.57008 12.8544 8.11791 11.9737 9.02595C10.8077 10.2284 10.2813 11.6771 10.3723 13.36C10.4405 14.6195 10.8801 15.7295 11.6923 16.6818C12.4744 17.5986 13.0129 18.633 13.191 19.8445L13.191 19.8447C13.198 19.8929 13.2071 19.9105 13.2102 19.9153C13.212 19.916 13.2157 19.9173 13.2222 19.9187L18.6817 19.9245ZM18.6817 19.9245C18.0192 19.918 17.3566 19.919 16.6948 19.9199C16.4587 19.9203 16.2227 19.9206 15.9869 19.9206H15.9864C15.7539 19.9206 15.5213 19.9204 15.2886 19.9201C14.6234 19.9195 13.9575 19.9188 13.2921 19.9235L18.6817 19.9245ZM13.3156 21.4153H13.3155C13.2815 21.415 13.2594 21.4174 13.2457 21.4205C13.2452 21.4299 13.2455 21.4448 13.2485 21.4668L13.0999 21.4871L13.2484 21.4661C13.2533 21.5006 13.2533 21.533 13.2527 21.5585C13.2524 21.5716 13.252 21.5814 13.2517 21.5901C13.2512 21.6017 13.2508 21.6111 13.2508 21.6233C13.2511 21.908 13.3009 22.0526 13.3793 22.1322C13.457 22.211 13.5981 22.2614 13.8781 22.2616H13.8859H13.894H13.902H13.91H13.918H13.926H13.9341H13.9421H13.9501H13.9581H13.9661H13.9741H13.9822H13.9902H13.9982H14.0062H14.0142H14.0222H14.0303H14.0383H14.0463H14.0543H14.0623H14.0703H14.0784H14.0864H14.0944H14.1024H14.1104H14.1185H14.1265H14.1345H14.1425H14.1505H14.1585H14.1666H14.1746H14.1826H14.1906H14.1986H14.2066H14.2147H14.2227H14.2307H14.2387H14.2467H14.2548H14.2628H14.2708H14.2788H14.2868H14.2948H14.3029H14.3109H14.3189H14.3269H14.3349H14.3429H14.351H14.359H14.367H14.375H14.383H14.3911H14.3991H14.4071H14.4151H14.4231H14.4311H14.4392H14.4472H14.4552H14.4632H14.4712H14.4793H14.4873H14.4953H14.5033H14.5113H14.5193H14.5274H14.5354H14.5434H14.5514H14.5594H14.5675H14.5755H14.5835H14.5915H14.5995H14.6075H14.6156H14.6236H14.6316H14.6396H14.6476H14.6557H14.6637H14.6717H14.6797H14.6877H14.6957H14.7038H14.7118H14.7198H14.7278H14.7358H14.7439H14.7519H14.7599H14.7679H14.7759H14.7839H14.792H14.8H14.808H14.816H14.824H14.8321H14.8401H14.8481H14.8561H14.8641H14.8721H14.8802H14.8882H14.8962H14.9042H14.9122H14.9203H14.9283H14.9363H14.9443H14.9523H14.9603H14.9684H14.9764H14.9844H14.9924H15.0004H15.0085H15.0165H15.0245H15.0325H15.0405H15.0486H15.0566H15.0646H15.0726H15.0806H15.0886H15.0967H15.1047H15.1127H15.1207H15.1287H15.1368H15.1448H15.1528H15.1608H15.1688H15.1768H15.1849H15.1929H15.2009H15.2089H15.2169H15.225H15.233H15.241H15.249H15.257H15.2651H15.2731H15.2811H15.2891H15.2971H15.3051H15.3132H15.3212H15.3292H15.3372H15.3452H15.3533H15.3613H15.3693H15.3773H15.3853H15.3933H15.4014H15.4094H15.4174H15.4254H15.4334H15.4415H15.4495H15.4575H15.4655H15.4735H15.4816H15.4896H15.4976H15.5056H15.5136H15.5216H15.5297H15.5377H15.5457H15.5537H15.5617H15.5698H15.5778H15.5858H15.5938H15.6018H15.6099H15.6179H15.6259H15.6339H15.6419H15.6499H15.658H15.666H15.674H15.682H15.69H15.6981H15.7061H15.7141H15.7221H15.7301H15.7382H15.7462H15.7542H15.7622H15.7702H15.7782H15.7863H15.7943H15.8023H15.8103H15.8183H15.8264H15.8344H15.8424H15.8504H15.8584H15.8664H15.8745H15.8825H15.8905H15.8985H15.9065H15.9146H15.9226H15.9306H15.9386H15.9466H15.9547H15.9627H15.9707H15.9787H15.9867H15.9947H16.0028H16.0108H16.0188H16.0268H16.0348H16.0429H16.0509H16.0589H16.0669H16.0749H16.083H16.091H16.099H16.107H16.115H16.123H16.1311H16.1391H16.1471H16.1551H16.1631H16.1712H16.1792H16.1872H16.1952H16.2032H16.2113H16.2193H16.2273H16.2353H16.2433H16.2513H16.2594H16.2674H16.2754H16.2834H16.2914H16.2995H16.3075H16.3155H16.3235H16.3315H16.3396H16.3476H16.3556H16.3636H16.3716H16.3796H16.3877H16.3957H16.4037H16.4117H16.4197H16.4278H16.4358H16.4438H16.4518H16.4598H16.4679H16.4759H16.4839H16.4919H16.4999H16.5079H16.516H16.524H16.532H16.54H16.548H16.5561H16.5641H16.5721H16.5801H16.5881H16.5961H16.6042H16.6122H16.6202H16.6282H16.6362H16.6443H16.6523H16.6603H16.6683H16.6763H16.6844H16.6924H16.7004H16.7084H16.7164H16.7244H16.7325H16.7405H16.7485H16.7565H16.7645H16.7726H16.7806H16.7886H16.7966H16.8046H16.8126H16.8207H16.8287H16.8367H16.8447H16.8527H16.8608H16.8688H16.8768H16.8848H16.8928H16.9009H16.9089H16.9169H16.9249H16.9329H16.9409H16.949H16.957H16.965H16.973H16.981H16.9891H16.9971H17.0051H17.0131H17.0211H17.0291H17.0372H17.0452H17.0532H17.0612H17.0692H17.0773H17.0853H17.0933H17.1013H17.1093H17.1173H17.1254H17.1334H17.1414H17.1494H17.1574H17.1655H17.1735H17.1815H17.1895H17.1975H17.2055H17.2136H17.2216H17.2296H17.2376H17.2456H17.2537H17.2617H17.2697H17.2777H17.2857H17.2937H17.3018H17.3098H17.3178H17.3258H17.3338H17.3419H17.3499H17.3579H17.3659H17.3739H17.3819H17.39H17.398H17.406H17.414H17.422H17.4301H17.4381H17.4461H17.4541H17.4621H17.4701H17.4782H17.4862H17.4942H17.5022H17.5102H17.5182H17.5263H17.5343H17.5423H17.5503H17.5583H17.5664H17.5744H17.5824H17.5904H17.5984H17.6064H17.6145H17.6225H17.6305H17.6385H17.6465H17.6546H17.6626H17.6706H17.6786H17.6866H17.6946H17.7027H17.7107H17.7187H17.7267H17.7347H17.7427H17.7508H17.7588H17.7668H17.7748H17.7828H17.7909H17.7989H17.8069H17.8149H17.8229H17.8309H17.839H17.847H17.855H17.863H17.871H17.879H17.8871H17.8951H17.9031H17.9111H17.9191H17.9271H17.9352H17.9432H17.9512H17.9592H17.9672H17.9753H17.9833C18.1686 22.2616 18.3062 22.2518 18.4101 22.2289C18.5121 22.2064 18.5717 22.1733 18.6111 22.1334C18.6507 22.0932 18.6836 22.0322 18.7063 21.9281C18.7293 21.8224 18.7394 21.6831 18.7404 21.4965C18.7407 21.4576 18.7379 21.4344 18.7346 21.4211C18.7346 21.4208 18.7345 21.4206 18.7345 21.4204C18.7222 21.4173 18.7003 21.4145 18.6628 21.4148C18.0103 21.4213 17.3574 21.4204 16.7055 21.4194C16.4731 21.4191 16.2408 21.4187 16.0087 21.4187L13.3156 21.4153ZM13.3156 21.4153C13.9822 21.4207 14.6488 21.42 15.3147 21.4192C15.546 21.419 15.7772 21.4187 16.0083 21.4187L13.3156 21.4153ZM13.2114 19.9167C13.2114 19.9168 13.2112 19.9166 13.2108 19.9161C13.2112 19.9165 13.2114 19.9167 13.2114 19.9167ZM16.0083 21.2687C15.7768 21.2687 15.5454 21.269 15.314 21.2692C14.6483 21.27 13.9827 21.2707 13.3168 21.2653L16.0083 21.2687ZM15.9862 24.6247C15.3694 24.6216 14.9173 24.31 14.6118 23.7568C14.9408 23.7612 15.2704 23.7603 15.5985 23.7595C15.7305 23.7591 15.8623 23.7588 15.9937 23.7588H15.9942C16.1256 23.7588 16.2575 23.7592 16.3897 23.7595C16.7177 23.7605 17.0475 23.7614 17.3765 23.7566C17.0692 24.3164 16.6105 24.6277 15.9862 24.6247Z" fill="#0AE194" stroke="#0AE194" stroke-width="0.3" />
                    </svg> :
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="16" fill="#F8F7F2" fill-opacity="0.3" />
                        <path d="M16.6645 5.85L16.6759 5.85179C16.7275 5.85983 16.7795 5.86774 16.8317 5.8757C17.2053 5.93263 17.5928 5.99169 17.9676 6.11227L17.9677 6.1123C20.6856 6.98852 22.4188 8.82399 22.9962 11.6454C23.4445 13.8366 22.9024 15.8364 21.5087 17.579C21.0996 18.0905 20.7322 18.6019 20.507 19.2035C20.3162 19.7141 20.2439 20.2461 20.2291 20.7968L20.2291 20.797C20.2243 20.9695 20.225 21.1427 20.2262 21.3183L20.2265 21.3619C20.2275 21.5227 20.2286 21.6856 20.2257 21.8485C20.2192 22.2388 20.1231 22.5814 19.9378 22.8722C19.7526 23.1628 19.4837 23.3934 19.1439 23.5678L19.1437 23.5679C19.0871 23.5969 19.0542 23.6244 19.0315 23.6532C19.0084 23.6825 18.9886 23.7222 18.9709 23.7859L18.9708 23.786C18.6554 24.9131 17.9458 25.7021 16.8088 26.0243L16.8087 26.0243C15.684 26.3424 14.6789 26.0478 13.8451 25.2437L13.8451 25.2437C13.424 24.8373 13.1461 24.335 13.0121 23.7633C12.9993 23.7089 12.983 23.6757 12.9641 23.6516C12.9452 23.6275 12.9166 23.6034 12.8657 23.5777L16.6645 5.85ZM16.6645 5.85H16.6528H16.6502H16.6475H16.6449H16.6422H16.6396H16.6369H16.6343H16.6316H16.629H16.6263H16.6237H16.621H16.6184H16.6157H16.6131H16.6104H16.6078H16.6051H16.6025H16.5998H16.5972H16.5945H16.5919H16.5892H16.5866H16.5839H16.5813H16.5786H16.576H16.5733H16.5707H16.568H16.5654H16.5627H16.5601H16.5574H16.5548H16.5521H16.5495H16.5468H16.5442H16.5415H16.5389H16.5362H16.5336H16.5309H16.5283H16.5256H16.523H16.5203H16.5177H16.515H16.5124H16.5097H16.5071H16.5044H16.5018H16.4991H16.4965H16.4938H16.4912H16.4885H16.4859H16.4832H16.4806H16.4779H16.4753H16.4726H16.47H16.4673H16.4647H16.462H16.4594H16.4567H16.4541H16.4514H16.4488H16.4461H16.4435H16.4408H16.4382H16.4355H16.4329H16.4302H16.4276H16.4249H16.4223H16.4196H16.417H16.4143H16.4117H16.409H16.4064H16.4037H16.4011H16.3984H16.3958H16.3931H16.3905H16.3878H16.3852H16.3825H16.3799H16.3772H16.3746H16.3719H16.3693H16.3666H16.364H16.3613H16.3587H16.356H16.3534H16.3507H16.3481H16.3454H16.3428H16.3401H16.3375H16.3348H16.3322H16.3295H16.3269H16.3242H16.3216H16.3189H16.3163H16.3136H16.311H16.3083H16.3057H16.303H16.3004H16.2977H16.2951H16.2924H16.2898H16.2871H16.2845H16.2818H16.2792H16.2765H16.2739H16.2712H16.2686H16.2659H16.2633H16.2606H16.258H16.2554H16.2527H16.2501H16.2474H16.2448H16.2421H16.2395H16.2368H16.2342H16.2315H16.2289H16.2262H16.2236H16.2209H16.2183H16.2156H16.213H16.2103H16.2077H16.205H16.2024H16.1997H16.1971H16.1944H16.1918H16.1891H16.1865H16.1838H16.1812H16.1785H16.1759H16.1732H16.1706H16.1679H16.1653H16.1626H16.16H16.1573H16.1547H16.152H16.1494H16.1467H16.1441H16.1414H16.1388H16.1361H16.1335H16.1308H16.1282H16.1255H16.1229H16.1202H16.1176H16.1149H16.1123H16.1096H16.107H16.1043H16.1017H16.099H16.0964H16.0937H16.0911H16.0884H16.0858H16.0831H16.0805H16.0778H16.0752H16.0725H16.0699H16.0672H16.0646H16.062H16.0593H16.0567H16.054H16.0514H16.0487H16.0461H16.0434H16.0408H16.0381H16.0355H16.0328H16.0302H16.0275H16.0249H16.0222H16.0196H16.0169H16.0143H16.0116H16.009H16.0063H16.0037H16.001H15.9984H15.9957H15.9931H15.9904H15.9878H15.9851H15.9825H15.9798H15.9772H15.9745H15.9719H15.9692H15.9666H15.9639H15.9613H15.9586H15.956H15.9533H15.9507H15.948H15.9454H15.9427H15.9401H15.9374H15.9348H15.9321H15.9295H15.9268H15.9242H15.9215H15.9189H15.9162H15.9136H15.9109H15.9083H15.9056H15.903H15.9003H15.8977H15.8951H15.8924H15.8898H15.8871H15.8845H15.8818H15.8792H15.8765H15.8739H15.8712H15.8686H15.8659H15.8633H15.8606H15.858H15.8553H15.8527H15.85H15.8474H15.8447H15.8421H15.8394H15.8368H15.8341H15.8315H15.8288H15.8262H15.8235H15.8209H15.8182H15.8156H15.8129H15.8103H15.8076H15.805H15.8023H15.7997H15.797H15.7944H15.7917H15.7891H15.7864H15.7838H15.7811H15.7785H15.7758H15.7732H15.7705H15.7679H15.7652H15.7626H15.7599H15.7573H15.7546H15.752H15.7493H15.7467H15.744H15.7414H15.7387H15.7361H15.7334H15.7308H15.7281H15.7255H15.7228H15.7202H15.7175H15.7149H15.7122H15.7096H15.7069H15.7043H15.7017H15.699H15.6964H15.6937H15.6911H15.6884H15.6858H15.6831H15.6805H15.6778H15.6752H15.6725H15.6699H15.6672H15.6646H15.6619H15.6593H15.6566H15.654H15.6513H15.6487H15.646H15.6434H15.6407H15.6381H15.6354H15.6328H15.6301H15.6275H15.6248H15.6222H15.6195H15.6169H15.6142H15.6116H15.6089H15.6063H15.6036H15.601H15.5983H15.5957H15.593H15.5904H15.5877H15.5851H15.5824H15.5798H15.5771H15.5745H15.5718H15.5692H15.5665H15.5639H15.5612H15.5586H15.5559H15.5533H15.5506H15.548H15.5453H15.5427H15.54H15.5374H15.5347H15.5321H15.5294H15.5268H15.5241H15.5215H15.5188H15.5162H15.5135H15.5109H15.5082H15.5056H15.5029H15.5003H15.4976H15.495H15.4923H15.4897H15.487H15.4844H15.4817H15.4791H15.4764H15.4738H15.4711H15.4685H15.4658H15.4632H15.4605H15.4579H15.4552H15.4526H15.4499H15.4473H15.4446H15.442H15.4393H15.4367H15.434H15.4314H15.4287H15.4261H15.4234H15.4208H15.4181H15.4155H15.4128H15.4102H15.4075H15.4049H15.4022H15.3996H15.3969H15.3943H15.3916H15.389H15.3863H15.3837H15.381H15.3784H15.3757H15.3731H15.3704H15.3678H15.3651H15.3625H15.3598H15.3572H15.3545H15.3519H15.3492H15.3466H15.3439H15.3413H15.3386H15.336H15.3333H15.3307H15.328H15.3254H15.3227H15.3201H15.3174H15.3148H15.3121H15.3095H15.3068H15.3042H15.3015H15.2989H15.2962H15.2836L15.2712 5.85211C15.1945 5.86508 15.116 5.87741 15.0363 5.8899C14.8604 5.9175 14.6794 5.94589 14.5035 5.98384L14.5033 5.98388C12.6091 6.39527 11.1103 7.4173 10.0369 9.0335C9.02167 10.5599 8.67871 12.2561 8.92796 14.0653L8.92796 14.0653C9.12299 15.4801 9.71744 16.714 10.6429 17.786C11.2157 18.45 11.5797 19.2095 11.7049 20.0788C11.7667 20.5083 11.7647 20.937 11.7627 21.3784C11.7621 21.5273 11.7614 21.6776 11.7631 21.8299C11.7631 21.8299 11.7631 21.8299 11.7631 21.8299L11.9131 21.8282L16.6645 5.85ZM18.6817 19.9245L18.6819 19.9245C18.7202 19.9249 18.7448 19.9222 18.7605 19.9185C18.7679 19.9168 18.7723 19.915 18.7747 19.9139L18.7769 19.9127L18.7776 19.9123L18.7779 19.9119L18.7791 19.9104C18.7802 19.9088 18.7824 19.9052 18.785 19.8988C18.7905 19.8852 18.7967 19.8622 18.8012 19.8244L18.8012 19.8243C18.8513 19.4135 18.9707 19.0216 19.1076 18.644L19.1077 18.6439C19.4014 17.8356 19.9094 17.1713 20.415 16.5277L20.415 16.5277C21.42 15.2488 21.7952 13.7892 21.5635 12.1786L21.5635 12.1785C21.3515 10.7022 20.6494 9.49392 19.4861 8.57349L19.4861 8.57347C18.2217 7.57255 16.7775 7.19748 15.1812 7.40598C13.9268 7.57008 12.8544 8.11791 11.9737 9.02595C10.8077 10.2284 10.2813 11.6771 10.3723 13.36C10.4405 14.6195 10.8801 15.7295 11.6923 16.6818C12.4744 17.5986 13.0129 18.633 13.191 19.8445L13.191 19.8447C13.198 19.8929 13.2071 19.9105 13.2102 19.9153C13.212 19.916 13.2157 19.9173 13.2222 19.9187L18.6817 19.9245ZM18.6817 19.9245C18.0192 19.918 17.3566 19.919 16.6948 19.9199C16.4587 19.9203 16.2227 19.9206 15.9869 19.9206H15.9864C15.7539 19.9206 15.5213 19.9204 15.2886 19.9201C14.6234 19.9195 13.9575 19.9188 13.2921 19.9235L18.6817 19.9245ZM13.3156 21.4153H13.3155C13.2815 21.415 13.2594 21.4174 13.2457 21.4205C13.2452 21.4299 13.2455 21.4448 13.2485 21.4668L13.0999 21.4871L13.2484 21.4661C13.2533 21.5006 13.2533 21.533 13.2527 21.5585C13.2524 21.5716 13.252 21.5814 13.2517 21.5901C13.2512 21.6017 13.2508 21.6111 13.2508 21.6233C13.2511 21.908 13.3009 22.0526 13.3793 22.1322C13.457 22.211 13.5981 22.2614 13.8781 22.2616H13.8859H13.894H13.902H13.91H13.918H13.926H13.9341H13.9421H13.9501H13.9581H13.9661H13.9741H13.9822H13.9902H13.9982H14.0062H14.0142H14.0222H14.0303H14.0383H14.0463H14.0543H14.0623H14.0703H14.0784H14.0864H14.0944H14.1024H14.1104H14.1185H14.1265H14.1345H14.1425H14.1505H14.1585H14.1666H14.1746H14.1826H14.1906H14.1986H14.2066H14.2147H14.2227H14.2307H14.2387H14.2467H14.2548H14.2628H14.2708H14.2788H14.2868H14.2948H14.3029H14.3109H14.3189H14.3269H14.3349H14.3429H14.351H14.359H14.367H14.375H14.383H14.3911H14.3991H14.4071H14.4151H14.4231H14.4311H14.4392H14.4472H14.4552H14.4632H14.4712H14.4793H14.4873H14.4953H14.5033H14.5113H14.5193H14.5274H14.5354H14.5434H14.5514H14.5594H14.5675H14.5755H14.5835H14.5915H14.5995H14.6075H14.6156H14.6236H14.6316H14.6396H14.6476H14.6557H14.6637H14.6717H14.6797H14.6877H14.6957H14.7038H14.7118H14.7198H14.7278H14.7358H14.7439H14.7519H14.7599H14.7679H14.7759H14.7839H14.792H14.8H14.808H14.816H14.824H14.8321H14.8401H14.8481H14.8561H14.8641H14.8721H14.8802H14.8882H14.8962H14.9042H14.9122H14.9203H14.9283H14.9363H14.9443H14.9523H14.9603H14.9684H14.9764H14.9844H14.9924H15.0004H15.0085H15.0165H15.0245H15.0325H15.0405H15.0486H15.0566H15.0646H15.0726H15.0806H15.0886H15.0967H15.1047H15.1127H15.1207H15.1287H15.1368H15.1448H15.1528H15.1608H15.1688H15.1768H15.1849H15.1929H15.2009H15.2089H15.2169H15.225H15.233H15.241H15.249H15.257H15.2651H15.2731H15.2811H15.2891H15.2971H15.3051H15.3132H15.3212H15.3292H15.3372H15.3452H15.3533H15.3613H15.3693H15.3773H15.3853H15.3933H15.4014H15.4094H15.4174H15.4254H15.4334H15.4415H15.4495H15.4575H15.4655H15.4735H15.4816H15.4896H15.4976H15.5056H15.5136H15.5216H15.5297H15.5377H15.5457H15.5537H15.5617H15.5698H15.5778H15.5858H15.5938H15.6018H15.6099H15.6179H15.6259H15.6339H15.6419H15.6499H15.658H15.666H15.674H15.682H15.69H15.6981H15.7061H15.7141H15.7221H15.7301H15.7382H15.7462H15.7542H15.7622H15.7702H15.7782H15.7863H15.7943H15.8023H15.8103H15.8183H15.8264H15.8344H15.8424H15.8504H15.8584H15.8664H15.8745H15.8825H15.8905H15.8985H15.9065H15.9146H15.9226H15.9306H15.9386H15.9466H15.9547H15.9627H15.9707H15.9787H15.9867H15.9947H16.0028H16.0108H16.0188H16.0268H16.0348H16.0429H16.0509H16.0589H16.0669H16.0749H16.083H16.091H16.099H16.107H16.115H16.123H16.1311H16.1391H16.1471H16.1551H16.1631H16.1712H16.1792H16.1872H16.1952H16.2032H16.2113H16.2193H16.2273H16.2353H16.2433H16.2513H16.2594H16.2674H16.2754H16.2834H16.2914H16.2995H16.3075H16.3155H16.3235H16.3315H16.3396H16.3476H16.3556H16.3636H16.3716H16.3796H16.3877H16.3957H16.4037H16.4117H16.4197H16.4278H16.4358H16.4438H16.4518H16.4598H16.4679H16.4759H16.4839H16.4919H16.4999H16.5079H16.516H16.524H16.532H16.54H16.548H16.5561H16.5641H16.5721H16.5801H16.5881H16.5961H16.6042H16.6122H16.6202H16.6282H16.6362H16.6443H16.6523H16.6603H16.6683H16.6763H16.6844H16.6924H16.7004H16.7084H16.7164H16.7244H16.7325H16.7405H16.7485H16.7565H16.7645H16.7726H16.7806H16.7886H16.7966H16.8046H16.8126H16.8207H16.8287H16.8367H16.8447H16.8527H16.8608H16.8688H16.8768H16.8848H16.8928H16.9009H16.9089H16.9169H16.9249H16.9329H16.9409H16.949H16.957H16.965H16.973H16.981H16.9891H16.9971H17.0051H17.0131H17.0211H17.0291H17.0372H17.0452H17.0532H17.0612H17.0692H17.0773H17.0853H17.0933H17.1013H17.1093H17.1173H17.1254H17.1334H17.1414H17.1494H17.1574H17.1655H17.1735H17.1815H17.1895H17.1975H17.2055H17.2136H17.2216H17.2296H17.2376H17.2456H17.2537H17.2617H17.2697H17.2777H17.2857H17.2937H17.3018H17.3098H17.3178H17.3258H17.3338H17.3419H17.3499H17.3579H17.3659H17.3739H17.3819H17.39H17.398H17.406H17.414H17.422H17.4301H17.4381H17.4461H17.4541H17.4621H17.4701H17.4782H17.4862H17.4942H17.5022H17.5102H17.5182H17.5263H17.5343H17.5423H17.5503H17.5583H17.5664H17.5744H17.5824H17.5904H17.5984H17.6064H17.6145H17.6225H17.6305H17.6385H17.6465H17.6546H17.6626H17.6706H17.6786H17.6866H17.6946H17.7027H17.7107H17.7187H17.7267H17.7347H17.7427H17.7508H17.7588H17.7668H17.7748H17.7828H17.7909H17.7989H17.8069H17.8149H17.8229H17.8309H17.839H17.847H17.855H17.863H17.871H17.879H17.8871H17.8951H17.9031H17.9111H17.9191H17.9271H17.9352H17.9432H17.9512H17.9592H17.9672H17.9753H17.9833C18.1686 22.2616 18.3062 22.2518 18.4101 22.2289C18.5121 22.2064 18.5717 22.1733 18.6111 22.1334C18.6507 22.0932 18.6836 22.0322 18.7063 21.9281C18.7293 21.8224 18.7394 21.6831 18.7404 21.4965C18.7407 21.4576 18.7379 21.4344 18.7346 21.4211C18.7346 21.4208 18.7345 21.4206 18.7345 21.4204C18.7222 21.4173 18.7003 21.4145 18.6628 21.4148C18.0103 21.4213 17.3574 21.4204 16.7055 21.4194C16.4731 21.4191 16.2408 21.4187 16.0087 21.4187L13.3156 21.4153ZM13.3156 21.4153C13.9822 21.4207 14.6488 21.42 15.3147 21.4192C15.546 21.419 15.7772 21.4187 16.0083 21.4187L13.3156 21.4153ZM13.2114 19.9167C13.2114 19.9168 13.2112 19.9166 13.2108 19.9161C13.2112 19.9165 13.2114 19.9167 13.2114 19.9167ZM16.0083 21.2687C15.7768 21.2687 15.5454 21.269 15.314 21.2692C14.6483 21.27 13.9827 21.2707 13.3168 21.2653L16.0083 21.2687ZM15.9862 24.6247C15.3694 24.6216 14.9173 24.31 14.6118 23.7568C14.9408 23.7612 15.2704 23.7603 15.5985 23.7595C15.7305 23.7591 15.8623 23.7588 15.9937 23.7588H15.9942C16.1256 23.7588 16.2575 23.7592 16.3897 23.7595C16.7177 23.7605 17.0475 23.7614 17.3765 23.7566C17.0692 24.3164 16.6105 24.6277 15.9862 24.6247Z" fill="#F8F7F2" stroke="#F8F7F2" stroke-width="0.3" />
                    </svg>
                }
            </div>
            <div className="lamp-info">
                <div className="lamp-label">Lamp</div>
                <div className="lamp-device-name">{customName}</div>
            </div>
            <div className="lamp-switch non-selectable" onClick={handleSwitchClick} style={{cursor: 'pointer', userSelect: 'none'}}>
                <div className="lamp-status">{isLampOn ? 'On' : 'Off'}</div>
                {isLampOn ?
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="36" height="20" rx="10" fill="#0AE194" />
                        <g filter="url(#filter0_d_102_746)">
                            <circle cx="28" cy="12" r="6" fill="#F8F7F2" />
                        </g>
                        <defs>
                            <filter id="filter0_d_102_746" x="20" y="5" width="16" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_746" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_746" result="shape" />
                            </filter>
                        </defs>
                    </svg> :
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="34" height="18" rx="9" stroke="#F8F7F2" stroke-width="2" />
                        <circle cx="12" cy="12" r="6" fill="#F8F7F2" />
                    </svg>
                }
            </div>
        </div>
    );
}

export default Lamp


