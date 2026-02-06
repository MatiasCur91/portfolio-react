function SkillItem({ name, level }) {
  return (
    <li>
      {name}
      {level && ` - ${level}`}
    </li>
  )
}

export default SkillItem
