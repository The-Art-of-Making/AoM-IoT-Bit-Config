<div>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    </div>
    {/* <form onSubmit={this.onSubmit}> */}
    <form>
        <table className="table">
            <tbody>
                <tr>
                    <th scope="row">Name</th>
                    <td></td>
                    <td>
                        {/* <div><input type="text" className={classnames((errors.name !== undefined) ? "form-control is-invalid" : "form-control", { invalid: errors.name })} onChange={this.onChange} value={this.state.name} error={errors.name} placeholder="Name" id="name"></input><small className="form-text text-danger">{errors.name}</small></div> */}
                    </td>
                </tr>
                <tr>
                    <th scope="row">Instructor</th>
                    <td></td>
                    <td>
                        {/* <div><input type="text" className={classnames((errors.instructor !== undefined) ? "form-control is-invalid" : "form-control", { invalid: errors.instructor })} onChange={this.onChange} value={this.state.instructor} error={errors.instructor} placeholder="Instructor" id="instructor"></input><small className="form-text text-danger">{errors.instructor}</small></div> */}
                    </td>
                </tr>
                <tr>
                    <th scope="row">Location</th>
                    <td></td>
                    <td>
                        {/* <div><input type="text" className={classnames((errors.location !== undefined) ? "form-control is-invalid" : "form-control", { invalid: errors.location })} onChange={this.onChange} value={this.state.location} error={errors.location} placeholder="Location" id="location"></input><small className="form-text text-danger">{errors.location}</small></div> */}
                    </td>
                </tr>
                <tr>
                    <th scope="row">Days</th>
                    <td></td>
                    <td className="d-flex align-items-center" style={{ paddingTop: "1.5%", paddingBottom: "1.5%" }}>
                        {/* {days} */}
                    </td>
                </tr>
                <tr>
                    <th scope="row">Start Time</th>
                    <td></td>
                    <td>
                        {/* <div><input type="time" className={classnames((errors.startTime !== undefined) ? "form-control is-invalid" : "form-control", { invalid: errors.startTime })} onChange={this.onChange} value={this.state.startTime} error={errors.startTime} placeholder="00:00" id="startTime"></input><small className="form-text text-danger">{errors.startTime}</small></div> */}
                    </td>
                </tr>
                <tr>
                    <th scope="row">End Time</th>
                    <td></td>
                    <td>
                        {/* <div><input type="time" className={classnames((errors.endTime !== undefined) ? "form-control is-invalid" : "form-control", { invalid: errors.endTime })} onChange={this.onChange} value={this.state.endTime} error={errors.endTime} placeholder="00:00" id="endTime"></input><small className="form-text text-danger">{errors.endTime}</small></div> */}
                    </td>
                </tr>
            </tbody>
        </table>
        <button className="btn btn-primary" type="submit">Add Course</button>
    </form>
</div>