import { AboutDetailBlock } from 'components/About/AboutDetailBlock/AboutDetailBlock';
import { Innerinfo } from 'components/landing/Info/Innerinfo';
import { AboutPromo } from 'components/About/AboutPromo/AboutPromo';
import { Advantage } from 'components/shared/Advantage/Advantage';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
];
const AboutPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='About'>
      <AboutDetailBlock />
      <AboutPromo />
      <Innerinfo />
      <Advantage />
    </PublicLayout>
  );
};

export default AboutPage;
