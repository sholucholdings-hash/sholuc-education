export default function Resources() {

return (

<div className="min-h-screen bg-[#0B1C2D] text-white p-12">

<h1 className="text-4xl font-bold mb-10 text-center">
Student Resources
</h1>

<div className="max-w-4xl mx-auto space-y-6">

<div className="border border-gray-600 p-6 rounded-lg">

<h2 className="text-xl font-bold mb-3">Mathematics Worksheets</h2>

<a
href="/resources/math-worksheet-1.pdf"
className="text-[#C6A34E]"
>
Download Worksheet
</a>

</div>

<div className="border border-gray-600 p-6 rounded-lg">

<h2 className="text-xl font-bold mb-3">Physical Sciences Notes</h2>

<a
href="/resources/physics-notes.pdf"
className="text-[#C6A34E]"
>
Download Notes
</a>

</div>

</div>

</div>

);

}