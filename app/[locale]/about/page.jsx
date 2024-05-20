import { about } from "../_lib/data"

function About() {

  return (
    <div className="py-4">
      <h2 className="text-2xl font-medium mb-4">About the database</h2>
      <div className="[&>p]:mb-3"
        dangerouslySetInnerHTML={{ __html: about.data.text }}
      />
    </div>
  )
}

export default About