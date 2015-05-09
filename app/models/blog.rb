class Blog < ActiveRecord::Base
  before_validation :sub_new_lines

  has_many :comments

  def sub_new_lines
    self.content.gsub!(/\r\n/, "<br>")
  end
end
