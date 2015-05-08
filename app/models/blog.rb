class Blog < ActiveRecord::Base
  before_validation :sub_new_lines

  def sub_new_lines
    self.content.gsub!(/\r\n/, "<br>")
  end
end
