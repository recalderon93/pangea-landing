import { cva } from "class-variance-authority";
import { cn } from "../../lib/classnameMerge";

type Props = {
  color: "white" | "green";
  className?: string;
};

const logoStyles = cva("h-6 sm:h-9", {
  variants: {
    color: {
      white: "fill-white-100",
      green: "fill-teal-400",
    },
  },
});

const PangeaLogo = ({ color = "white", className }: Props) => (
  <svg
    viewBox="0 0 157 38"
    className={cn([logoStyles({ color }), className])}
    fill="none">
    <path d="M130.957 18.1132C130.957 17.4144 130.875 16.7157 130.709 16.0707C129.606 11.3139 124.75 7.71274 118.847 7.57837H118.681C112.336 7.71274 107.15 11.5558 106.239 16.5545C106.239 16.6351 106.212 16.7157 106.212 16.7963C106.184 17.0382 106.156 17.3069 106.129 17.5488C106.129 17.7369 106.101 17.8982 106.101 18.0863C106.101 18.2744 106.101 18.4357 106.129 18.6238C106.156 18.8925 106.184 19.1344 106.212 19.3763C106.212 19.4569 106.239 19.5375 106.239 19.6181C107.122 24.6974 112.281 28.6211 118.516 28.6211C118.571 28.6211 118.626 28.6211 118.681 28.6211H118.847C118.902 28.6211 118.957 28.6211 119.012 28.6211C122.792 28.6211 126.212 27.2774 128.557 25.1812C128.778 24.9662 128.806 24.6168 128.585 24.4018L126.047 21.9293C125.826 21.7144 125.495 21.7144 125.274 21.9293C123.84 23.2193 121.688 24.0524 119.288 24.0524C119.15 24.0524 119.012 24.0524 118.874 24.0524H118.902C115.95 23.9449 113.439 22.5743 112.253 20.6394C112.143 20.4513 112.281 20.2363 112.501 20.2363H130.268C130.544 20.2363 130.764 20.0481 130.82 19.7794C130.902 19.2419 130.957 18.6775 130.957 18.1132ZM112.391 16.0438C112.17 16.0438 112.06 15.8288 112.143 15.6407C113.246 13.5714 115.702 12.1202 118.543 12.1202C118.653 12.1202 118.791 12.1202 118.902 12.1202H118.929C121.633 12.2545 123.895 13.652 124.971 15.6407C125.054 15.8288 124.943 16.0438 124.723 16.0438H112.391Z" />
    <path d="M45.7399 8.97582V9.45957C43.7536 8.30396 41.3259 7.60522 38.7051 7.60522C31.8358 7.60522 26.2908 12.3351 26.2908 18.14C26.2908 23.9718 31.8358 28.6748 38.7051 28.6748C41.3259 28.6748 43.726 28.003 45.7399 26.8205V27.3042C45.7399 27.8955 46.2365 28.3792 46.8434 28.3792H50.0159C50.6229 28.3792 51.1194 27.8955 51.1194 27.3042V8.97582C51.1194 8.38458 50.6229 7.90084 50.0159 7.90084H46.8434C46.2365 7.90084 45.7399 8.38458 45.7399 8.97582ZM45.7399 18.1938C45.7123 21.4725 42.5673 24.1062 38.7051 24.1062C34.8153 24.1062 31.6703 21.4456 31.6703 18.14C31.6703 14.8345 34.8153 12.1739 38.7051 12.1739C42.5673 12.1739 45.7123 14.8345 45.7399 18.0863V18.1938Z" />
    <path d="M151.621 8.97582V9.45957C149.634 8.30396 147.234 7.6321 144.641 7.60522H144.586C137.716 7.60522 132.171 12.3351 132.171 18.14C132.171 23.9718 137.716 28.6748 144.586 28.6748H144.641C147.234 28.6748 149.634 27.9761 151.621 26.8205V27.3042C151.621 27.8955 152.117 28.3792 152.724 28.3792H155.897C156.503 28.3792 157 27.8955 157 27.3042V8.97582C157 8.38458 156.503 7.90084 155.897 7.90084H152.724C152.117 7.90084 151.621 8.38458 151.621 8.97582ZM144.586 24.1062C140.696 24.1062 137.551 21.4456 137.551 18.14C137.551 14.8345 140.696 12.1739 144.586 12.1739C144.613 12.1739 144.641 12.1739 144.668 12.1739C148.503 12.2008 151.593 14.8345 151.621 18.0863V18.1669C151.593 21.4187 148.503 24.0524 144.668 24.0793C144.641 24.1062 144.613 24.1062 144.586 24.1062Z" />
    <path d="M13.0764 0.349121H1.37937C0.606923 0.349121 0 0.94036 0 1.69285V9.24458C0 12.2008 2.48287 14.6195 5.51748 14.6195H6.17958V6.53025C6.17958 5.77777 6.78651 5.18653 7.55895 5.18653H13.0764C16.8835 5.18653 19.9733 7.79336 19.9733 11.0183C19.9733 14.2432 16.8835 16.8501 13.0764 16.8501H5.51748C2.48287 16.8501 0 19.2688 0 22.225V27.358C0 28.1105 0.606923 28.7017 1.37937 28.7017H4.80021C5.57266 28.7017 6.17958 28.1105 6.17958 27.358V23.0312C6.17958 22.2787 6.78651 21.6875 7.55895 21.6875H13.0764C20.0009 21.6875 25.6287 16.9038 25.6287 11.0183C25.6287 5.13278 19.9733 0.349121 13.0764 0.349121Z" />
    <path d="M103.315 7.90086H100.142C99.5354 7.90086 99.0389 8.3846 99.0389 8.97584V9.40584C97.3008 8.3846 95.2594 7.73962 93.0248 7.57837H91.8937C91.0937 7.57837 90.2936 7.63212 89.4936 7.76649C89.3833 7.79337 89.2729 7.82024 89.1626 7.82024C89.0798 7.84711 88.9694 7.84711 88.8867 7.87399C88.8039 7.90086 88.7212 7.90086 88.6384 7.92774C88.4177 7.98149 88.197 8.03524 87.9763 8.08898C87.8108 8.14273 87.6453 8.19648 87.4797 8.25023C86.9556 8.43835 86.4314 8.62647 85.9072 8.86835C85.7417 8.94897 85.5762 9.02959 85.4107 9.11022C85.2451 9.19084 85.0796 9.27146 84.9417 9.37896C81.7415 11.2602 79.6173 14.3507 79.5621 17.8982V18.2475C79.6173 21.795 81.7415 24.8855 84.9417 26.7668C85.052 26.8205 85.1624 26.9011 85.2727 26.9549C85.3555 27.0086 85.4383 27.0355 85.521 27.0893C85.5762 27.1161 85.659 27.1699 85.7141 27.1968C85.7417 27.1968 85.7693 27.2236 85.7693 27.2236C85.8245 27.2505 85.8521 27.2505 85.9072 27.2774C85.9624 27.3042 85.99 27.3311 86.0452 27.3311C86.0728 27.3311 86.0728 27.358 86.1004 27.358C87.8384 28.1642 89.8247 28.648 91.9489 28.648C92.3627 28.648 92.7489 28.6211 93.1351 28.5942C93.2179 28.5942 93.3007 28.5673 93.3834 28.5673C93.4386 28.5673 93.4662 28.5673 93.5214 28.5673C93.549 28.5673 93.6041 28.5673 93.6317 28.5673C93.8524 28.5405 94.1007 28.5136 94.3214 28.4599C94.8732 28.3792 95.4249 28.2449 95.9766 28.0836C96.1422 28.0299 96.3077 27.9761 96.4732 27.9224C96.6663 27.8417 96.8594 27.788 97.0526 27.7074C97.3284 27.5999 97.6043 27.4655 97.8802 27.358C97.9629 27.3042 98.0733 27.2774 98.1561 27.2236C98.4319 27.0893 98.6802 26.9549 98.9561 26.7936V28.9167C98.9561 30.8517 97.356 32.4104 95.3697 32.4104H87.0935C86.4866 32.4104 85.99 32.8941 85.99 33.4854V36.5759C85.99 37.1672 86.4866 37.6509 87.0935 37.6509H94.9559C100.142 37.6509 104.336 33.566 104.336 28.5136V8.97584C104.418 8.3846 103.922 7.90086 103.315 7.90086ZM99.0389 18.2744C99.0389 18.3013 99.0389 18.355 99.0389 18.3819V18.4088C99.0389 18.4357 99.0389 18.4625 99.0389 18.4894C99.0389 18.5432 99.0389 18.6238 99.0113 18.6775C99.0113 18.7313 98.9837 18.785 98.9837 18.8388C98.9837 18.8657 98.9837 18.8925 98.9837 18.8925C98.9837 18.9194 98.9837 18.9463 98.9561 18.9732V19C98.9561 19 98.9561 19 98.9561 19.0269C98.9561 19.0269 98.9561 19.0538 98.9561 19.0807C98.9285 19.1613 98.9285 19.2419 98.9009 19.2956C98.7354 20.075 98.3768 20.7737 97.8802 21.4187C97.7147 21.6337 97.5491 21.8487 97.356 22.0368C97.2181 22.1712 97.0801 22.2787 96.9422 22.4131C96.8594 22.4668 96.8043 22.5206 96.7215 22.5743C96.6388 22.6281 96.5836 22.6818 96.5008 22.7356C96.418 22.7893 96.3353 22.8431 96.2801 22.8968C96.1973 22.9506 96.1146 23.0043 96.0318 23.0312C95.9491 23.085 95.8663 23.1387 95.7835 23.1656C95.7284 23.2193 95.6456 23.2462 95.5628 23.2731C95.5352 23.2731 95.5077 23.2999 95.4801 23.2999C95.3973 23.3537 95.3145 23.3806 95.2594 23.4074C95.1766 23.4612 95.0938 23.4881 94.9835 23.5149C94.9007 23.5418 94.7904 23.5956 94.7076 23.6224C94.6249 23.6493 94.5421 23.6762 94.4593 23.7031C94.349 23.7568 94.2111 23.7837 94.1007 23.8106C94.0179 23.8374 93.9352 23.8643 93.8524 23.8643C93.7697 23.8912 93.6869 23.8912 93.6041 23.9181C93.5214 23.9449 93.411 23.9449 93.3283 23.9718C93.2455 23.9718 93.1903 23.9987 93.1076 23.9987C92.7489 24.0524 92.3903 24.0793 92.0041 24.0793C88.3073 24.0793 85.2727 21.6606 84.9969 18.57C84.9969 18.4894 84.9693 18.4088 84.9693 18.3282V18.2744C84.9693 18.2475 84.9693 18.2207 84.9693 18.1938C84.9693 18.1669 84.9693 18.14 84.9693 18.1132V18.0325C84.9693 17.925 84.9693 17.8176 84.9693 17.7369C84.9693 17.7101 84.9693 17.6832 84.9693 17.6563C84.9693 17.5757 84.9969 17.4951 84.9969 17.3876C84.9969 17.3338 84.9969 17.3069 85.0244 17.2532C85.0244 17.2263 85.0244 17.1726 85.0244 17.1457C85.0244 17.1188 85.0244 17.1188 85.0244 17.0919C85.052 16.9844 85.052 16.9038 85.0796 16.7963C85.1072 16.6888 85.1348 16.6082 85.1624 16.5007C85.2176 16.3126 85.3003 16.1245 85.3831 15.9363C85.4107 15.8557 85.4658 15.7482 85.521 15.6676C85.5762 15.587 85.6038 15.4795 85.659 15.3988C85.7693 15.2376 85.8521 15.0495 85.99 14.8882C86.0452 14.8076 86.1004 14.727 86.1831 14.6464C86.2935 14.4851 86.4314 14.3239 86.5969 14.1895C86.6797 14.1089 86.7349 14.0551 86.8176 13.9745C86.9004 13.8939 86.9832 13.8401 87.0383 13.7595C87.1211 13.6789 87.2038 13.6251 87.259 13.5714C87.259 13.5714 87.259 13.5714 87.2866 13.5714C87.3694 13.5176 87.4521 13.437 87.5349 13.3833C87.7004 13.2489 87.8935 13.1414 88.0866 13.0339C88.1694 12.9801 88.2798 12.9264 88.3625 12.8726C88.4453 12.8189 88.5556 12.7651 88.6384 12.7383C88.7487 12.6845 88.8315 12.6576 88.9419 12.6039C89.0246 12.577 89.1074 12.5502 89.1901 12.4964C89.2453 12.4695 89.3005 12.4427 89.3557 12.4427C89.4108 12.4158 89.466 12.3889 89.5488 12.3889C89.6315 12.362 89.7419 12.3352 89.8247 12.3083C89.8798 12.2814 89.9626 12.2814 90.0178 12.2545C90.0454 12.2545 90.0729 12.2545 90.1005 12.2277C90.1833 12.2008 90.2385 12.2008 90.3212 12.1739C90.404 12.147 90.4868 12.147 90.5695 12.1202C90.6523 12.0933 90.7626 12.0933 90.8454 12.0664C90.9833 12.0395 91.1213 12.0395 91.2868 12.0127C91.3971 12.0127 91.5075 11.9858 91.6454 11.9858C91.7558 11.9858 91.8937 11.9858 92.0041 11.9858C92.2523 11.9858 92.473 11.9858 92.6937 12.0127C92.7489 12.0127 92.8317 12.0127 92.8869 12.0395C92.942 12.0395 92.9972 12.0664 93.0524 12.0664C93.1627 12.0664 93.2731 12.0933 93.3558 12.1202C93.4386 12.1202 93.4938 12.147 93.5765 12.1739C93.7145 12.2008 93.88 12.2277 94.0179 12.2814C94.1007 12.3083 94.2111 12.3352 94.2938 12.362C94.349 12.3889 94.4042 12.3889 94.4593 12.4158C94.5421 12.4427 94.6249 12.4695 94.7076 12.4964C94.7904 12.5233 94.8732 12.5502 94.9559 12.577C95.0111 12.6039 95.0663 12.6308 95.1214 12.6576C95.1766 12.6845 95.2594 12.7114 95.3146 12.7383H95.3421C95.4525 12.792 95.5353 12.8189 95.618 12.8726C95.7008 12.9264 95.8111 12.9533 95.8939 13.007C95.9215 13.007 95.9215 13.0339 95.9491 13.0339C96.0318 13.0876 96.1146 13.1414 96.1974 13.1951C96.2801 13.2489 96.3629 13.3026 96.4456 13.3564C96.5008 13.4101 96.5836 13.437 96.6387 13.4908C96.6939 13.5445 96.7767 13.5983 96.8319 13.652C96.8594 13.652 96.8595 13.6789 96.887 13.7058C96.9422 13.7595 97.025 13.8133 97.0801 13.867C97.0801 13.867 97.1077 13.867 97.1077 13.8939C97.1629 13.9208 97.2181 13.9745 97.2457 14.0282C97.3008 14.082 97.356 14.1357 97.4112 14.1895C97.4664 14.2432 97.5215 14.3239 97.5767 14.3776C97.6319 14.4314 97.6871 14.4851 97.7147 14.5389C97.7698 14.5926 97.825 14.6464 97.8526 14.727C97.8802 14.7539 97.8802 14.7807 97.9078 14.8076C97.9629 14.8614 97.9905 14.9151 98.0181 14.9689C98.0457 14.9957 98.0457 15.0226 98.0733 15.0495C98.1285 15.1032 98.1561 15.1839 98.2112 15.2376C98.2664 15.3182 98.294 15.3988 98.3492 15.4795C98.3492 15.5063 98.3768 15.5063 98.3768 15.5332C98.4043 15.6138 98.4595 15.6676 98.4871 15.7482C98.5423 15.8557 98.5975 15.9632 98.625 16.0976C98.6526 16.1782 98.6802 16.232 98.7078 16.3126C98.7354 16.3932 98.763 16.5007 98.7906 16.5813C98.8182 16.6888 98.8457 16.7694 98.8733 16.8769C98.9009 16.9576 98.9009 17.0651 98.9285 17.1726C98.9561 17.3607 98.9837 17.5488 98.9837 17.7638C98.9837 17.8444 98.9837 17.925 98.9837 18.0325C99.0389 18.1669 99.0389 18.2207 99.0389 18.2744Z" />
    <path d="M76.4171 7.55151C77.024 7.55151 77.5206 8.03525 77.5206 8.62649V25.5574C77.5206 28.7286 73.3549 30.0723 71.3962 27.5193L60.5267 13.3295C60.1957 12.9264 59.5336 13.1414 59.5336 13.652V27.4924C59.5336 28.0836 59.037 28.5674 58.4301 28.5674H55.2575C54.6506 28.5674 54.1541 28.0836 54.1541 27.4924V12.9802C54.1541 7.63214 61.1337 5.37468 64.4166 9.6746L71.1203 18.4626C71.4514 18.8657 72.1135 18.6507 72.1135 18.1401V8.62649C72.1135 8.03525 72.61 7.55151 73.217 7.55151H76.4171Z" />
  </svg>
);

export default PangeaLogo;
