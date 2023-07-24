// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
const showAllBootcamps = async (req, res) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

// @desc        Get one bootcamp
// @route       GET /api/v1/bootcamps/id
// @access      Public
const showOneBootcamp = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ success: true, msg: `show bootcamp ${id}` });
};

// @desc        Add one bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
const addBootcamp = async (req, res) => {
  res.status(201).json({ success: true, msg: "bootcamp add success" });
};

// @desc        Update one bootcamp
// @route       PUT /api/v1/bootcamps/id
// @access      Private
const updateBootcamp = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ success: true, msg: `bootcamp ${id} update` });
};

// @desc        Delete one bootcamp
// @route       DELETE /api/v1/bootcamps/id
// @access      Private
const deleteBootcamp = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ success: true, msg: `bootcamp ${id} deleted` });
};

export {
  showAllBootcamps,
  addBootcamp,
  updateBootcamp,
  deleteBootcamp,
  showOneBootcamp,
};
