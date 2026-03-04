export default function Contact() {

return (

<div className="min-h-screen bg-[#0B1C2D] text-white py-24 px-6">

<h1 className="text-4xl font-bold text-center mb-12">
Contact ShoLuc Education
</h1>

<div className="max-w-3xl mx-auto bg-white text-[#0B1C2D] p-10 rounded-xl">

<form className="space-y-6">

<div>
<label className="font-semibold block mb-2">Name</label>
<input
type="text"
className="w-full p-3 border rounded"
placeholder="Your name"
/>
</div>

<div>
<label className="font-semibold block mb-2">Email</label>
<input
type="email"
className="w-full p-3 border rounded"
placeholder="Your email"
/>
</div>

<div>
<label className="font-semibold block mb-2">Message</label>
<textarea
className="w-full p-3 border rounded"
rows={5}
placeholder="How can we assist you?"
></textarea>
</div>

<button className="bg-[#0B1C2D] text-white px-6 py-3 rounded font-semibold">
Send Message
</button>

</form>

</div>

</div>

);

}