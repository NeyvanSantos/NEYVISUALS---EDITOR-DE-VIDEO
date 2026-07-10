const SKILLS = [
  'Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro',
  'Motion Graphics', 'Color Grading', 'Sound Design', 'VFX',
  'Storytelling', 'Content Creation', 'Adobe Photoshop', 'Adobe Illustrator',
  'Cinema 4D', 'Blender', 'Social Media', 'YouTube Editing',
];

export default function SkillsTicker() {
  const duplicated = [...SKILLS, ...SKILLS];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {duplicated.map((skill, i) => (
          <span key={`${skill}-${i}`}>
            {i > 0 && <span className="ticker-dot" aria-hidden="true"> ◆ </span>}
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
