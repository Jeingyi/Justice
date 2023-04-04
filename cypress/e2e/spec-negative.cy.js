// Negative Tests Below

// Expected Failure Below

describe('Negative Path - Force a Test Failure through Assertion', () => {
  it('fails', () => {
    expect(true).to.equal(false)
  })
});