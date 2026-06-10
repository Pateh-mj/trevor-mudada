import './ParallaxBanner.css';

const highlights = [
  { value: '4+',   label: 'Years Turning Health Data Into Action' },
  { value: 'WHO',  label: 'International Research Publication' },
  { value: '78%',  label: 'Compliance Improvement Achieved' },
  { value: '6+',   label: 'Analytics Platforms Mastered' },
];

export default function ParallaxBanner() {
  return (
    <div className="parallax">
      <div
        className="parallax__bg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/parallax-bg.jpg)` }}
      />
      <div className="parallax__overlay" />

      <div className="parallax__content">
        <p className="parallax__eyebrow">Data-Driven. Evidence-Based. Impact-Focused.</p>
        <h2 className="parallax__headline">
          Where Health Systems Meet<br />
          <span className="parallax__headline-accent">the Power of Data</span>
        </h2>
        <p className="parallax__sub">
          From hospital corridors to national research outputs — every decision
          backed by rigorous analysis and a commitment to measurable outcomes.
        </p>

        <div className="parallax__stats">
          {highlights.map(({ value, label }) => (
            <div className="parallax__stat" key={label}>
              <span className="parallax__stat-val">{value}</span>
              <span className="parallax__stat-lbl">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
